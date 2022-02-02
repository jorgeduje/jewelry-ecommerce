
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const navigate = useNavigate()

    const logOut = () => {
    
        localStorage.setItem("token", "");
        navigate("/");
        
      };


  return (

       <div className='nav-bar'>
    
            <div className='logout'>
                <button onClick={()=>navigate("/home")}>Home</button>
                <button onClick={()=>navigate("/shop")}>Shop</button>
                <button onClick={()=>navigate("/cart")}>Go Cart</button>
                <button onClick={logOut}>Log Out</button>
            </div> 

            <section className={menu ? "logout-mobile" : "logout-mobile-hidden"}>

                <button onClick={()=>navigate("/home")} className={menu ? "" : 'hide'}>Home</button>
                <button onClick={()=>navigate("/shop")} className={menu ? "" : 'hide'}>Shop</button>
                <button onClick={()=>navigate("/cart")} className={menu ? "" : 'hide'}>Go Cart</button>
                <button onClick={logOut} className={menu ? "" : 'hide'}>Log Out</button>

            </section> 

          

            {/* <button className="burguer" onClick={()=> setMenu(!menu)}>cerrar</button> */}
            {
                menu ? <i className="fas fa-window-close burguer" onClick={()=> setMenu(!menu)}></i> : <i className="fas fa-bars burguer" onClick={()=> setMenu(!menu)}></i>
            }
           
       </div>

  )
};
