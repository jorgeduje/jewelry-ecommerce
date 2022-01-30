import React from 'react';

import { useSelector } from 'react-redux';

export const ProductSelected = () => {


  const [ product ] = useSelector( state => state.rootReducer.productSelect)


  return(
      <div>
          <h2>{product.name}</h2>
      </div>
  )
};
