
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCart } from '../redux/actions/actions';

export const Cart = () => {

  const dispatch = useDispatch()

  const cart = useSelector(state => state.rootReducer.cart)
  
  // DEVUELVE UN SOLO ARREGLO CON LOS OBJETOS DENTRO
  const productsCart = cart.flat()
  console.log(cart);

  const prices = (productsCart.map( item => Math.floor(item.price)))

  const totalPrice = prices.reduce( (anterior, actual)=> anterior + actual, 0 )



  return(
      <div className='container-cart'>

        <div className='header-cart'>
          <h2>Your cart</h2>
          <button>Buy</button>
        </div>

        <div>
          <h3>price: {totalPrice}</h3>
        </div>

        <div className='cart-list'>
          {
            productsCart.map(item => 
                <div key={item.id} className='card-cart'>
                  <img src={item.images[0].url} alt="" />
                  <h4>{item.name}</h4>
                  <h5>{item.price}</h5>
                  <button onClick={()=>dispatch(removeCart(item.id))}>remove</button>
                </div>
            )
          }
        </div>

      </div>
  )
};