import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./dis.css";
import api from "../../API/api"
import TableRow from "./Tablerow";
// import TableField from "./Table_field";

function EditDistributor() {
  const [display, setdisplay] = useState([]);

  // const deleteDis = async(id , name) => {
  //   alert( `בטוח שתרצי למחוק את ${name}?`)
  //   // console.log("delete")
  //   // console.log(id)
  //   try {
  //     const req = await api.delete(`delete/distributor/${id}`);
  //     console.log(req);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // const editDis = (e) => {
  //   e.preventDefault();
  //   setIsEditMode(true);
  //   const fullname = e.target.elements.fullname.value;
  //   const title = e.target.title.value;
  //   const city = e.target.city.value;
  //   const area = e.target.area.value;
  //   const phone = e.target.phone.value;

  //   console.log(fullname, title);

  //   const editedData = {
  //     name: fullname,
  //     title,
  //     city,
  //     area,
  //     phone,
  //   };

  //   test(editedData);
  // };
  // const test = async (data) => {
  //   try {
  //     console.log(data);
  //     const req = await api.put(
  //       `distributor/id`,
  //       data
  //     );
  //     console.log(req);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  useEffect(() => {
    const search = async () => {
      const { data } = await api.get(
        "distributors"
      );

      setdisplay(
        data.map((distributor) => {
          return (
            <tr key={distributor._id}>  <TableRow area={distributor.area} name={distributor.name} city={distributor.city} title={distributor.title} phone={distributor.phone} id={distributor._id}/></tr>
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
{/* 
    <form onSubmit={onSubmit}>
       עדכון מפיצה קיימת
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
      </form>  */}
    </>
  );
}

export default EditDistributor;
