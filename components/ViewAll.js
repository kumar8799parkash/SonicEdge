"use client"
import React, { useEffect , useState } from 'react'
import './ViewAll.css'
import SongItem from './SongItem'
const ViewAll = (props) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {

      try {
        const res = await fetch(`/api/products?category=${props.category}`);
        const data = await res.json();
        setProducts(data);
      }catch(err){
        console.log("Error while fetching the products in ViewAll component!");
      }
      
    };

    fetchProducts();
  }, [props.category]);

  return (
    <div className='h-auto w-full pb-6'>
      <div className="view-all-heading-cont py-3 w-full px-12.5 flex justify-between">
        <div className="view-all-heading text-[24px] text-[rgb(26, 32, 36)] font-[600]">{props.heading}</div>
        <div className="view-all-text text-sm text-[#2f5b96] font-[700] flex gap-1 items-center cursor-pointer">View All <img className='w-5 h-5' src="/images/SVGs/viewAll.svg" alt="" /></div>
      </div>

      <div className="Song-items-cont h-[85%] w-full flex justify-center gap-2 pb-4 flex-wrap">

        {products.length > 0 ? (
          products.map((product)=>{
            return(
              <SongItem
              key = {product._id}
              name = {product.name}
              price = {product.price}
              image = {product.image}
            />
            )
            
          })
        ) : (
          <p className=''>No products found</p>
        )}

      </div>

    </div>
  )
}

export default ViewAll
