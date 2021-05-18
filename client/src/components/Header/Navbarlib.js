
import './headerStyle.css';
//import Li from "./Li.js";

import React from "react";

import logoimage from './images/Israelogo150.png'
import { HashLink } from 'react-router-hash-link';
// import {BrowserRouter , Link} from 'react-router-dom';


function Example() {

  return (
   
  <>
   <HashLink to='/#home'><img src={logoimage} className="logo" alt="Haakaa logo"/></HashLink>
    
      <ul>
        <HashLink to='/#about'><li>הסיפור שלנו</li></HashLink>
        <HashLink to="/#products"> <li>המוצרים שלנו</li></HashLink>
        <HashLink to="/#distributors"><li>נקודות ההפצה</li></HashLink>
        <HashLink to="/#contact"><li>יצירת קשר</li></HashLink>
      </ul>
</>
    );

};

export default  Example;
