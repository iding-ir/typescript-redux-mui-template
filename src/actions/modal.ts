import { MODAL_OPEN, MODAL_CLOSE, MODAL_TOGGLE } from "../constants/redux";

export interface IActionModal {
  type: string;
  payload?: string;
}

export const openModal = (): IActionModal => ({
  type: MODAL_OPEN,
});

export const closeModal = (): IActionModal => ({
  type: MODAL_CLOSE,
});

export const toggleModal = (): IActionModal => ({
  type: MODAL_TOGGLE,
});
