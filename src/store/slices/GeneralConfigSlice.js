import { createSlice } from "@reduxjs/toolkit";

const GeneralConfigSlice= createSlice({
    name:"generalConfig",
    initialState:{
    hamBurger:true,
    sideBarOverlay:false,
    lang:"english",
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
        },
        openMenu(state){
          state.hamBurger=true;
        }
        ,
        setLang(state,action){
          state.lang=action.payload;
        }
    }
})
export const{toggleHamBurger,closeMenu,onMenuOverlay,offMenuOverlay,setLang,openMenu}=GeneralConfigSlice.actions
export default GeneralConfigSlice.reducer;