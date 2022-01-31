import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSelectedProduct, addCart} from '../redux/actions/actions';

export const ProductCard = (props) => {

  const {name, images, price, id} = props

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const selecProduct = (obj)=>{

    dispatch(getSelectedProduct(obj))
    navigate(`/shop/${id}`)

  }


  return(
      <div className='product-card'>
          <h2>{name}</h2>
          <img src={images[0].url} alt="" />
          <div>
              <h4>${price}</h4>
              <button onClick={()=> selecProduct(props)}>See More</button>
              <button onClick={()=> dispatch(addCart(id))}>+ Cart</button>
          </div>
      </div>
  )
};
