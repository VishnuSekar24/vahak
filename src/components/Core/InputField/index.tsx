import React from 'react'
import { Field} from "formik";

interface inputTextFieldProps {
    name: string,
    label:string,
    errorMessage: string,
    type?: "text" | "number"
    maxLength?:number,
    onChange?:(e:any)=> void
    
}

const InputField: React.FC<inputTextFieldProps> = ({name,label, errorMessage,type="text", maxLength, onChange}) => {
    return (
        <>
        <div className="textFieldContainer">
        <input className="inputText"  type={type} maxLength={5} name={name} placeholder=" "  onChange={onChange}/>
        <label className="inputLabel" htmlFor={name}>{label}</label>
        <span className={`errorMessage ${errorMessage ? "error" : ""}`} >{errorMessage || ""}</span>
        </div>
        </>
    )
}

export default InputField;