import React, { useEffect } from 'react'
import SearchResultCard from '../components/SearchResultCard'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { addSearchedVideos, clearSearchedVideos } from '../store/slices/DataSlice'
import { YT_SEARCH_URL } from '../assets/Constants'
import { offMenuOverlay } from '../store/slices/GeneralConfigSlice'

const SearchPage = () => {
    const dispatch=useDispatch();
    
    let {q} = useParams();
 
    const searchQuery = q
    console.log(searchQuery)
    const isSideBarOpen=useSelector((store) => store.generalConfig.hamBurger);
    const searchVideos=useSelector((store) => store?.data?.searchedVideos);
    useEffect(()=>{
        dispatch(offMenuOverlay())
          },[])
    useEffect(()=>{
        dispatch(clearSearchedVideos())
        getSearchVideos(searchQuery)
        .then((d) => {
          console.log("--",d)
          dispatch(addSearchedVideos(d.items));
        })
        .catch((err) => {
          console.log(err);
        });
    },[q])
    async function getSearchVideos(text) {
        let res = await fetch(YT_SEARCH_URL + text);
        let jsondata = res.json();
       
        return jsondata;
      }

    console.log("searched data",searchVideos[0])
  return (
    // <div className={`w-screen min-h-screen p-10 flex gap-5 flex-col `}>
    <div className={`${isSideBarOpen ? 'overflow-auto col-span-7 lg:col-span-9' : 'overflow-visible col-span-full'} z-10 bg-[#0f0f0f] min-h-screen p-3 flex justify-center items-center flex-wrap gap-5`}>
      {
        searchVideos[0]?.map((video)=>{
            return (

                <SearchResultCard data={video} />
            )
        })
      }
    </div>
  )
}

export default SearchPage