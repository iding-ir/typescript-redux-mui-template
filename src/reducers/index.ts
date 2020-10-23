import { Reducer, combineReducers } from "redux";

import sidebarReducer, { IStateSidebar } from "./sidebar";
import switchesReducer, { IStateSwitches } from "./switches";
import themeReducer, { IStateTheme } from "./theme";
import pageReducer, { IStatePage } from "./page";
import modalReducer, { IStateModal } from "./modal";

export interface IState {
  sidebar: IStateSidebar;
  switches: IStateSwitches;
  theme: IStateTheme;
  page: IStatePage;
  modal: IStateModal;
}

const combinedReducers: Reducer<IState> = combineReducers({
  sidebar: sidebarReducer,
  switches: switchesReducer,
  theme: themeReducer,
  page: pageReducer,
  modal: modalReducer,
});

export default combinedReducers;
