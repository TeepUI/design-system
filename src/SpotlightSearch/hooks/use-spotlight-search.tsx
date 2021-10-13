import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { SpotlightSearch } from "../SpotlightSearch";
import { ActionType, reducer } from "./reducer";
import { SpotlightSearchStateType } from "./typings";

type SpotlightSearchDispatchType = React.Dispatch<ActionType>;

const initialState: SpotlightSearchStateType = {
  visible: false,
  searchValue: "",
};

const SpotlightSearchStateContext = createContext<SpotlightSearchStateType>(
  initialState
);

const SpotlightSearchDispatchContext = createContext<SpotlightSearchDispatchType>(
  () => {}
);

function useSpotlightSearchState() {
  return useContext(SpotlightSearchStateContext);
}

function useSpotlightSearchDispatch() {
  return useContext(SpotlightSearchDispatchContext);
}

function SpotlightSearchProvider(props: PropsWithChildren<unknown>) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function closeSpotlightSearch() {
    dispatch({ type: "CLOSE" });
  }

  function detectKeyboardActions(event: KeyboardEvent) {
    if (event.metaKey && event.key === "p") {
      event.preventDefault();
      dispatch({ type: "TOGGLE" });
    }

    if (event.key === "Escape" || event.key === "Esc") {
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
