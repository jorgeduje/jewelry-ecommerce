
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { getConfig } from '../utils/getConfig';

import { getProducts } from '../redux/actions/actions';
import { ProductCard } from '../components/ProductCard';



export const Shop = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const initialData = useSelector(state => state.rootReducer.initialData)

  console.log(initialData);
 
  const logOut = () => {
    
    localStorage.setItem("token", "");
    navigate("/");
    
  };
  
  useEffect(()=>{
    
    axios.get("https://ecommerce-exercise-backend.herokuapp.com/products/", getConfig())
      .then(res => dispatch(getProducts(res.data)))
      .catch(err => console.log(err))
    
  },[dispatch])
  
  return (

      <div className='container-shop'>
            <div className='logout'>
              <button onClick={logOut}>log out</button>
              <button onClick={()=>navigate("/cart")}>go cart</button>
            </div>
            <h1>Jewelry store</h1>
            <div className='container-products'>
              {
                initialData.map( product => 
                  <ProductCard 
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    images={product.images}
                    price={product.price}
                  />
                )
              }
            </div>
            
      </div>
  )
};
