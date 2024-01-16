import { configureStore } from "@reduxjs/toolkit";
import generalConfigReducer from "./slices/GeneralConfigSlice";
import DataReducer from "./slices/DataSlice"
const store=configureStore({
   reducer:{
    generalConfig:generalConfigReducer,
    data:DataReducer,
   }
})
export default store;