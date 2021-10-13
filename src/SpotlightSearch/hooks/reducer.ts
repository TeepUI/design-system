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
    };

function reducer(
  state: SpotlightSearchStateType,
  action: ActionType
): SpotlightSearchStateType {
  switch (action.type) {
    case "OPEN": {
      return {
        isOpen: true,
      };
    }
    case "CLOSE": {
      return {
        isOpen: false,
      };
    }
    case "TOGGLE": {
      return {
        isOpen: !state.isOpen,
      };
    }
    default: {
      return state;
    }
  }
}

export { reducer };
