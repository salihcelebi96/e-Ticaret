import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from '../redux/categorySlice';
import { getProducts } from '../redux/productSlice';







const Category = ({setCategory}) => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories)
  const {products} = useSelector(state => state.products);
   

  const handleClick = () => {
   
    dispatch(getProducts());
  };
  

  useEffect(() => {
    dispatch(getCategories())
    
  }, [dispatch])



  return (
    <div className='bg-gray-300 flex h-12  pl-5   md:gap-5 px-5  items-center'>
      <div onClick={handleClick}   className="hover:bg-gray-600 hover:text-white p-3 cursor-pointer">
        Ana Sayfa
      </div>
      {
        
        
           categories?.map((category, i) => (

              <div onClick={() => setCategory(category) }  className='hover:bg-gray-600  cursor-pointer  hover:text-white   p-3'  key={i}>
                    {category}
              </div>

        

       
        
       




        ))
      }



    </div>
  )
}

export default Category