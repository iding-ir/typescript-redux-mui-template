import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SIDEBAR_TOGGLE,
} from "../constants/redux";

import { IActionSidebar } from "../actions/sidebar";

export interface IStateSidebar {
  open: boolean;
}

const initialState: IStateSidebar = {
  open: false,
};

const reducer = (state = initialState, action: IActionSidebar) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, open: true };
    case SIDEBAR_CLOSE:
      return { ...state, open: false };
    case SIDEBAR_TOGGLE:
      return { ...state, open: !state.open };
    default:
      return state;
  }
};

export default reducer;
