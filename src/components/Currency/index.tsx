import React, { useState } from "react"


const Currency:React.FC<any> = ({handleChange, max}) => {
    const [width,SetWidth] =useState<number>(28);
    const [active,setActive] = useState<boolean>(false);


    
    const onInputChange = (e:any) => {        
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
        ₹<input pattern="[0-9]" className={`currency ${active ? "active" : ""}`} type="number" placeholder="0" style={{width:width}}  onChange={(e)=> {
            handleChange(e); onInputChange(e)}} maxLength={3}/>
        </div>
        </>

    )
}

export default Currency