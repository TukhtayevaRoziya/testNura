import { configureStore } from "@reduxjs/toolkit";

import {rootReducer} from "./sendReducer";

const initialState = {};

const store = configureStore ({
  reducer: rootReducer,
  initialState,
})

window.store = store;


export default store;