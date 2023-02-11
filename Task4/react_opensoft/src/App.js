import React, {useState,useEffect} from 'react'
import './App.css';
import { Home } from "./MyComponents/Home.js";
import { Page1 } from "./MyComponents/Page1.js";
import { Page2 } from "./MyComponents/Page2.js";
import { Page3 } from "./MyComponents/Page3.js";
import { Theme_Toggle_Button } from "./MyComponents/Theme_Toggle_Button.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export const ThemeContext=React.createContext()

function App() {

  const [currPage, setCurrPage] = useState(0);
  const [count, setCount] = useState(0);
  const incrementCount=(toPage)=>{
    if(toPage!==currPage){
      setCount(count+1);
      setCurrPage(toPage);
    }
  }

  const [theme,changeTheme]=useState("light");
  function toggleTheme(){
    if(theme==="light"){
      changeTheme("dark")
    }
    else{
      changeTheme("light")
    }
    document.body.className=theme;
  }

  useEffect(() => {
  
    return () => {
      if(theme==='light'){
        alert("Light theme")
      }
      else{
        alert("Dark theme")
      }
    }
  },[theme])
  

  return (
    <>
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        <Router>
          <header>     
              <nav className="navbar">
                <h1 class="name">Himdyuti Sandilya</h1>
                <ul className="nav_links">
                  <li><Link to="/" onClick={()=>incrementCount(0)}>Home</Link></li>
                  <li><Link to="/Page1" onClick={()=>incrementCount(1)}>Page1</Link></li>
                  <li><Link to="/Page2" onClick={()=>incrementCount(2)}>Page2</Link></li>
                  <li><Link to="/Page3" onClick={()=>incrementCount(3)}>Page3</Link></li>
                </ul>
              </nav>
            </header>
          <Routes>
            <Route exact path="/" element={<Home count={count}/>}/>

            <Route exact path="/Page1" element={<Page1 count={count}/>}/>

            <Route exact path="/Page2" element={<Page2 count={count}/>}/>

            <Route exact path="/Page3" element={<Page3 count={count}/>}/>
          </Routes>
          {/* eslint-disable-next-line */}
          <Theme_Toggle_Button />
        </Router>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
