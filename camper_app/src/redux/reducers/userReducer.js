import { GET_PASSWORD, GET_USER, RESET_USER } from "../actions/userAction";

const initailState = {
  userName: [],
  password: [],
};

const userReducer = (state = initailState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,

        userName: action.payload,
      };
    case GET_PASSWORD:
      return {
        ...state,

        password: action.payload,
      };
    case RESET_USER:
      return initailState;

    default:
      return state;
  }
};

export default userReducer;
