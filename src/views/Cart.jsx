
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCart, subOneAmount, addOneAmount, deleteCart } from '../redux/actions/actions';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const Cart = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const cart = useSelector(state => state.rootReducer.cart)

  const prices = (cart.map( item => Math.floor(item.price * item.amount)))
  
  const totalPrice = prices.reduce( (anterior, actual)=> anterior + actual, 0 )

  const buying = ()=>{

    alert("Buy Successfull")
    dispatch(deleteCart())
  }



  return(
      <div className='container-cart'>
        <Navbar />
        <div className='header-cart'>
          <h2>Your cart</h2>
          <h3>Total: {totalPrice}</h3>
          <button onClick={()=>buying()}>Buy</button>
        </div>


        <div className='cart-list'>
         
          {
            cart.map(item => 
                <div key={item.id} className='card-cart'>

                  <img src={item.images[0].url} alt="" />
                  <div className='info-cart-product'>
                    <h5>{item.name}</h5>
                    <h5>{item.price}</h5>
                  </div>

                  <h6>{item.amount}</h6>

                  <div className='container-btns-cart'>
                    <i onClick={()=> dispatch(addOneAmount(item.id))} className="fas fa-plus"></i>
                    <i onClick={()=> dispatch(subOneAmount(item.id))} className="fas fa-minus"></i>
                    <i onClick={()=>dispatch(removeCart(item.id))} className="fas fa-trash-alt"></i>
                  </div>

                </div>
            )
          }
        </div>
        <i onClick={()=> navigate("/shop")} className="fas fa-long-arrow-alt-left btn-back"></i>
      </div>
  )
};