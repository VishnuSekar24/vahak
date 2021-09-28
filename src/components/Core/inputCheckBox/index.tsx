import React from 'react'

interface CheckboxInterface {
  name:string,
  label:string,
}
const InputCheckBox:React.FC<CheckboxInterface> = ({name, label}) => {
    return (
        <div className="checkBox">
        <input type="checkbox"  name={name} />
        <label>{label}</label> 
        
        </div>
    )
}

export default InputCheckBox;
