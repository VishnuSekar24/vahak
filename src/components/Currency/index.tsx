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
    return (
        <>
        <div className="currencyWrapper">
        ₹<Field name={name}  className={`currency ${active ? "active" : ""}`} type="number" placeholder="0" style={{width:width}}  onChange={(e:any)=> {
            handleChange(e);
             onInputChange(e)
             }} />
        </div>
        </>

    )
}

export default Currency