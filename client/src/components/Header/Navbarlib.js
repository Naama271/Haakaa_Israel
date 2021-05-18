
import './headerStyle.css';
//import Li from "./Li.js";

import React from "react";

import logoimage from './images/Israelogo150.png'
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter , Link} from 'react-router-dom';

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
    
  <>
   <HashLink to='/#home'><img src={logoimage} className="logo" alt="Haakaa logo"/></HashLink>
    
      <ul>
        <HashLink to='/#about'>הסיפור שלנו</HashLink>
        <HashLink to="/#products">המוצרים שלנו</HashLink>
        <HashLink to="/#distributors">נקודות ההפצה</HashLink>
        <HashLink to="/#contact">יצירת קשר</HashLink>
      </ul>
</>
    );

};

export default  Example;
