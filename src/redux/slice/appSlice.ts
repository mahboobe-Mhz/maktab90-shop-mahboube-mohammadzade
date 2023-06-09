import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  BreadCrumb: string;
  Modal:boolean;

}

const initialState: CounterState = {
  BreadCrumb: "",
  Modal:false,
 
};

export const AppSlice = createSlice({
  name: "storeApp",
  initialState,
  reducers: {
    addBreadCrumb: (state, action) => {
      state.BreadCrumb = action.payload.BreadCrumb;
    },  
      setModal: (state, action) => {
      state.Modal =action.payload.Modal
    }, 
  
  }
});
export const { addBreadCrumb ,setModal} = AppSlice.actions;

export const storeAppState = (state: any) => state.storeState;

export default AppSlice.reducer;
