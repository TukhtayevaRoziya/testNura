import { configureStore } from "@reduxjs/toolkit";
import { Dispatch } from "react";

import {rootReducer} from "./sendReducer";

const initialState = {};

const store = configureStore ({
  reducer: rootReducer,
  // @ts-ignore
  initialState,
})

export const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>


// window.Storage = store;


export default store;