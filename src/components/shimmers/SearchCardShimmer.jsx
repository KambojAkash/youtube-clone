import React from 'react';
import { useSelector } from 'react-redux';

const SearchCardShimmer = ({data}) => {
    
    const isSideBarOpen = useSelector((store) => store.generalConfig.hamBurger);
  return (
    <div className={`${isSideBarOpen ? 'overflow-auto col-span-7 lg:col-span-9' : 'overflow-visible col-span-full'} z-10 min-h-screen p-3 flex justify-center items-start flex-col flex-wrap gap-5`}>
    {
        Array.from({length:30}).map((_,i)=>{
            return   <div key={i} className="w-full bg-slate-900  h-40 lg:h-60 flex relative text-white p-4 mb-4 rounded-lg">
            <div
            
              className={`w-[40%] h-32 lg:h-full bg-slate-700 rounded-md mr-4`}
            ></div>
            <div className='flex flex-wrap flex-col lg:w-3/6'>
              <h2 className="w-60 h-2 bg-slate-700 mb-2"></h2>
             
              <p className="w-60 h-2 bg-slate-700">
               
              </p>
            </div>
          </div>
        })
    }
     
  
    
   </div>
  );
};

export default SearchCardShimmer;
