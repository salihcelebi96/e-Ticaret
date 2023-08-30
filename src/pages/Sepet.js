import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Navbar from "../components/navbar";
import { deleteProduct } from "../redux/basketSlice";
import {Link} from "react-router-dom";


const Sepet = () => {
    const basketItems = useSelector(state => state.basket.basketItems);
    const dispatch = useDispatch();
    const productTotals = useSelector(state => state.total.productTotals);
    console.log(basketItems)
    console.log("totale", productTotals)
    const deleteProducts = (id) => {
        dispatch(deleteProduct(id));
    }

    if(basketItems.length === 0){
        return (
            <div>
                <Navbar />
                <h1 className="flex justify-center bg-gray-100 items-center h-screen text-3xl">Sepetinizde ürün bulunmamaktadır.</h1>
            </div>
           
        )

         
        
   
    } else {
        const products = () => {
            return Object.values(basketItems).map(item => (
                <div className="h-24 w-full flex justify-around my-2" key={item.id}>
                    <div className="h-24">
                         <img className="h-24 w-20" src={item.image} alt="" />
                    </div>
                   
                    <div className="flex items-center justify-center sm:w-[400px]   lg:w-[600px]">
                        <p className="lg:text-2xl  sm:text-sm">{item.title}</p>
                    </div>

                    <div className="flex items-center h-24 w-24 ">
                        <p className="text-2xl"> {productTotals[item.id]} <span>TL</span></p>
                    </div>
                    <div className="flex   w-72 justify-between items-center ">
                     <div className="bg-green-600  hover:bg-green-500   p-2 lg:text-lg  border rounded-md  max-sm:text-sm   flex justify-center text-white items-center ">
                        <Link to="/products/:id/basket/sepet/payment" > Ödemeyi Tamamla  </Link>
                    </div>
                    <div className="flex items-center  h-24">
                        <button onClick={()=> deleteProducts(item.id)} className="bg-red-500 hover:bg-red-400   lg:text-lg   max-sm:text-sm     text-white p-2 border rounded-md" type="">Ürünü Sil</button>
                    </div>
                    </div>
                   

                </div>

            ));
        };

        return (
            <div>
                <Navbar />
                <div>
                    <ul>
                        {products()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sepet;

    