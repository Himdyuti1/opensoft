import React from 'react'
import './App.css';
import { Home } from "./MyComponents/Home.js";
import { Page1 } from "./MyComponents/Page1.js";
import { Page2 } from "./MyComponents/Page2.js";
import { Page3 } from "./MyComponents/Page3.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
//   Link
} from "react-router-dom";

function App() {
  return (
    <>
    <header>     
        <nav className="navbar">
          <h1 class="name">Himdyuti Sandilya</h1>
          <ul className="nav_links">
            <li><a href="/">Home</a></li>
            <li><a href="/Page1">Page1</a></li>
            <li><a href="/Page2">Page2</a></li>
            <li><a href="/Page3">Page3</a></li>
          </ul>
        </nav>
      </header>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
      
        <Route exact path="/Page1" element={<Page1 />}/>

        <Route exact path="/Page2" element={<Page2 />}/>
          
        <Route exact path="/Page3" element={<Page3 />}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
