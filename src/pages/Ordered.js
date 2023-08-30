import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/basketSlice';



const Ordered = () => {
 




  return (
    <div className=' h-screen flex flex-col  justify-center items-center gap-10'>
        <div>
        <AiOutlineCheckCircle size={90}   color="green" />
        </div>
      <div>
        <h1 className='text-4xl'>Siparişiniz Tamamlanmıştır</h1>
      </div>
      <div className='border rounded bg-orange-500 hover:bg-orange-600 text-white p-2'>
        <Link  to="/"> Alışverişe devam et  </Link>
      </div>
    </div>
  )
}

export default Ordered
