import { Reducer, combineReducers } from "redux";

import sidebarReducer, { IStateSidebar } from "./sidebar";

export interface IReduxAppState {
  sidebar: IStateSidebar;
}

const combinedReducers: Reducer<IReduxAppState> = combineReducers({
  sidebar: sidebarReducer,
});

export default combinedReducers;
