import { configureStore } from "@reduxjs/toolkit"
import  AppSlice  from "./slice/appSlice"
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import {combineReducers} from '@reduxjs/toolkit'
 
const persisConfig ={
  key:"root",
  version:1,
  storage
}

const reducer =combineReducers({
  storeState:AppSlice
})
const persistedReducer= persistReducer(persisConfig,reducer)
export const store = configureStore ({
  reducer: persistedReducer
})
export default store
