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
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bgb0wad', 'template_2828nkq', e.target, 'user_JEZO1HoxX0qv5PhTYQDdb')
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
    placeholder='from name'
    value={toSend.from_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='to_name'
    placeholder='to name'
    value={toSend.to_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='message'
    placeholder='Your message'
    value={toSend.message}
    onChange={handleChange}
  />
  <input
    type='text'
    name='reply_to'
    placeholder='Your email'
    value={toSend.reply_to}
    onChange={handleChange}
  />
  <button type='submit'>Submit</button>
</form>
    </>
  );
};

export default ContactForm;