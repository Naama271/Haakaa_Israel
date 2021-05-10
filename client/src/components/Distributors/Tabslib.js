import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Mashudata from './Distributorsdata';
import whatsapp from './icons/whatsapp.png';
import phone from './icons/phone.png';


function Tabslib (){
  return (
    <div>
      <Tabs direction={'rtl'}>
        <TabList>
          <Tab >צפון</Tab>
          <Tab>מרכז</Tab>
          <Tab>דרום</Tab>
          <Tab>רכישה אונליין</Tab>
        </TabList>
        <TabPanel>
        <h4>מפיצות בצפון </h4>
       <Mashudata location='north' />
        </TabPanel>
        <TabPanel>
        <h4>מפיצות במרכז ובירושלים</h4>
        <Mashudata location='center' />
        </TabPanel>
        <TabPanel>
        <h4>מפיצות בדרום </h4>
        <Mashudata location='south' />
        </TabPanel>
        <TabPanel>
          <h4>רכישה מהירה אונליין </h4>
          <table>
      <tbody >
      <thead>
        <td>העסק</td>
        <td>האתר</td>
        <td>יצירת קשר</td>
        <td>יצירת קשר</td>
        
      </thead>
       <tr>
         <td>אלפא מאם </td>
        <td><a href="https://www.alphamom.co.il">www.alphamom.co.il</a></td>
        <td><a href="https://wa.me/972523505066"><img src={whatsapp} alt="whatsapp icon"/></a> </td>
        <td><a href= "tel:0542003252"><img src={phone} alt="phone icon"/></a> </td>
      </tr>  
       <tr>
          <td>אמהות</td>
           <td><a href="https://www.imahot-design.com">www.imahot-design.com</a></td>
        <td><a href="https://wa.me/972523494220"><img src={whatsapp} alt="whatsapp icon"/></a> </td>
        <td><a href= "tel:0523494220"><img src={phone} alt="phone icon"/></a> </td>
      </tr>  
      <tr>
       <td> בייבי קואלה</td>
        <td><a href="https://baby-koala.com">www.baby-koala.com</a></td>
        <td><a href="https://wa.me/972542003252"><img src={whatsapp} alt="whatsapp icon"/></a>
        </td>
        <td><a href="tel:0542003252"><img src={phone} alt="phone icon"/></a>
      </td>
      </tr>  
    </tbody>
  </table>
        </TabPanel>
      </Tabs>
    </div>
  );

}

export default Tabslib;