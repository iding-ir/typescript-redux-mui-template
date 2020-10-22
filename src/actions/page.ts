import { PAGE_SET_KEY, PAGE_SET_CONTENT } from "../constants/redux";

export interface IActionPage {
  type: string;
  payload?: string | JSX.Element;
}

export const setPageKey = (payload: string): IActionPage => ({
  type: PAGE_SET_KEY,
  payload,
});

export const setPageContent = (payload: JSX.Element): IActionPage => ({
  type: PAGE_SET_CONTENT,
  payload,
});
