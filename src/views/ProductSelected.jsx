import React from 'react';

import { useSelector } from 'react-redux';

export const ProductSelected = () => {


  const productSelect = useSelector( state => state.rootReducer.productSelect)


  return(
      <div>
          <h2>{productSelect.name}</h2>
      </div>
  )
};
