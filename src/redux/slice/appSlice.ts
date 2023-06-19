import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  BreadCrumb: string;
  Modal:boolean;
  ModalInfoProducts:boolean
  isEdit:boolean
  selectEditData:[]


}

const initialState: CounterState = {
  BreadCrumb: "",
  Modal:false,
  ModalInfoProducts:false,
  isEdit:false,
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
    } ,   setIsEditing: (state, action) => {
      state.isEdit =action.payload.isEdit
    }, 
  
  }
});
export const { addBreadCrumb ,setModal,setProductsModal,setEditData,setIsEditing} = AppSlice.actions;

export const storeAppState = (state: any) => state.storeState;

export default AppSlice.reducer;
