import React, { useState } from "react";
import api from "../../API/api";
import TableField from "./Table_field";
import authHeader from '../../services/auth-header';

const TableRow = (props) => {
  const [area, setArea] = useState(props.area);
  const [name, setName] = useState(props.name);
  const [title, setTitle] = useState(props.title);
  const [city, setCity] = useState(props.city);
  const [phone, setPhone] = useState(props.phone);
  const [isEditMode, setIsEditMode] = useState(false);

    const editRow = async(id) => {
        const newData = {
            area,name,title,city,phone
        };
        setIsEditMode(false);
        console.log(newData);
        try {
          const req = await api.put(`edit/distributor/${id}`, { headers: authHeader() });
          console.log(req);
        } catch (e) {
          console.log(e);
        }
    }

    const deleteDis = async(id , name) => {
      alert( `בטוח שתרצי למחוק את ${name}?`)
      // console.log("delete")
      // console.log(id)
      try {
        const req = await api.delete(`delete/distributor/${id}`);
        console.log(req);
      } catch (e) {
        console.log(e);
      }
    }

  return (
    <>
      
        {/* {distributor.area} */}
        <TableField
          value={area}
          isEditMode={isEditMode}
          onFieldChange={(area) => setArea(area)}
        />
      
    
        {/* {distributor.name} */}
        <TableField
          value={name}
          isEditMode={isEditMode}
          onFieldChange={(name) => setName(name)}
        />
      
    
        {/* {distributor.title} */}
        <TableField
          value={title}
          isEditMode={isEditMode}
          onFieldChange={(title) => setTitle(title)}
        />
      
    
        {/* {distributor.city} */}
        <TableField
          value={city}
          isEditMode={isEditMode}
          onFieldChange={(city) => setCity(city)}
        />
   
    
        <TableField
          value={phone}
          isEditMode={isEditMode}
          onFieldChange={(phone) => setPhone(phone)}
        />
   
      <td>
        {!isEditMode 
        ? <input type="button" value="עריכה" onClick={() => setIsEditMode(true)}/>
        : <input type="button" value="שמירה" onClick={() => editRow(props.id)}/>}
        <input
          type="button"
          value="מחיקה"
          onClick={() => deleteDis(props.id, name)}
        />
      </td>
      {/* {isAdmin && <td><button>delete</button></td>} */}
    </>
  );
};

export default TableRow