import { SWITCH_TOGGLE, SWITCH_ON, SWITCH_OFF } from "../constants/redux";

export interface IActionSwitches {
  type: string;
  payload?: string;
}

export const toggleSwitch = (payload: string): IActionSwitches => ({
  type: SWITCH_TOGGLE,
  payload,
});

export const switchOn = (): IActionSwitches => ({
  type: SWITCH_ON,
});

export const switchOff = (): IActionSwitches => ({
  type: SWITCH_OFF,
});
