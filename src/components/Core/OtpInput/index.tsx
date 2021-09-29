import React from 'react'

const OtpInput:React.FC<any> = ({noOfInputs,handleOtpChange, formik}) => {
    const otpInputs = []
    for(let i=1;i<=noOfInputs;i++) {
          otpInputs.push(`otp${i}`);
    }
    const handleChange = (name:string ,e: string) => {
        formik.handleChange(name)(e)
    }
    return (
        <div className="otpWrapper">
            {otpInputs.map(otpInput=> (
              <input type="text"   id={otpInput} name={otpInput} maxLength={1} max={1} className="otpInput" onChange={e =>handleChange(otpInput, e.target.value)} />
            ))}
        </div>
    )
}

export default OtpInput;