import { SWITCH_TOGGLE } from "../constants/redux";
import { routes } from "../routes";
import { IActionSidebar } from "../actions/switches";

export interface IStateSidebar {
  switches: {
    [key: string]: boolean;
  };
}

const initialState: IStateSidebar = {
  switches: {
    theme: true,
  },
};

const reducer = (state = initialState, action: IActionSidebar) => {
  switch (action.type) {
    case SWITCH_TOGGLE:
      const value: { [key: string]: boolean } = {};

      if (typeof action.payload === "string") {
        value[action.payload] = !state.switches[action.payload];
      }

      return {
        ...state,
        switches: {
          ...state.switches,
          ...value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
