import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const [visible, setVisible] = useState(false);
  const navigate =  useNavigate();
 
  useEffect(() => {

    const container = document.getElementById(`product-${product.id}`);
    const title = document.querySelector(`#title-${product.id}`);
    const img = document.querySelector(`#img-${product.id}`);
   

    if (container && title && img) {
      if (visible) {
        title.style.display = "block";
        container.style.transition = "all 2s";
        
        img.style.width = "15rem";
        
        
        
      } else {
        title.style.display = "none";
        container.style.transition = "all 1s";
        img.style.width = "14rem";
        
        
      }
    }
  }, [visible, product.id]);





  





  return (
    <div
    key={product.id}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      id={`product-${product.id}`}
      onClick={()=>  navigate(`products/${product?.id}`)}
      className='container  border-2 border-orange-200 relative hover:border-orange-500 flex-col items-center overflow-hidden   h-96  flex justify-center mt-8'>

      <div  className='absolute top-0 right-0 p-1 rounded-sm     bg-red-700 text-white'>

        {product?.price} <span className='text-sm'>TL</span>

      </div>

      


      <div className='flex justify-center  items-center   '>
        <img  id={`img-${product.id}`}  src={product?.image} />

      </div>


      <div key={product.id} id={`title-${product.id}`} className='title bg-gray-800 h-14       flex justify-center items-center   text-white absolute bottom-0 w-[100%]  '>
        {product?.title}
      </div>












    </div>


  )
}

export default Product