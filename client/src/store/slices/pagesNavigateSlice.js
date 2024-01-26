import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCard: null,
};

const pageNavigateSlice = createSlice({
  name: "navigate",
  initialState,
  reducers: {
    setSelectedCard: (state, action) => {
      state.selectedCard = action.payload;
    },
  },
});
export const { setSelectedCard } = pageNavigateSlice.actions;
export default pageNavigateSlice.reducer;
