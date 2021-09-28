import React from 'react'
import { Field} from "formik";

interface inputTextFieldProps {
    name: string,
    label:string,
    errorMessage: string,
    type?: "text" | "number"
    maxLength?:number
    
}

const InputField: React.FC<inputTextFieldProps> = ({name,label, errorMessage,type="text", maxLength}) => {
    return (
        <>
        <div className="textFieldContainer">
        <input className="inputText"  type={type} maxLength={maxLength} name={name} placeholder=" "  />
        <label className="inputLabel" htmlFor={name}>{label}</label>
        <span className={`errorMessage ${errorMessage ? "error" : ""}`} >{errorMessage || ""}</span>
        </div>
        </>
    )
}

export default InputField;