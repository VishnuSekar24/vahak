import React from 'react'
// import useDimensions from '../../customHooks/useDimensions';

interface buttonProps {
    name: string,
    disabled:boolean
}


const Button :React.FC<buttonProps>= ({name, disabled}) => {
    return (
    <input 
      className={`submitBtn ${disabled ? "disabled" : ""}`} 
      type="submit" 
      disabled={disabled}  
      value={name} 
      style={{width:"90%"}} 
    />
    )
}

export default Button;