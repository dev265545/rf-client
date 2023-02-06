import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Cart({user}) {
    console.log("email",user)
    const [cart,setCart] = useState([]);
  
    useEffect(() => {
        const databody = {
          email: user?.email,
        };
     axios
       .get("http://localhost:8080/users/oneuser", databody)
       .then((response) => {
         setCart(response.data);
        
       });
      }
    , [user,cart])
    console.log(cart);
  return (
    <div>{cart?.cart}</div>
  )
}

export default Cart