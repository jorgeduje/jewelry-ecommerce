import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"

import { ProtectedRoutes } from './components/ProtectedRoutes';

// VIEWS
import { Cart } from './views/Cart';
import { Login } from './views/Login';
import { ProductSelected } from './views/ProductSelected';
import { Shop } from './views/Shop';



function App() {

  return (
    
    <BrowserRouter>

      <Routes>
          
          <Route path="/" element={ <Login /> }/>
          
          <Route element={<ProtectedRoutes />}>

              <Route path="/shop" element={ <Shop /> }/>
              <Route path="/shop/:id" element={ <ProductSelected />}/>
              <Route path="/cart" element={ <Cart /> }/>
              
          </Route>

      </Routes>

    </BrowserRouter>


  );
}

export default App;
