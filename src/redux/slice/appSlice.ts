import { createSlice } from "@reduxjs/toolkit";
import { boolean } from "yup";

export interface CounterState {
  BreadCrumb: string;
  Modal:boolean;
  ModalInfoProducts:boolean
  isEdit:boolean
  selectEditData:[]
  notModal:boolean
  errorMessage:boolean

}

const initialState: CounterState = {
  BreadCrumb: "",
  Modal:false,
  ModalInfoProducts:false,
  isEdit:false,
  selectEditData:[],
  notModal:false,
  errorMessage:false
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
    },  setNotMOdal: (state, action) => {
      state.notModal =action.payload.notModal
    },  setErrorMessage: (state, action) => {
      state.errorMessage =action.payload.errorMessage
    }
  
  }
});
export const { addBreadCrumb ,setModal,setProductsModal,setEditData,setIsEditing,setNotMOdal,setErrorMessage} = AppSlice.actions;

export const storeAppState = (state: any) => state.storeState;

export default AppSlice.reducer;
