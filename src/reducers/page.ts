import { PAGE_SET_KEY, PAGE_SET_CONTENT } from "../constants/redux";
import { routes } from "../router/routes";
import { IActionPage } from "../actions/page";

export interface IStatePage {
  selectedPageKey: any;
  selectedPageContent?: any;
}

const initialState: IStatePage = {
  selectedPageKey: routes[0].key,
  selectedPageContent: routes[0].content,
};

const reducer = (state = initialState, action: IActionPage) => {
  switch (action.type) {
    case PAGE_SET_KEY:
      return { ...state, selectedPageKey: action.payload };
    case PAGE_SET_CONTENT:
      return { ...state, selectedPageContent: action.payload };
    default:
      return state;
  }
};

export default reducer;
