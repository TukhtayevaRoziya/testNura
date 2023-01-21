// @ts-ignore
import { combineReducers } from "redux";

export const CREATE_USER = "CREATE_USER";

const initialState = {
// @ts-ignore

  data: []
};

const sendReducer = (state = initialState, action: { type: string; payload: object; }) => {
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

export const rootReducer = (state: any, action: { type: string; payload: object; }) => {
  return appReducer(state, action);
};
