import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SIDEBAR_TOGGLE,
} from "../constants/redux";

export interface IActionSidebar {
  type: string;
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
