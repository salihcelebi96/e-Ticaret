import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/productSlice';
import Product from './home/product';
import Loading from './loading';
import ReactPaginate from 'react-paginate';
import { getCategoryProducts } from '../redux/productSlice';

const Products = ({ category, sort }) => {
  const dispatch = useDispatch();
  const searchKeyword = useSelector(state => state.search.searchKeyword);
  const { products, productsStatus } = useSelector(state => state.products);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const pageCount = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
    setCurrentPage(0); // Reset current page when changing category or sort order.
  }, [dispatch, category, sort, searchKeyword]); // Eklenen searchKeyword bağımlılığı

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const currentItems = filteredProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const sortProducts = (a, b) => {
    if (sort === 'inc') {
      return a.price - b.price;
    } else if (sort === 'dec') {
      return b.price - a.price;
    } else {
      return 0;
    }
  };

  return (
    <div>
      {productsStatus === 'LOADING' ? (
        <Loading />
      ) : (
        <>
          <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
            {currentItems.sort(sortProducts).map((product, i) => (
              <Product key={i} product={product} />
            ))}
          </div>
          <ReactPaginate
            className='paginate'
            breakLabel='...'
            nextLabel=' >'
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel='< '
            containerClassName='pagination'
            activeClassName='active'
          />
        </>
      )}
    </div>
  );
};

export default Products;
