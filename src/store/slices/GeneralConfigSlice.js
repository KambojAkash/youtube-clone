import { createSlice } from "@reduxjs/toolkit";

const GeneralConfigSlice= createSlice({
    name:"generalConfig",
    initialState:{
    hamBurger:true,
    sideBarOverlay:false,
    },
    reducers:{
        toggleHamBurger(state){
          state.hamBurger=!state.hamBurger;
        },
        onMenuOverlay(state){
          state.sideBarOverlay=true;
        },
        offMenuOverlay(state){
          state.sideBarOverlay=false;
        },
        closeMenu(state){
          state.hamBurger=false;
        }
    }
})
export const{toggleHamBurger,closeMenu,onMenuOverlay,offMenuOverlay}=GeneralConfigSlice.actions
export default GeneralConfigSlice.reducer;