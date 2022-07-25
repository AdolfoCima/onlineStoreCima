import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { CartWidget } from './components/CartWidget';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Cart } from './components/Cart';
import { useState } from 'react';
import { CartForm } from './components/CartForm';





function App() {

  return (
    <div>

      <NavBar><CartWidget /></NavBar>
      {/* <ItemCount stock={6}/> */}
      <Routes>

        <Route path='/' element={<ItemListContainer />} />

        {/* Filtro por categoria */}
        <Route
          path="/category/:catId"
          element={<ItemListContainer />}
        />

        {/* vista de detalle */}
        <Route path="/product/:itemId" element={<ItemDetailContainer/>} />

        <Route path='/Cart' element={<Cart/>} />
        
        <Route path='/CartForm' element={<CartForm/>} />
        


        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </div>

  );
}

export default App;
