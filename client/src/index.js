import emailjs from 'emailjs-com'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import{ init } from 'emailjs-com';
// init("user_JEZO1HoxX0qv5PhTYQDdb");


ReactDOM.render(
  // <React.StrictMode>
  <>
  {/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>
  <script type="text/javascript">
  (function() {
  emailjs.init("user_JEZO1HoxX0qv5PhTYQDdb")
  })();
  </script> */}
    <App />
    </>
  // </React.StrictMode>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
