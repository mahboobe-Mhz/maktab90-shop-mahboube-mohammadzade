import { configureStore } from "@reduxjs/toolkit"
import  AppSlice  from "./slice/appSlice"


export const store = configureStore ({
  reducer: {
      storeState:AppSlice
  },
})
export default store
