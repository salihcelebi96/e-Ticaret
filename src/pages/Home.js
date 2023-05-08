import React, { useEffect, useState } from 'react'
import "./home.css"
import Navbar from '../components/navbar';
import Slider from "../components/home/SliderComp"
import Category from "../components/category"
import Sorting from "../components/sorting"
import Products from "../components/products";









const Home = () => {


    const [sort, setSort] = useState("")
    const [category, setCategory] = useState("")









    return (
        <div className='all '>


            <div className='container-fluid '>
                <div>
                    <Navbar />



                </div>
                <div>
                    <Slider />
                </div>

                <div>
                    <Sorting  setSort={setSort}/>

                    <Category setCategory = {setCategory} />



                    <Products category={category} sort={sort} />
                </div>
















            </div>
        </div>
    )
}

export default Home