
import React from "react";

const ContactForm = () => {
  // const [status, setStatus] = useState("Submit");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("Sending...");
  //   const { name, email, message } = e.target.elements;
  //   let details = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };

  // };
  return (
    <form className="flex">
        <input type="text" id="name" placeholder="השם שלך" required />
        <input type="email" id="email" placeholder="כתובת המייל שלך" required />
        <input type="phone" id="phone" placeholder="מספר הפלאפון שלך" required />
        <textarea id="message" placeholder="מה שרצית לשאול או להגיד לנו"  />
      <button type="submit">דברו איתי</button>
    </form>
  );
};

export default ContactForm;