import { SearchResult, SpotlightSearchStateType } from "./typings";

const initialState: SpotlightSearchStateType = {
  visible: false,
  status: "idle",
  searchValue: "",
  searchResults: [],
  selectedIndex: 0,
};

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
    }
  | {
      type: "CHANGE_SELECTED_INDEX_TO_NEXT";
    }
  | {
      type: "CHANGE_SELECTED_INDEX_TO_PREV";
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
      return { ...state, visible: true, selectedIndex: 0 };
    }
    case "CLOSE": {
      return {
        ...state,
        visible: false,
        status: "idle",
        searchResults: [],
        searchValue: "",
        selectedIndex: 0,
      };
    }
    case "TOGGLE": {
      return {
        ...state,
        visible: !state.visible,
        status: "idle",
        searchResults: [],
        searchValue: "",
        selectedIndex: 0,
      };
    }
    case "CHANGE_SEARCH_VALUE": {
      const newState: SpotlightSearchStateType = {
        ...state,
        searchValue: action.payload.value,
        selectedIndex: 0,
      };

      if (action.payload.value.length === 0) {
        newState.status = "idle";
        newState.searchResults = [];
      }

      return newState;
    }
    case "CHANGE_SEARCH_RESULTS_REQUESTED": {
      return {
        ...state,
        status: "loading",
        searchResults: [],
      };
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
    case "CHANGE_SELECTED_INDEX_TO_NEXT": {
      const nextIndex =
        state.selectedIndex + 1 > state.searchResults.length - 1
          ? state.selectedIndex
          : state.selectedIndex + 1;
      return { ...state, selectedIndex: nextIndex };
    }
    case "CHANGE_SELECTED_INDEX_TO_PREV": {
      const prevIndex =
        state.selectedIndex - 1 < 0
          ? state.selectedIndex
          : state.selectedIndex - 1;

      return { ...state, selectedIndex: prevIndex };
    }
    default: {
      return state;
    }
  }
}

export type { ActionType };
export { initialState, reducer };
