import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Navbar from "../components/navbar";
import { deleteProduct } from "../redux/basketSlice";

const Sepet = () => {
    const basketItems = useSelector(state => state.basket.basketItems);
    const dispatch = useDispatch();

    console.log(basketItems)

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
                        <p className="text-2xl">{item.price} <span>TL</span></p>
                    </div>
                    <div className="flex items-center h-24 w-24">
                        <button onClick={()=> deleteProducts(item.id)} className="bg-red-500 hover:bg-red-400   lg:text-lg   max-sm:text-sm     text-white p-2 border rounded-md" type="">Ürünü Sil</button>
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

    













  
















