import { createSlice } from "@reduxjs/toolkit";
import { boolean } from "yup";

export interface CounterState {
  BreadCrumb: string;
  Modal:boolean;
  ModalInfoProducts:boolean
  isEdit:boolean
  selectEditData:[]
  editId:any
  notModal:boolean
  errorMessage:boolean
  OrderData:any
  deliveryDate:string
  orderModal:boolean
  productOrderModal:boolean

}

const initialState: CounterState = {
  BreadCrumb: "",
  Modal:false,
  ModalInfoProducts:false,
  isEdit:false,
  selectEditData:[],
  editId:{catId:"",subCatId:""},
  notModal:false,
  errorMessage:false,
  OrderData:[],
  deliveryDate:"",
  orderModal:false,
  productOrderModal:false
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
    },   setEditId: (state, action) => {
      state.editId =action.payload.editId
    },  setNotMOdal: (state, action) => {
      state.notModal =action.payload.notModal
    },  setErrorMessage: (state, action) => {
      state.errorMessage =action.payload.errorMessage
    },  setOrderData: (state, action) => {
    state.OrderData=action.payload.OrderData
    },  setDeliveryDate: (state, action) => {
      state.deliveryDate=action.payload.deliveryDate
      },  setOrderModal: (state, action) => {
        state.orderModal=action.payload.orderModal
        },  setProductOrderModal: (state, action) => {
          state.productOrderModal=action.payload.productOrderModal
          }
      
    
  
  
  }
});
export const { addBreadCrumb ,setModal,setProductsModal,setOrderData,
  setEditData,setIsEditing,setEditId,setNotMOdal,setErrorMessage,setDeliveryDate
  ,setOrderModal,setProductOrderModal} = AppSlice.actions;

export const storeAppState = (state: any) => state.storeState;

export default AppSlice.reducer;
