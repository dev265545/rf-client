

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


function App() {
  const [active, setactive] = useState("home");
  const [product, SetProduct] = useState([]);
  const [user,setUser] = useState([])
  useEffect(() => {
    const data = window.localStorage.getItem("loggedinUser");
    if (data !== null) setUser(JSON.parse(data));
  }, []);
  console.log(user)
  const clickactive = (e)=>{
    setactive(e)
  }
  const clickproduct = (e) => {
    SetProduct(e);
  };
  console.log(active)

  return (
    <div>
      <Navbar clickactive={clickactive} active={active} user={user} />
      {active === "home" && <Page />}
      {active === "journey" && <Journey />}
      {active === "contact" && <Contact />}
      {active === "team" && <Team />}
      {active === "store" && (
        <Store
          clickactive={clickactive}
          active={active}
          clickproduct={clickproduct}
        />
      )}
      {active === "design" && (
        <DesignSpace
          product={product}
          user={user}
          clickactive={clickactive}
          active={active}
        />
      )}
      {active === "login" && <LoginModal clickactive={clickactive} user={user} setUser={setUser} />}
    </div>
  );
}

export default App;
