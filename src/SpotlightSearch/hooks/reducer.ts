import { SearchResult, SpotlightSearchStateType } from "./typings";

type ActionType =
  | {
      type: "OPEN";
    }
  | {
      type: "CLOSE";
    }
  | {
      type: "TOGGLE";
    }
  | {
      type: "CHANGE_SEARCH_VALUE";
      payload: {
        value: string;
      };
    }
  | {
      type: "CHANGE_SEARCH_RESULTS_REQUESTED";
    }
  | {
      type: "CHANGE_SEARCH_RESULTS_REJECTED";
    }
  | {
      type: "CHANGE_SEARCH_RESULTS_RESOLVED";
      payload: {
        value: SearchResult[];
      };
    };

function reducer(
  state: SpotlightSearchStateType,
  action: ActionType
): SpotlightSearchStateType {
  if (!state.visible && action.type !== "TOGGLE" && action.type !== "CLOSE") {
    return state;
  }

  switch (action.type) {
    case "OPEN": {
      return { ...state, visible: true };
    }
    case "CLOSE": {
      return {
        ...state,
        visible: false,
        status: "idle",
        searchResults: [],
        searchValue: "",
      };
    }
    case "TOGGLE": {
      return {
        ...state,
        visible: !state.visible,
        status: "idle",
        searchResults: [],
        searchValue: "",
      };
    }
    case "CHANGE_SEARCH_VALUE": {
      const newState: SpotlightSearchStateType = {
        ...state,
        searchValue: action.payload.value,
      };

      if (action.payload.value.length === 0) {
        newState.status = "idle";
        newState.searchResults = [];
      }

      return newState;
    }
    case "CHANGE_SEARCH_RESULTS_REQUESTED": {
      return { ...state, status: "loading", searchResults: [] };
    }
    case "CHANGE_SEARCH_RESULTS_RESOLVED": {
      return {
        ...state,
        status: "resolved",
        searchResults: action.payload.value,
      };
    }
    case "CHANGE_SEARCH_RESULTS_REJECTED": {
      return { ...state, status: "error" };
    }
    default: {
      return state;
    }
  }
}

export type { ActionType };
export { reducer };
