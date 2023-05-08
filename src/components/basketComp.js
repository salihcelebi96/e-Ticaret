import React, { useState } from 'react'
import Navbar from "../components/navbar"
import { useSelector,useDispatch } from 'react-redux';
import { deleteProduct, addProduct } from "../redux/basketSlice";
import { useNavigate } from 'react-router-dom';



const BasketComp = ({ productDetail }) => {
    const navigate = useNavigate();

    const basketItems = useSelector(state => state.basket.basketItems);
    
    const dispatch = useDispatch();
    
    console.log(basketItems)
    console.log(productDetail)
    const handleDeleteProduct = () => {
        dispatch(deleteProduct(productDetail.id));
        console.log(productDetail.id)
        console.log('Ürün başarıyla silindi');
        
      };
      


      const handleAddProduct = () => {
        // Dispatch the addProduct action with the given id
        dispatch(addProduct(productDetail));
        console.log('Ürün başarıyla eklendi');
        navigate(`/products/${productDetail.id}/basket/sepet`);
        

      };
      



    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        setQuantity(quantity + 1);
    }

    const decrement = () => {
        setQuantity(quantity - 1);
    }





    const shipPrice = () => {


        if (productDetail?.price * quantity >= 100) {
            return 0;
        } else {
            return 20;
        }
    }

    const ürünFiyatı = Number((productDetail?.price * quantity).toFixed(2));
    const shippingCost = Number(shipPrice());
    const total = (ürünFiyatı + shippingCost).toFixed(2);

    const sizes = useSelector(state => state.size.selectedSize);
    console.log(sizes)


 


    return (
        


            <div className='flex  flex-col   justify-center items-center gap-5 w-full relative'>
                <div className='border w-60 rounded-md flex justify-center '>
                    <div className='  w-64 p-2 '>
                        <h3 className='text-center text-xl'>Sipariş Özeti</h3>
                        <div className='flex justify-center'>
                            <img className='h-16 w-16' src={productDetail.image} alt=""/>
                        </div>
                        <div className='my-2 '>
                            <div className='flex justify-between w-full '>
                                <p>Ürünün Ücreti</p>
                                <p> {ürünFiyatı} <span>TL</span> </p>

                            </div>
                            <div className='flex  justify-between '>
                                <p>Kargo Ücreti</p>
                                <p> {shippingCost} <span>TL</span> </p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Beden</p>
                                <p className='text-xl'> {sizes} </p>
                            </div>

                            <div className='flex  justify-between relative'>
                                <div >
                                    <h3>Miktar</h3>
                                </div>
                                <div className='flex justify-center text-xl gap-4 cursor-pointer  w-full'>
                                    <button disabled={quantity == 0} onClick={decrement} className='text-2xl' type="">-</button>
                                    <p> {quantity} </p>
                                    <button onClick={increment} className='text-2xl' type="">+</button>


                                </div>
                            </div>







                            <hr className='my-3' />
                            <div className='flex justify-between  '>
                                <h3>Toplam</h3>
                                <p className='text-orange-500'> {total} <span>TL</span></p>
                            </div>

                        </div>



                    </div>

                </div>
                <div className='border  h-10 bg-green-500 hover:bg-green-400 rounded-md justify-center flex items-center w-60'>
                    <button onClick={handleAddProduct}  type="">Siparişi Tamamla</button>
                </div>
                <div className='border h-10 bg-red-500 hover:bg-red-400 rounded-md justify-center flex items-center w-60'>
                    <button onClick={handleDeleteProduct} type="">Ürünü Sil</button>
                </div>
            </div>
        

    )
}

export default BasketComp
