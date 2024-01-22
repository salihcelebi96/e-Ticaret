import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../redux/categorySlice';
import { getProducts, setCategoryFilter } from '../redux/productSlice';

const CategoryMenu = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);
  const { products } = useSelector(state => state.products);

  const handleClick = () => {
    // Ana Sayfa'ya tıklanınca tüm ürünleri getir
    dispatch(getProducts());
  };

  const handleCategoryClick = category => {
    // Kategoriye tıklanınca ilgili kategorinin ürünlerini getir
    dispatch(setCategoryFilter(category));
  };

  useEffect(() => {
    // Kategorileri Redux'tan getir
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className='bg-gray-300 flex h-12 gap-5 px-5 items-center'>
      <div onClick={handleClick} className="hover:bg-gray-600 hover:text-white p-3 cursor-pointer">
        Ana Sayfa
      </div>
      {categories?.map((category, i) => (
        <div
          onClick={() => handleCategoryClick(category)}
          className='hover:bg-gray-600 cursor-pointer hover:text-white p-3'
          key={i}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryMenu;
