import { Reducer, combineReducers } from "redux";

import sidebarReducer, { IStateSidebar } from "./sidebar";

export interface IState {
  sidebar: IStateSidebar;
}

const combinedReducers: Reducer<IState> = combineReducers({
  sidebar: sidebarReducer,
});

export default combinedReducers;
