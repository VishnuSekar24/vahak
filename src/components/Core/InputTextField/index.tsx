import React from 'react'
import { Field} from "formik";

interface inputTextFieldProps {
    name: string,
    handleChange: any,
    required:boolean,
    label:string,
    errorMessage: string
    
}

const InputTextField: React.FC<inputTextFieldProps> = ({name,label, handleChange, required, errorMessage}) => {
    return (
        <>
        <div className="textFieldContainer">
        <Field className="inputText"  type="text"  name={name} placeholder=" "  required={required}/>
        <label className="inputLabel" htmlFor={name}>{label}</label>
        <span className={`errorMessage ${errorMessage ? "error" : ""}`} >{errorMessage || ""}</span>
        </div>
        </>
    )
}

export default InputTextField;