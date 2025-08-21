import React from 'react'
import './ViewAll.css'
import SongItem from './SongItem'
const ViewAll = (props) => {
  return (
    <div className='h-auto w-full'>
      <div className="view-all-heading-cont py-3 w-full px-12.5 flex justify-between">
        <div className="view-all-heading text-[24px] text-[rgb(26, 32, 36)] font-[600]">{props.heading}</div>
        <div className="view-all-text text-sm text-[#2f5b96] font-[700] flex gap-1 items-center cursor-pointer">View All <img className='w-5 h-5' src="/images/SVGs/viewAll.svg" alt="" /></div>
      </div>  
        
      <div className="Song-items-cont h-[85%] w-full flex justify-center gap-2 pb-4">

        <SongItem />
        <SongItem/>
        <SongItem/>
        <SongItem/>
        <SongItem/>
        <SongItem/>
        
      </div>
      
    </div>
  )
}

export default ViewAll
