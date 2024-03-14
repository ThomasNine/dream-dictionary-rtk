import { createSlice } from "@reduxjs/toolkit";
import { db } from "../../db/mock";

const initialState = {
  saved: db.Saved,
};

export const SavedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    addFav: (state, action) => {
      state.saved = [...state.saved, action.payload];
    },
    removeFav: (state, action) => {
      state.saved = state.saved.filter((i) => i.id !== action.payload.id);
    },
  },
});
export const { addFav, removeFav } = SavedSlice.actions;
export default SavedSlice.reducer;
