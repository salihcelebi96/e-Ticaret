import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Basket from "./pages/Basket"
import Sepet from "./pages/Sepet";
import Favori from "./pages/Favori";
import PaymentPage from "./pages/payment";
import Ordered from './pages/Ordered';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />} />

          <Route path='/products/:id' element={<Detail />} />
          <Route path='/products/:id/basket' element={<Basket />} />
          <Route path='/products/:id/basket/sepet' element={<Sepet />} />
          <Route path='/products/:id/favori' element={<Favori />} />
          <Route path='/products/:id/basket/sepet/payment' element={<PaymentPage />} />
          <Route path='/ordered' element={<Ordered />} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
