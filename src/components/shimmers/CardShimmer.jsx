import React from 'react'
import { useSelector } from 'react-redux';

const CardShimmer = () => {
    const isSideBarOpen = useSelector((store) => store.generalConfig.hamBurger);
  return (
    <div className={`${isSideBarOpen ? 'overflow-auto col-span-7 lg:col-span-9' : 'overflow-visible col-span-full'} z-10 bg-[#0f0f0f] min-h-screen p-3 flex justify-center items-center flex-wrap gap-5`}>
    {

    Array.from({length:20}).map((_,i)=>{
        return <div key={i} className='w-80 h-72 relative'>
  
        <div className="w-full h-40 rounded-lg bg-slate-700" src="" alt="" />
       <div className='flex justify-between items-start '>
        <ul className='pt-2 w-[85%]'>
            <li className='text-[16px] font-semibold w-60 h-2 bg-slate-700'></li>
            <li className='text-[14px]  mt-1 text-gray-400 w-40 h-2 bg-slate-700'></li>
    
        </ul>
    
    
    </div>
    </div>
    })
   
}
</div>
  )
}

export default CardShimmer