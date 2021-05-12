
import './headerStyle.css';
//import Li from "./Li.js";

import React from "react";

import logoimage from './images/Israelogo150.png'
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter} from 'react-router-dom';

//<HashLink to="/#distributors"></HashLink>

function Example() {

  return (
    // <ReactNavbar
    //   color="#C9A878"
    //   logo={logoimage}
    //   menu={[
    //     { name: "הסיפור שלנו", to: "/about" },
    //     { name: "המוצרים שלנו", to: "/products" },
    //     { name: "נקודות הפצה", to: "/distributors" },
    //     { name: "צרי איתנו קשר", to: "/contact" },
    //   ]}
    //   social={[
    //     {
    //       name: "Youtube",
    //       url: "https://www.youtube.com/channel/UC8u24ahAPEMu33Gw4ASqpog/videos",
    //       icon: ["fab", "youtube"],
    //     },
    //     {
    //       name: "Facebook",
    //       url: "https://www.facebook.com/HaakaaIsrael",
    //       icon: ["fab", "facebook-f"],
    //     },
    //     {
    //       name: "Instagram",
    //       url: "https://www.instagram.com/alphamomb/",
    //       icon: ["fab", "instagram"],
    //     },
    //   ]}
    // />
    
    <BrowserRouter>
   
   <HashLink to='/#home'><img src={logoimage} className="logo" alt="Haakaa logo"/></HashLink>
    
      <ul>
        <li><HashLink to='/#about'>הסיפור שלנו</HashLink></li>
        <li><HashLink to="/#products">המוצרים שלנו</HashLink></li>
        <li><HashLink to="/#distributors">נקודות ההפצה</HashLink></li>
        <li><HashLink to="/#contact">יצירת קשר</HashLink></li>
      </ul>
    </BrowserRouter>
    );

};

export default  Example;
