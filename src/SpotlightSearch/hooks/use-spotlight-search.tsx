import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { SpotlightSearch } from "../SpotlightSearch";
import { reducer } from "./reducer";
import { SpotlightSearchStateType } from "./typings";

const initialState: SpotlightSearchStateType = {
  isOpen: false,
};

const SpotlightSearchStateContext = createContext<SpotlightSearchStateType>(
  initialState
);

function useSpotlightSearch() {
  return useContext(SpotlightSearchStateContext);
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
      <SpotlightSearch visible={state.isOpen} onClose={closeSpotlightSearch} />
      {props.children}
    </SpotlightSearchStateContext.Provider>
  );
}

export { useSpotlightSearch, SpotlightSearchProvider };
