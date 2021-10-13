import { SpotlightSearchStateType } from "./typings";

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
    };

function reducer(
  state: SpotlightSearchStateType,
  action: ActionType
): SpotlightSearchStateType {
  switch (action.type) {
    case "OPEN": {
      return { ...state, visible: true };
    }
    case "CLOSE": {
      return { ...state, visible: false };
    }
    case "TOGGLE": {
      return { ...state, visible: !state.visible };
    }
    case "CHANGE_SEARCH_VALUE": {
      return { ...state, searchValue: action.payload.value };
    }
    default: {
      return state;
    }
  }
}

export type { ActionType };
export { reducer };
