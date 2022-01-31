import React from 'react';

import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

export const ProductSelected = () => {

  const navigate = useNavigate()

  const productSelect = useSelector( state => state.rootReducer.productSelect)

  return(
      <div>
          <h2>{productSelect.name}</h2>
          <i onClick={()=> navigate("/shop")} className="fas fa-long-arrow-alt-left btn-back"></i>
      </div>
  )
};
