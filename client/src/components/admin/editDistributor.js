import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./dis.css";

function EditDistributor() {
  const [display, setdisplay] = useState([]);

  const deleteDis = async(id , name) => {
    alert( `בטוח שתרצי למחוק את ${name}?`)
    console.log("delete")
    console.log(id)
    try {
      const req = await axios.delete(`http://localhost:5000/api/delete/product/${id}`);
      console.log(req);
    } catch (e) {
      console.log(e);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const fullname = e.target.elements.fullname.value;
    const title = e.target.title.value;
    const city = e.target.city.value;
    const area = e.target.area.value;
    const phone = e.target.phone.value;

    console.log(fullname, title);

    const newData = {
      name: fullname,
      title,
      city,
      area,
      phone,
    };

    test(newData);
  };
  const test = async (data) => {
    try {
      console.log(data);
      const req = await axios.put(
        `http://localhost:5000/api/distributor/id`,
        data
      );
      console.log(req);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/distributors"
      );

      //   const arr = data.filter((distributor) => {
      //     return distributor.area === location;
      //   });

      setdisplay(
        data.map((distributor) => {
          return (
            <tr key={distributor._id}>
              <td>
              {distributor.area}
              </td>
              <td>
                {distributor.name}
                </td>
                <td>
                {distributor.title}
              </td>
              <td> {distributor.city}</td>
              <td>
              {distributor.phone}
              </td>
              <td>
               <input type="button" value="עריכה" />
               <input type="button" value="מחיקה" onClick={()=>deleteDis(distributor._id, distributor.name)}/>
              </td>
              {/* {isAdmin && <td><button>delete</button></td>} */}
            </tr>
          );
        })
      );
    };

    search();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>איזור</th>
            <th>שם המפיצה</th>
            <th>תפקיד</th>
            <th>יצירת קשר</th>
            <th>יצירת קשר</th>
          </tr>
        </thead>
        <tbody>{display}</tbody>
      </table>

      {/* <form onSubmit={onSubmit}>
        הוספת מפיצה חדשה
        <input type="text" placeholder="שם המפיצה" name="fullname" />
        <input type="text" placeholder="תפקיד מפיצה" name="title" />
        <input type="text" placeholder="עיר/ איזור" name="city" />
        <input type="text" placeholder="מספר פלאפון" name="phone" />
        <select>
          <option value="0">בחרי איזור</option>
          <option value="north">צפון</option>
          <option value="center">מרכז</option>
          <option value="south">דרום</option>
        </select>
        <button type="submit">שמירת שינויים</button>
      </form> */}
    </>
  );
}

export default EditDistributor;
