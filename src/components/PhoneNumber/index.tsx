import { Field } from 'formik';
import React from 'react'
import InputCheckBox from '../Core/inputCheckBox';


interface inputTextFieldProps {
    name: string,
    label:string,
    errorMessage: string,
    
}

const PhoneNumber:React.FC<inputTextFieldProps> = ({name,label,errorMessage}) => {
    return (
        <div className="textFieldContainer">
        <Field name={name} className="inputText" label={label} errorMessage={errorMessage} />
        <label className="inputLabel" htmlFor={name}>{label}</label>
        <div className="updateSection"><InputCheckBox name={'getUpdate'} label={'Get Updates on'} />{" "}<span>Whatsapp</span></div>
        <span className={`errorMessage ${errorMessage ? "error" : ""}`} >{errorMessage || ""}</span>
        
        </div>
    )
}

export default PhoneNumber;
