import { Field } from 'formik';
import React from 'react'

interface CheckboxInterface {
  name:string,
  label:string,
}
const InputCheckBox:React.FC<CheckboxInterface> = ({name, label}) => {
    return (
        <div className="checkBox">
        <Field type="checkbox"  name={name} />
        <label>{label}</label> 
        
        </div>
    )
}

export default InputCheckBox;
