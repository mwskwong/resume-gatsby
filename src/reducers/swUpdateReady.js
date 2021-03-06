import { SW_UPDATE_READY } from "actions/actionTypes";

const swStatus = (state = false, action) => {
  switch (action.type) {
    case SW_UPDATE_READY:
      return true;
    default:
      return state;
  }
};

export default swStatus;