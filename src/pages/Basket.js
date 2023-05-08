import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetailProduct } from '../redux/productSlice'
import Loading from '../components/loading'
import Navbar from "../components/navbar"
import BasketComp from "../components/basketComp" 

const Basket = () => {
    

  const {id} = useParams()
  const dispatch = useDispatch();
  const {productDetail,productDetailStatus} = useSelector(state => state.products)
  

  useEffect(()=>{
    dispatch(getDetailProduct(id))
  },[dispatch,id])






  return (
    <div>
      <div>
        <Navbar/>
      </div>
      {
        productDetailStatus == "LOADING" ? <Loading/> :  <BasketComp productDetail={productDetail} />
      }
     
    </div>
  )
}

export default Basket