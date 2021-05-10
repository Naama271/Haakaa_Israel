import React from "react";
// import axios from "axios";
import api from "../../API/api"

function AddDistributor() {



  const onSubmit = (e) => {
    e.preventDefault();
    const fullname = e.target.elements.fullname.value;
    const title = e.target.title.value;
    const city = e.target.city.value;
    const area = e.target.area.value;
    const phone = e.target.phone.value;

    console.log(fullname, title);

    const editedData = {
      name: fullname,
      title,
      city,
      area,
      phone,
    };

    test(editedData);
  };

  const test = async (data) => {
    try {
      console.log(data);
      const req = await api.post(
        "distributors",
        data
      );
      console.log(req);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      הוספת מפיצה חדשה
      <input type="text" placeholder="שם המפיצה" name="fullname" required />
      <input type="text" placeholder="תפקיד מפיצה" name="title" />
      <input type="text" placeholder="עיר/ איזור" name="city" required />
      <input type="text" placeholder="מספר פלאפון" name="phone" required />
      <select>
        <option value="0">בחרי איזור</option>
        <option value="north">צפון</option>
        <option value="center">מרכז</option>
        <option value="south">דרום</option>
      </select>
      <button type="submit">שמירה</button>
    </form>
  );
}

export default AddDistributor;
