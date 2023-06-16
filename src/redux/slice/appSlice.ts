import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  BreadCrumb: string;
  Modal:boolean;
  ModalInfoProducts:boolean
  selectEditData:[]

}

const initialState: CounterState = {
  BreadCrumb: "",
  Modal:false,
  ModalInfoProducts:false,
  selectEditData:[]
 
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
    },   setProductsModal: (state, action) => {
      state.ModalInfoProducts =action.payload.ModalInfoProducts
    },   setEditData: (state, action) => {
      state.selectEditData =action.payload.selectEditData
    }, 
  
  }
});
export const { addBreadCrumb ,setModal,setProductsModal,setEditData} = AppSlice.actions;

export const storeAppState = (state: any) => state.storeState;

export default AppSlice.reducer;
