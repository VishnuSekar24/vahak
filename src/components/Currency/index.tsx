import React, { useState } from "react"

// interface CurrencyInterface {
//     name?: string,
//     onChange?: (e: any) => void,
//     // handleChange?: (e: any) => void,
//     maxLength?: number
// }

const Currency: React.FC<any> = ({ handleChange, onChange, maxLength, value, name }) => {
    const [width, SetWidth] = useState<number>(28);
    const [active, setActive] = useState<boolean>(value ?true : false);



    const onInputChange = (e: any) => {
        if (e.target.value && e.target.value.length) {
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
                ₹<input 
                    name={name}
                    value={value}
                    maxLength={maxLength}
                    className={`currency ${active ? "active" : ""}`}
                    type="text"
                    placeholder={"0"}
                    style={{ width: width }}
                    onChange={e => {
                        handleChange(e)
                        onInputChange(e)
                    }} />
            </div>
        </>

    )
}

export default Currency