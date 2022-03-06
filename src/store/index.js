import { incomeExpeditureReducer } from "./incomeExpeditureReducer";
import showListReducer from "./showListReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    incomeExpeditureReducer: incomeExpeditureReducer.reducer,
    showListReducer: showListReducer,
  },
});

export default store;
