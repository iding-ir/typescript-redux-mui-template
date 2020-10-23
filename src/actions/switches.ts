import { SWITCH_TOGGLE } from "../constants/redux";

export interface IActionSidebar {
  type: string;
  payload?: string;
}

export const toggleSidebarSwitch = (payload: string): IActionSidebar => ({
  type: SWITCH_TOGGLE,
  payload,
});
