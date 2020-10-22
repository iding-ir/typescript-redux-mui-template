import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SIDEBAR_TOGGLE,
  SIDEBAR_SWITCH_TOGGLE,
} from "../constants/redux";
import { routes } from "../components/AppRouter/routes";
import { IActionSidebar } from "../actions/sidebar";

export interface IStateSidebar {
  open: boolean;
  switches: {
    [key: string]: boolean;
  };
  selected: string;
}

const initialState: IStateSidebar = {
  open: false,
  switches: {
    theme: true,
  },
  selected: routes[0].key,
};

const reducer = (state = initialState, action: IActionSidebar) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, open: true };
    case SIDEBAR_CLOSE:
      return { ...state, open: false };
    case SIDEBAR_TOGGLE:
      return { ...state, open: !state.open };
    case SIDEBAR_SWITCH_TOGGLE:
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
