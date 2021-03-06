import Bluebird from "bluebird";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { useRef, useState } from "react";
import { SpotlightSearch } from "../SpotlightSearch";
import { ActionType, initialState, reducer } from "./reducer";
import { SearchResult } from "./typings";

type SpotlightSearchDispatchType = React.Dispatch<ActionType>;
type SpotlightSearchConfig = {
  onSelect: (selectedItem: SearchResult) => void;
  onSearch?: (value: string) => Bluebird<SearchResult[]>;
};

const SpotlightSearchStateContext = createContext(initialState);

const SpotlightSearchDispatchContext = createContext<SpotlightSearchDispatchType>(
  () => {}
);

function useSpotlightSearchState() {
  return useContext(SpotlightSearchStateContext);
}

function useSpotlightSearchDispatch() {
  return useContext(SpotlightSearchDispatchContext);
}

type SpotlightSearchProviderProps = {
  config: SpotlightSearchConfig;
};

function SpotlightSearchProvider(
  props: PropsWithChildren<SpotlightSearchProviderProps>
) {
  const currentRequest = useRef<Bluebird<SearchResult[]>>();
  const currentOnSelect = useRef(props.config.onSelect);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  const stateRef = useRef(state);

  function closeSpotlightSearch() {
    if (currentRequest.current) {
      currentRequest.current.cancel();
    }

    dispatch({ type: "CLOSE" });
    setIsFirstRender(true);
  }

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    if (!isFirstRender && props.config.onSearch && state.searchValue) {
      dispatch({ type: "CHANGE_SEARCH_RESULTS_REQUESTED" });
      currentRequest.current = props.config.onSearch(state.searchValue);

      currentRequest.current
        .then((searchResults) => {
          dispatch({
            type: "CHANGE_SEARCH_RESULTS_RESOLVED",
            payload: {
              value: searchResults,
            },
          });
        })
        .catch(() => {
          dispatch({ type: "CHANGE_SEARCH_RESULTS_REJECTED" });
        });
    } else {
      setIsFirstRender(false);
    }

    return () => {
      currentRequest.current?.cancel();
    };
  }, [state.searchValue]);

  function detectKeyboardActions(event: KeyboardEvent) {
    if (event.metaKey && event.key === "p") {
      event.preventDefault();
      dispatch({ type: "TOGGLE" });
    }

    if (
      (event.key === "Down" || event.key === "ArrowDown") &&
      stateRef.current.visible
    ) {
      event.preventDefault();
      dispatch({ type: "CHANGE_SELECTED_INDEX_TO_NEXT" });
    }

    if (
      (event.key === "Up" || event.key === "ArrowUp") &&
      stateRef.current.visible
    ) {
      event.preventDefault();
      dispatch({ type: "CHANGE_SELECTED_INDEX_TO_PREV" });
    }

    if (event.key === "Escape" || event.key === "Esc") {
      closeSpotlightSearch();
    }

    if (event.key === "Enter") {
      if (currentOnSelect.current) {
        currentOnSelect.current(
          stateRef.current.searchResults[stateRef.current.selectedIndex]
        );
      }

      closeSpotlightSearch();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", detectKeyboardActions);

    return () => {
      document.removeEventListener("keydown", detectKeyboardActions);
    };
  }, []);

  return (
    <SpotlightSearchStateContext.Provider value={state}>
      <SpotlightSearchDispatchContext.Provider value={dispatch}>
        <SpotlightSearch
          visible={state.visible}
          onClose={closeSpotlightSearch}
        />
        {props.children}
      </SpotlightSearchDispatchContext.Provider>
    </SpotlightSearchStateContext.Provider>
  );
}

export {
  useSpotlightSearchState,
  useSpotlightSearchDispatch,
  SpotlightSearchProvider,
};
