
//import './App.css';
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

import facebook from '../icons/facebook.png'
import instagram from '../icons/instagram.png'
import youtube from '../icons/youtube.png'


function Footer() {
  return (
    <div className="footer" >
<a href="https://www.facebook.com/HaakaaIsrael"><img src={facebook} alt="facebook"/></a>
<a href="https://www.youtube.com/channel/UC8u24ahAPEMu33Gw4ASqpog/videos"><img src={youtube} alt="youtube"/></a>
<a href="https://www.instagram.com/alphamomb/"><img src={instagram} alt="instagram"/></a>

כל הזכויות שמורות
HAAKAA ISRAEL © 
    </div>
  );
}

export default Footer;
