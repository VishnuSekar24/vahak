import React from 'react'

interface inputTextFieldProps {
    name: string,
    label:string,
    errorMessage: string,
    type?: "text" | "number"
    maxLength?:number,
    value?: string | number,
    onChange?:(e:any)=> void
    
}

const InputField: React.FC<inputTextFieldProps> = ({name,label, errorMessage,type="text", maxLength,value, onChange}) => {
    return (
        <>
        <div className="textFieldContainer">
        <input className="inputText"  type={type} maxLength={5} name={name}  value={value} placeholder=" "  onChange={onChange}/>
        <label className="inputLabel" htmlFor={name}>{label}</label>
        <span className={`errorMessage ${errorMessage ? "error" : ""}`} >{errorMessage || ""}</span>
        </div>
        </>
    )
}

export default InputField;