import { createSlice } from "@reduxjs/toolkit";

const DataSlice=createSlice({
    name:"data",
    initialState:{
        videos:[],
        searchedVideos:[],
        channelVideos:[],
        suggestedVideos:[]
    },
    reducers:{
        addVideos(state,action){
            
                state.videos=[...action.payload]
        },
        addSearchedVideos(state,action){
            
            state.searchedVideos.push(action.payload)
    },
        addChannelVideos(state,action){
            
            state.channelVideos=[...action.payload];
    },
    addSuggestedVideos(state,action){
        state.suggestedVideos=[...action.payload];
    },
    clearSuggestedVideos(state,action){
        
           state.suggestedVideos.length=0;
    },
        clearChannelVideos(state){
           state.channelVideos.length=0;
    },

        clearVideos(state){
           state.videos.length=0;
        },
        clearSearchedVideos(state){
           state.searchedVideos.length=0;
        }
    }
})
export const{addVideos,clearVideos,addSearchedVideos,clearSearchedVideos,addChannelVideos,clearChannelVideos,addSuggestedVideos,clearSuggestedVideos}=DataSlice.actions;
export default DataSlice.reducer;