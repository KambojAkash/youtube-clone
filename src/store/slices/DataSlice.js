import { createSlice } from "@reduxjs/toolkit";

const DataSlice=createSlice({
    name:"data",
    initialState:{
        videos:[],
        searchedVideos:[],
    },
    reducers:{
        addVideos(state,action){
                state.videos.push(action.payload)
        },
        addSearchedVideos(state,action){
            state.searchedVideos.push(action.payload)
    },

        clearVideos(state){
           state.videos.length=0;
        },
        clearSearchedVideos(state){
           state.searchedVideos.length=0;
        }
    }
})
export const{addVideos,clearVideos,addSearchedVideos,clearSearchedVideos}=DataSlice.actions;
export default DataSlice.reducer;