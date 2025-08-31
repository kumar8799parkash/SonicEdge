import React from 'react'

const SongItem = (props) => {
  return (
    <div>
      <div className="songItem h-auto w-[15vw] rounded-[10px] overflow-hidden border-1 border-[#e0e0e07c] bg-[#ececec93] cursor-pointer">
            <div className="song-item-image-cont w-[100%] rounded-[10px] overflow-hidden">
                <img className='song-item-image aspect-square w-[100%] ' src = {props.image} alt="" />
            </div>
            <div className="song-item-details-cont  w-[100%] h-auto">
                <div className="song-item-name-cont py-3 px-2 text-[14px] font-bold border-b-2 border-dotted border-[#9999997c]">{props.name}</div>
                <div className="song-item-price-cont py-3 px-2 flex justify-between">
                    <div className="song-item-price text-[16px] font-bold ">&#8377;{props.price}</div>
                    <div className="song-item-cart flex border-2 border-[#b9b9b97c]  rounded-[5px] overflow-hidden">
                        <div className="decrement-cont  border-r-2 border-[#b9b9b97c] h-6 w-6 flex justify-center items-center text-3xl">-</div>
                        <div className="count-cont h-6 w-6 flex justify-center items-center">0</div>
                        <div className="increment-cont border-l-2 border-[#b9b9b97c] h-6 w-6 flex justify-center items-center text-2xl">+</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SongItem
