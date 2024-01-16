import { createSlice } from "@reduxjs/toolkit";

const GeneralConfigSlice= createSlice({
    name:"generalConfig",
    initialState:{
    hamBurger:true,
    },
    reducers:{
        toggleHamBurger(state){
          state.hamBurger=!state.hamBurger;
        }
    }
})
export const{toggleHamBurger}=GeneralConfigSlice.actions
export default GeneralConfigSlice.reducer;