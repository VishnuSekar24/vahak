import React from 'react'
import InputCheckBox from '../Core/inputCheckBox';
import whatsapp from "../../assets/icons/whatsapp.png";


interface inputTextFieldProps {
    name: string,
    label:string,
    errorMessage: string,
    value?:string,
    onChange?:(e:any)=> void
    
}

const PhoneNumber:React.FC<inputTextFieldProps> = ({name,label,errorMessage, value, onChange}) => {
    return (
        <div className="textFieldContainer">
        <input name={name} className="inputText"  value={value} onChange={onChange}/>
        <label className="inputLabel" htmlFor={name}>{label}</label>
        <div className="updateSection"><InputCheckBox name={'getUpdate'} label={'Get Updates on'} />{" "}<span><img src={whatsapp} alt="whatsapp"/>Whatsapp</span></div>
        <span className={`errorMessage ${errorMessage ? "error" : ""}`} >{errorMessage || ""}</span>
        
        </div>
    )
}

export default PhoneNumber;
