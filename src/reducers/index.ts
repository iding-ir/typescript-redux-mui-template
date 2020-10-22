import { Reducer, combineReducers } from "redux";

import sidebarReducer, { IStateSidebar } from "./sidebar";
import themeReducer, { IStateTheme } from "./theme";
import pageReducer, { IStatePage } from "./page";
import modalReducer, { IStateModal } from "./modal";

export interface IState {
  sidebar: IStateSidebar;
  theme: IStateTheme;
  page: IStatePage;
  modal: IStateModal;
}

const combinedReducers: Reducer<IState> = combineReducers({
  sidebar: sidebarReducer,
  theme: themeReducer,
  page: pageReducer,
  modal: modalReducer,
});

export default combinedReducers;
