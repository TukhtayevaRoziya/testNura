import { combineReducers } from "redux";

export const CREATE_USER = "CREATE_USER";

const initialState = {
  data: []
};

const sendReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER:
      return {
        ...state,
        data: payload
      };
    default:
      return state;
  }
};

export default sendReducer;

const appReducer = combineReducers({
  sendReducer
});

export const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};
