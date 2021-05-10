import React, { useState, useEffect } from "react";
import axios from "axios";
import whatsapp from "./icons/whatsapp.png";
import phone from "./icons/phone.png";
import "./dis.css";

const Mashudata = ({ location }) => {
  const [display, setdisplay] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/distributors"
      );

      const arr = data.filter((distributor) => {
        return distributor.area === location;
      });

      setdisplay(
        arr.map((distributor) => {
          return (
            <tr key={distributor._id}>
              <td>
                {distributor.name}
                <br />
                {distributor.title}
              </td>
              <td> {distributor.city}</td>
              <td>
                <a href={`https://wa.me/972${distributor.phone}`}>
                  <img src={whatsapp} alt="whatsapp "/>
                </a>{" "}
              </td>
              <td>
                <a href={`tel:${distributor.phone}`}>
                  <img src={phone} alt="phone "/>
                </a>{" "}
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
          <th>שם</th>
          <th>איזור</th>
          <th>יצירת קשר</th>
        </tr>
      </thead>
      <tbody>
      {display}
      </tbody>
    </table>
     </>
  );
};

export default Mashudata;
