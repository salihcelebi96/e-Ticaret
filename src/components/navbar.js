import React, { useEffect, useState } from 'react'
import { BsBasketFill } from 'react-icons/bs';
import "./navbar.css"
import   {AiOutlineHeart} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
   
const navigate = useNavigate();

const handleAddToCart = () => {
    
    navigate(`/`)

  }

  const handleAdToCart = () => {
    
    navigate(`/basket`)

  }



    return (
        <div className='flex items-center  my-5 '>
            <div className='logo    '>
                <div>
                    <h1 onClick={handleAddToCart}  className="font-bold text-6xl cursor-pointer"  >ShopZon</h1>   
                </div>

                <div className='search flex my-2 '>
                    <input className='bg-gray-200 rounded-full  h-10   border border-none  outline-none ' placeholder='search'></input>
                    <div className='relative px-3  flex gap-5  my-1'>
                        <div className='absolute h-5 w-5 flex justify-center items-center  rounded-full -top-1 -right-1 text-white bg-red-600 '>
                            3
                        </div>

                        <AiOutlineHeart  className='stroke-current text-gray-500 hover:text-red-500' size={25} />
                       <BsBasketFill  size={28} /> 
                    </div>
                    

                </div>
            </div>




        </div>
    )
}

export default Navbar