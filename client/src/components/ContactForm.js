import React from "react";
import { useState } from 'react';
 import emailjs from 'emailjs-com'; 
import{ init } from 'emailjs-com';
import { send } from 'emailjs-com';
init("user_JEZO1HoxX0qv5PhTYQDdb");

let userID = 'user_JEZO1HoxX0qv5PhTYQDdb'


// init("user_JEZO1HoxX0qv5PhTYQDdb");



const ContactForm = () => {
  const [toSend, sendForm] = useState({
    from_name: '',
    phone: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.from_name.value)
    console.log(e.target.phone.value)
    console.log(e.target)

    const phone = e.target.phone.value
  
      const regex = /^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/;
      if (!phone.match(regex)) {
        alert("מספר הנייד לא תקין... נסי שוב");
      }
   

    emailjs.sendForm('service_bgb0wad', 'template_2828nkq', 'e.target', 'user_JEZO1HoxX0qv5PhTYQDdb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  };

  const handleChange = (e) => {
    sendForm({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
<form onSubmit={onSubmit}>
  <input
    type='text'
    name='from_name'
    placeholder='השם שלך'
    value={toSend.from_name}
    onChange={handleChange}
  />
  <input
    type='number'
    name='phone'
    placeholder='מספר הנייד שלך'
    value={toSend.phone}
    onChange={handleChange}
  />
  <textarea
    name='message'
    placeholder='מה שתרצי לשאול או להגיד לנו'
    value={toSend.message}
    onChange={handleChange}
  />
  <input
    type='email'
    name='reply_to'
    placeholder='המייל שלך'
    value={toSend.reply_to}
    onChange={handleChange}
  />
  <button type='submit'>דברו איתי</button>
</form>
    </>
  );
};

export default ContactForm;