import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar';
import OrderForm from './pages/orderform';
import Orders from './pages/orders';
import Product from './pages/products';
import ProductForm from './pages/productform';
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/orderform" element={<OrderForm />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/productform" element={<ProductForm />}/>
        </Route>
      </Routes>
      

    </BrowserRouter>  
    </>
  );
}

export default App;
