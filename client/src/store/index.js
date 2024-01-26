import { configureStore } from "@reduxjs/toolkit";
import petsReducer from "./slices/petsSlice";
import navigationReducer from './slices/pagesNavigateSlice'

const reducer = {
  petsData: petsReducer,
  navigationData: navigationReducer,
};

const store = configureStore({ reducer });


export default store;
