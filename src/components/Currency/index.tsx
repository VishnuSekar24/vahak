import { Field } from "formik";
import React, { useState } from "react"

const Currency:React.FC<any> = ({handleChange, max, name}) => {
    const [width,SetWidth] =useState<number>(28);
    const [active,setActive] = useState<boolean>(false);


    
    const onInputChange = (e:any) => {    
        console.log(e.target.value);    
        if(e.target.value && e.target.value.length) {
            SetWidth(e.target.value.length * 28)
            setActive(true)
        }
        else {
            SetWidth(28);
            setActive(false)
        }
        
    }
    const maxLength:number =4;
    return (
        <>
        <div className="currencyWrapper">
        ₹<input name={name} min="0" pattern="[0-9]" maxLength={maxLength} className={`currency ${active ? "active" : ""}`} type="number" placeholder="0" style={{width:width}}  onChange={(e:any)=> {
            handleChange(e);
             onInputChange(e)
             }} />
        </div>
        </>

    )
}

export default Currency