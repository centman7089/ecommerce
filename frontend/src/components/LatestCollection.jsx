// @ts-nocheck
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import {assets} from "../frontend_assets/assets"
import ProductItem from './ProductItem.jsx'

const LatestCollection = () =>
{
  const { products } = useContext( ShopContext )
  const [latestProducts,setLatestProducts] = useState([])

  useEffect( () =>
  {
    setLatestProducts( products.slice( 0, 10 ) );
  },[])
  
 console.log(latestProducts);
  return (
    <div className='my-10'>
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing el Lorem ipsum dolor sit amet consectetur adipisicing el
        
</p>
      </div>

{/* rendering products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
       {/* <img src={assets.buj_img} alt="" />
       <img src={assets.buj_img} alt="" />
       <img src={assets.buj_img} alt="" />
       <img src={assets.buj_img} alt="" />
       <img src={assets.buj_img} alt="" />
       <img src={assets.buj_img} alt="" />
       <img src={assets.buj_img} alt="" />
       <img src={assets.buj_img} alt="" />
       <img src={assets.buj_img} alt="" />
       <img src={assets.buj_img} alt="" />
       <img src={assets.buj_img} alt="" />
       <img src={assets.buj_img} alt="" />
       <img src={assets.buj_img} alt="" /> */}
        
        {latestProducts.map( (item,index) =>
        {
          return (
             <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
         )
        })}
     </div>

    </div>
  )
}

export default LatestCollection
