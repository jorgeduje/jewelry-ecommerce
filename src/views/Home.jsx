import React from 'react';
import { Navbar } from '../components/Navbar';

export const Home = () => {
  return (
      <div className='container-home'>
         <Navbar />
         
         <header className='header-home'>
            <h2>Jewerly Diamond</h2>
            <h2>Since 1995</h2>
         </header>

         <div className='texts'>
            <h4>We offer to
              our clients maximum security and the best
              market price. We have a team of
              experts who are in charge of examining and quoting
              international prices your valuables.
            </h4>
         </div>

         <div className='calidad'>
           <img src="https://static3.depositphotos.com/1001806/137/i/600/depositphotos_1372751-stock-photo-gold-wedding-rings.jpg" alt="" />
           <h3>The best quality in jewelry</h3>
         </div>

      </div>
  )
};
