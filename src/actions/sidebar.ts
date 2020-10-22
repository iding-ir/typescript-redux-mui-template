import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SIDEBAR_TOGGLE,
  SIDEBAR_SWITCH_TOGGLE,
} from "../constants/redux";

export interface IActionSidebar {
  type: string;
  payload?: string;
}

export const openSidebar = (): IActionSidebar => ({
  type: SIDEBAR_OPEN,
});

export const closeSidebar = (): IActionSidebar => ({
  type: SIDEBAR_CLOSE,
});

export const toggleSidebar = (): IActionSidebar => ({
  type: SIDEBAR_TOGGLE,
});

export const toggleSidebarSwitch = (payload: string): IActionSidebar => ({
  type: SIDEBAR_SWITCH_TOGGLE,
  payload,
});
