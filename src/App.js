

import {useEffect, useState} from "react"
import axios from 'axios';
import appcss from "./App.css";
import Navbar from "./Components/Navbar";
import Journey from "./Components/Journey";
import Contact from "./Components/Contact";
import Team from "./Components/Team";
import Store from "./Components/Store";
import Page from "./Components/Page";
import DesignSpace from "./Components/DesignSpace";
import LoginModal from "./Components/LoginModal";
import Admin from "./Components/Admin";


function App() {
  const [active, setactive] = useState("home");
  const [product, SetProduct] = useState([]);
  const [user,setUser] = useState([])
const [items, setItems] = useState([]);
const [admin,setadmin] = useState(false)

  useEffect(() => {
    const data = window.localStorage.getItem("loggedinUser");
    if (data !== null) setUser(JSON.parse(data));

    if (user !== "undefined" && user?.email === "admin@kicksup.com") {
      setadmin(true);
    }
  

  }, [user?.email]);
 

  const adminsetting = ()=>{
    setadmin(false)
  }
  const clickactive = (e)=>{
    setactive(e)
  }
  const clickproduct = (e) => {
    SetProduct(e);
  };

 const newcartitem = (product)=>{
  setItems((oldArray) => [...oldArray, product]);
 }
  const removeanitem = (list) => {
    setItems(list);
  };
  return (
    <div>
      <Navbar clickactive={clickactive} active={active} user={user} admin={admin} adminsetting={adminsetting} />
      {active === "home" && <Page />}
      {active === "admin" && <Admin user={user} />}
      {active === "journey" && <Journey />}
      {active === "contact" && <Contact />}
      {active === "team" && <Team />}
      {active === "store" && (
        <Store
          clickactive={clickactive}
          active={active}
          items={items}
          removeanitem={removeanitem}
          newcartitem={newcartitem}
          clickproduct={clickproduct}
        />
      )}
      {active === "design" && (
        <DesignSpace
          product={product}
          user={user}
          items={items}
          clickactive={clickactive}
          active={active}
          removeanitem={removeanitem}
          newcartitem={newcartitem}
        />
      )}
      {active === "login" && (
        <LoginModal clickactive={clickactive} user={user} setUser={setUser} />
      )}
    </div>
  );
}

export default App;
