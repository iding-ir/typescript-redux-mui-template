import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SIDEBAR_TOGGLE,
  SIDEBAR_SWITCH_TOGGLE,
  SIDEBAR_PAGE_SELECT,
} from "../constants/redux";
import { routes } from "../router/routes";

import { IActionSidebar } from "../actions/sidebar";

export interface IStateSidebar {
  open: boolean;
  switches: {
    [key: string]: boolean;
  };
  selectedPage: any;
}

const initialState: IStateSidebar = {
  open: false,
  switches: {
    notes: true,
  },
  selectedPage: routes[0].key,
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
      const value: any = {};

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
    case SIDEBAR_PAGE_SELECT:
      return { ...state, selectedPage: action.payload };
    default:
      return state;
  }
};

export default reducer;
