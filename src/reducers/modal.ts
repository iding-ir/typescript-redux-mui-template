import { MODAL_OPEN, MODAL_CLOSE, MODAL_TOGGLE } from "../constants/redux";
import { IActionModal } from "../actions/modal";

export interface IStateModal {
  open: boolean;
}

const initialState: IStateModal = {
  open: false,
};

const reducer = (state = initialState, action: IActionModal) => {
  switch (action.type) {
    case MODAL_OPEN:
      return { ...state, open: true };
    case MODAL_CLOSE:
      return { ...state, open: false };
    case MODAL_TOGGLE:
      return { ...state, open: !state.open };
    default:
      return state;
  }
};

export default reducer;
