import { Reducer, combineReducers } from "redux";

import sidebarReducer, { IStateSidebar } from "./sidebar";
import themeReducer, { IStateTheme } from "./theme";
import pageReducer, { IStatePage } from "./page";

export interface IState {
  sidebar: IStateSidebar;
  theme: IStateTheme;
  page: IStatePage;
}

const combinedReducers: Reducer<IState> = combineReducers({
  sidebar: sidebarReducer,
  theme: themeReducer,
  page: pageReducer,
});

export default combinedReducers;
