import React from 'react';

import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import {Navbar} from "../components/Navbar"


export const ProductSelected = () => {

  const navigate = useNavigate()

  const productSelect = useSelector( state => state.rootReducer.productSelect)

  return(
      <div className='container-selected'>
        <Navbar />
          <h2>{productSelect?.name}</h2>
          <h3>Category: {productSelect?.category.name}</h3>
          <h4>{productSelect?.description}</h4>
          <div className='container-images'>
            {
              productSelect?.images?.map(img => 
                <img src={img.url} alt=""  key={img.id}/>  
              )
            }
          </div>

        
          <i onClick={()=> navigate("/shop")} className="fas fa-long-arrow-alt-left btn-back"></i>
      </div>
  )
};
