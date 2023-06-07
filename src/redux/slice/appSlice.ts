import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  BreadCrumb: string;
}

const initialState: CounterState = {
  BreadCrumb: "محصولات",
};

export const AppSlice = createSlice({
  name: "storeApp",
  initialState,
  reducers: {
    addBreadCrumb: (state, action) => {
      state.BreadCrumb = action.payload.BreadCrumb;
    },
  },
});
export const { addBreadCrumb } = AppSlice.actions;

export const storeAppState = (state: any) => state.storeState;

export default AppSlice.reducer;
