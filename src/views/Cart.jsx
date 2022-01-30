import React from 'react';
import { useSelector } from 'react-redux';

export const Cart = () => {

  const cart = useSelector(state => state.rootReducer.cart)
  console.log(cart);

  const productsCart = cart.map( objto => objto[0])
  console.log(productsCart);

  return(
      <div>
        {
          productsCart.map(item => 
              <h2 key={item.id}>{item.name}</h2>
          )
        }
      </div>
  )
};
