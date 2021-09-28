import React from 'react'
import OtpInput from '../../components/Core/OtpInput';

const OtpForm:React.FC<any> = ({formik}) => {
    return (
        <div>
            We have sent an OTP your mobile number,Please enter it below to submit your bid 
            <OtpInput noOfInputs={4}  formik={formik}/>
        </div>
    )
}

export default OtpForm;
