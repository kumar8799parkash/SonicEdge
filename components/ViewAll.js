import React from 'react'
import './ViewAll.css'
const ViewAll = (props) => {
  return (
    <div className='h-auto w-full'>
      <div className="view-all-heading py-[7px] w-full text-[24px] text-[rgb(26, 32, 36)] font-[600] pl-[15px]">Heading Text</div>  
      <div className="Song-items-cont h-[85%] w-full flex justify-center gap-2 ">

        <div className="songItem h-auto w-[15vw] rounded-[11px] overflow-hidden">
            <div className="song-item-image-cont w-[100%] ">
                <img className='song-item-image aspect-square w-[100%] ' src="/images/Sale images/songItem1.webp" alt="" />
            </div>
            <div className="song-item-details-cont  w-[100%] h-auto">
                <div className="song-item-name-cont py-3 px-2">Item - name</div>
                <div className="song-item-price-cont py-3 px-2">0000</div>
            </div>
        </div>


        <div className="songItem h-auto w-[15vw] ">
            <div className="song-item-image-cont w-[100%] ">
                <img className='song-item-image aspect-square w-[100%] ' src="/images/Sale images/songItem1.webp" alt="" />
            </div>
            <div className="song-item-details-cont  w-[100%] h-auto">
                <div className="song-item-name-cont py-2 px-2">Item - name</div>
                <div className="song-item-price-cont py-2 px-2">0000</div>
            </div>
        </div>



        <div className="songItem h-auto w-[15vw] ">
            <div className="song-item-image-cont w-[100%] ">
                <img className='song-item-image aspect-square w-[100%] ' src="/images/Sale images/songItem1.webp" alt="" />
            </div>
            <div className="song-item-details-cont  w-[100%] h-auto">
                <div className="song-item-name-cont py-2 px-2">Item - name</div>
                <div className="song-item-price-cont py-2 px-2">0000</div>
            </div>
        </div>



        <div className="songItem h-auto w-[15vw] ">
            <div className="song-item-image-cont w-[100%] ">
                <img className='song-item-image aspect-square w-[100%] ' src="/images/Sale images/songItem1.webp" alt="" />
            </div>
            <div className="song-item-details-cont  w-[100%] h-auto">
                <div className="song-item-name-cont py-2 px-2">Item - name</div>
                <div className="song-item-price-cont py-2 px-2">0000</div>
            </div>
        </div>


        <div className="songItem h-auto w-[15vw] ">
            <div className="song-item-image-cont w-[100%] ">
                <img className='song-item-image aspect-square w-[100%] ' src="/images/Sale images/songItem1.webp" alt="" />
            </div>
            <div className="song-item-details-cont  w-[100%] h-auto">
                <div className="song-item-name-cont py-2 px-2">Item - name</div>
                <div className="song-item-price-cont py-2 px-2">0000</div>
            </div>
        </div>



        <div className="songItem h-auto w-[15vw] ">
            <div className="song-item-image-cont w-[100%] ">
                <img className='song-item-image aspect-square w-[100%] ' src="/images/Sale images/songItem1.webp" alt="" />
            </div>
            <div className="song-item-details-cont  w-[100%] h-auto">
                <div className="song-item-name-cont py-2 px-2">Item - name</div>
                <div className="song-item-price-cont py-2 px-2">0000</div>
            </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default ViewAll
