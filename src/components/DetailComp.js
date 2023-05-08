import React, { useState } from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { sizeSelected } from "../redux/sizeSlice"

const DetailComp = ({productDetail}) =>{
  



  const dispatch = useDispatch()
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();

  const handleClick = (size) => {
    setSelectedSize(size);
    dispatch(sizeSelected(size))
  }

  const sizes = ["XS","S","M","L","XL","XXL","2XL"];
  const sizeList = sizes.map((size, index) =>{ 
    return <li
      selectedSize = {selectedSize}
      key={index}
      onClick={() => handleClick(size)}
      className={`border p-1 cursor-pointer hover:border-red-500 ${selectedSize === size ? 'bg-orange-500' : 'bg-white'}`}>
      {size}
    </li>
  })

  const handleAddToCart = () => {
    
    navigate(`/products/${productDetail.id}/basket`); 
    
  }
  
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='w-64 h-full justify-center flex flex-col'>
        <div className='flex justify-center my-4 w-full'>
          <div className='text-center'>{productDetail?.title}</div>
        </div>
        <div className='flex justify-center flex-col '>
          <img className='max-h-96 ' src={productDetail?.image} alt="" />
          <div className="flex justify-between border my-2 p-1 rounded-sm text-lg">
            <span>Fiyat</span>
            <span>{productDetail?.price} <span className='text-sm'>TL</span></span>
          </div>
          <div>
            <ul className='flex gap-2 my-1'>
              {sizeList}  
            </ul>
          </div>
          <div className='flex justify-between'>
            <div className='flex justify-between p-2 w-4/5 bg-orange-500 hover:bg-orange-400 text-white h-10 rounded-sm text-lg'>
               <button disabled={!selectedSize} onClick={handleAddToCart} type="">SEPETE EKLE</button>   
            </div>
            <div className='flex items-center border w-12 justify-center rounded-sm'>
              <AiOutlineHeart className='stroke-current text-gray-500 hover:text-red-500' size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailComp
