import React, { useEffect, useState } from 'react';
import { BsBasketFill } from 'react-icons/bs';
import "./navbar.css"
import { AiOutlineHeart } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiSearch } from 'react-icons/fi';

import { setSearchKeyword } from '../redux/searchSlice';
import { useDispatch } from 'react-redux';


const Navbar = ({ productDetail }) => {
  const filter = useSelector(state => state.search.searchKeyword)
const dispatch = useDispatch();





    const products = useSelector(state => state.products.products)
    const counter = useSelector(state => state.basket.basketItems.length);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        navigate(`/`);
    }

    const handleAdToCart = () => {
        navigate(`/basket`);
    }

    const handleBasket = () => {
        navigate(`/products/${productDetail}/basket/sepet`);
    }

    const handleFavori = () => {
        navigate(`/products/${productDetail}/favori`);
    }

   
    const handleSearch = (event) => {
        const keyWord = event.target.value;
        dispatch(setSearchKeyword(keyWord));
      };


      



    return (
        <div className='flex items-center my-5'>
            <div className='logo'>
                <div>
                    <h1 onClick={handleAddToCart} className="font-bold text-6xl cursor-pointer">E-Shopping</h1>
                </div>

                <div className='search relative flex my-2 gap-2 items-center'>
                    <div className='relative flex justify-end items-center'>
                        <input className='bg-gray-200 rounded-full h-10 w-52 flex justify-center px-2 border border-none outline-none'
                            placeholder='search'
                            value={filter}
                            onChange={handleSearch}  />
                        <FiSearch size={15} className='absolute mx-1' />
                    </div>

                    {counter > 0 && (
                        <div className='count absolute h-5 w-5 flex justify-center items-center rounded-full -top-1 -right-1 text-white bg-red-600'>
                            {counter}
                        </div>
                    )}

                    <AiOutlineHeart onClick={handleFavori} className='stroke-current text-gray-500 hover:text-red-500' size={25} />
                    <BsBasketFill onClick={handleBasket} size={28} />
                </div>
            </div>
            

        </div>
    );
}



export default Navbar;
