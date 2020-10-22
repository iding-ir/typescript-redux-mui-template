import { Reducer, combineReducers } from "redux";

import sidebarReducer, { IStateSidebar } from "./sidebar";
import themeReducer, { IStateTheme } from "./theme";

export interface IState {
  sidebar: IStateSidebar;
  theme: IStateTheme;
}

const combinedReducers: Reducer<IState> = combineReducers({
  sidebar: sidebarReducer,
  theme: themeReducer,
});

export default combinedReducers;
