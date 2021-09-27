import React from 'react'

interface inputTextFieldProps {
    name: string,
    options: Array<string>  
}



const InputSelectField: React.FC<inputTextFieldProps> = ({name,options}) => {
    return (
        <>
        <div className="textFieldContainer">
        <select className="inputSelect"   id={name} placeholder=" ">
          {options.map(option=>
            <option className="options" key={option}>{option}</option>
            )}
        </select>
        <label className="inputSelectLabel" htmlFor={name}>{name}</label>
        </div>
        </>
    )
}

export default InputSelectField;