import { Reducer, combineReducers } from "redux";

import sidebarReducer, { IStateSidebar } from "./sidebar";
import switchesReducer, { IStateSwitches } from "./switches";
import themeReducer, { IStateTheme } from "./theme";
import pageReducer, { IStatePage } from "./page";

export interface IState {
  sidebar: IStateSidebar;
  switches: IStateSwitches;
  theme: IStateTheme;
  page: IStatePage;
}

const combinedReducers: Reducer<IState> = combineReducers({
  sidebar: sidebarReducer,
  switches: switchesReducer,
  theme: themeReducer,
  page: pageReducer,
});

export default combinedReducers;
