import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetailProduct } from '../redux/productSlice'
import DetailComp from '../components/DetailComp'
import Loading from '../components/loading'
import Navbar from "../components/navbar"

const Detail = () => {
  const {id} = useParams()
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(state => state.products )


  useEffect(()=>{
    dispatch(getDetailProduct(id))
  },[dispatch,id])




  return (
    <div>
      <div>
        <Navbar/>
      </div>
      {
        productDetailStatus == "LOADING" ? <Loading/> :  <DetailComp  productDetail={productDetail}/>
      }
     
    </div>
  )
}

export default Detail