import { PAGE_SET } from "../constants/redux";
import { IRoute } from "../router/routes";

export interface IActionPage {
  type: string;
  payload?: IRoute;
}

export const setPage = (payload: IRoute): IActionPage => ({
  type: PAGE_SET,
  payload,
});
