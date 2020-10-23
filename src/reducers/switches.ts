import { SWITCH_TOGGLE, SWITCH_ON, SWITCH_OFF } from "../constants/redux";
import { IActionSwitches } from "../actions/switches";

export interface IStateSwitches {
  [key: string]: boolean;
}

const initialState: IStateSwitches = {
  theme: true,
};

const reducer = (state = initialState, action: IActionSwitches) => {
  switch (action.type) {
    case SWITCH_TOGGLE:
      const value: { [key: string]: boolean } = {};

      if (typeof action.payload === "string") {
        value[action.payload] = !state[action.payload];
      }

      return {
        ...state,
        ...value,
      };
    case SWITCH_ON:
    case SWITCH_OFF:
    default:
      return state;
  }
};

export default reducer;
