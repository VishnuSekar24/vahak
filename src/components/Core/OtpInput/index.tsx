import { Field } from 'formik';
import React from 'react'

// interface OtpInterface {
//     noOfInputs:number
// }
  

const OtpInput:React.FC<any> = ({noOfInputs, formik}) => {
    const otpInputs = []
    for(let i=1;i<=noOfInputs;i++) {
          otpInputs.push(`otp${i}`);
    }
    console.log()
    // formik.setFieldValue("otp1", "23");
    return (
        <div className="otpWrapper">
            {otpInputs.map(otpInput=> (
              <Field type="number" name={otpInput}  className="otpInput" />
            ))}
        </div>
    )
    // return (
            
          
          
    //         <Field type="number" name="opt1" maxLength={1} autoFocus={true}  className="otpInput"/>
    //         <Field type="number" name="opt2"  className="otpInput" />
    //         <Field type="number" name="opt3"  className="otpInput" />
            
            
     
    // )
}

export default OtpInput;
