import React, { useEffect } from 'react'
import SearchResultCard from '../components/SearchResultCard'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { addSearchedVideos, clearSearchedVideos } from '../store/slices/DataSlice'
import { YT_SEARCH_URL } from '../assets/Constants'

const SearchPage = () => {
    const dispatch=useDispatch();
    
    let {q} = useParams();
 
    const searchQuery = q
    console.log(searchQuery)
    const searchVideos=useSelector((store) => store?.data?.searchedVideos);
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

    console.log("searched",searchVideos[0])
  return (
    <div className={`w-full min-h-screen p-10 flex gap-5 flex-col `}>
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