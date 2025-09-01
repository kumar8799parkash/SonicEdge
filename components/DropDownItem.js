import React from 'react'
import Link from 'next/link'

const DropDownItem = (props) => {
    return (
        <div>
            <Link className='drop-down-item' href="/">
                <div className="drop-down-item-image-cont h-[100%] w-[25%] flex items-center justify-center"><img className=' w-[65%]' src={props.image} alt="" /></div>
                <div className="drop-down-item-name-cont h-[100%] w-[75%] text-[13px] flex items-center"> {props.name} </div>
            </Link>
        </div>
    )
}

export default DropDownItem
