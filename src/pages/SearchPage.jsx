import React, { useEffect, useState } from 'react'
import SearchResultCard from '../components/SearchResultCard'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { addSearchedVideos, clearSearchedVideos } from '../store/slices/DataSlice'
import { YT_SEARCH_URL } from '../assets/Constants'
import { offMenuOverlay } from '../store/slices/GeneralConfigSlice'
import CardShimmer from '../components/shimmers/CardShimmer'
import SearchCardShimmer from '../components/shimmers/SearchCardShimmer'

const SearchPage = () => {
    const dispatch=useDispatch();
    const [loading,setLoading]=useState(true)
    let {q} = useParams();
 
    const searchQuery = q
    // console.log(searchQuery)
    const isSideBarOpen=useSelector((store) => store.generalConfig.hamBurger);
    const searchVideos=useSelector((store) => store?.data?.searchedVideos);
    useEffect(()=>{
        dispatch(offMenuOverlay())
          },[])
    useEffect(()=>{
        dispatch(clearSearchedVideos())
        getSearchVideos(searchQuery)
        .then((d) => {
          // console.log("--",d)
          
          dispatch(addSearchedVideos(d.items));
        })
        .catch((err) => {
          setLoading(false)
          console.log(err);
        });
    },[q])
    async function getSearchVideos(text) {
      try{
        let res = await fetch(YT_SEARCH_URL + text);
        let jsondata = res.json();
       
        setLoading(false)
        return jsondata;
      }catch(err){
        console.log(err)
         setLoading(false)
      }
       
      }

    // console.log("searched data",searchVideos[0])
    if(loading){
      return <SearchCardShimmer />
    }
  return (
    // <div className={`w-screen min-h-screen p-10 flex gap-5 flex-col `}>
    <div className={`${isSideBarOpen ? 'col-span-7 lg:col-span-9' : 'col-span-full'} z-10 bg-[#0f0f0f] min-h-screen p-3 flex justify-center flex-col  items-start flex-wrap gap-5`}>
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