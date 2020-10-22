import { PAGE_SET } from "../constants/redux";
import { routes } from "../components/AppRouter/routes";
import { IActionPage } from "../actions/page";

export interface IStatePage {
  selected: any;
}

const initialState: IStatePage = {
  selected: routes[0],
};

const reducer = (state = initialState, action: IActionPage) => {
  switch (action.type) {
    case PAGE_SET:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export default reducer;
