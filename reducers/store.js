import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./transactions";
import authReducer from "./auth";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    auth: authReducer,
  },
});
