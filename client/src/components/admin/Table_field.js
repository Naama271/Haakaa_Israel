import React,{useState} from 'react';

const TableField = (props) =>{
    const [value,setValue] = useState(props.value);

    const editField = (event) =>{
        setValue(event.target.value);
        props.onFieldChange(event.target.value);
    }

    return (
        <td>
            {props.isEditMode 
            ? <input type='text' value={value} onChange={editField}/> 
            : <span>{value}</span>}
        </td>
    )
}

export default TableField;