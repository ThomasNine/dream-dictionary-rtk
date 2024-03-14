import { configureStore } from "@reduxjs/toolkit";
import { apiServices } from "./ApiServices/apiServices";
import SavedSlice from "./GlobalStates/SavedSlice";
export const store = configureStore({
  reducer: {
    saved: SavedSlice,
    [apiServices.reducerPath]: apiServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiServices.middleware),
});
