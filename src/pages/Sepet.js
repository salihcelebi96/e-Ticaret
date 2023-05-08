import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Navbar from "../components/navbar";

const Sepet = () => {
    const basketItems = useSelector(state => state.basket.basketItems);
     const dispatch = useDispatch();
     
     console.log(basketItems)


     

     const products = () => {
        return Object.values(basketItems).map(item => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.price}</p>
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

export default Sepet
