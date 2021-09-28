import React from 'react'
import InputCheckBox from '../../components/Core/inputCheckBox';
import InputTextField from '../../components/Core/InputTextField';
import Currency from '../../components/Currency';
import PhoneNumber from '../../components/PhoneNumber';



const BidDetails:React.FC<any> = ({formik, enableNextButton, showBidForm}) => {

    return (
        <>
            <div className="bidSection">
                <Currency name="price" handleChange={(e: any) =>  enableNextButton(e.target.value.length)} max={10} />
                <InputCheckBox name="rateNegotiable" label="Rate Negotiable" />
                
            </div>

            {showBidForm && 
            <>
            <PhoneNumber name={'phoneNumber'} label={'Enter your Number'} errorMessage={formik.errors && formik.touched.phoneNumber && formik.errors.phoneNumber} />
            <InputTextField name={'name'} label={'Enter your Name'} errorMessage={formik.errors && formik.touched.name && formik.errors.name} />
            
            <InputTextField name={'remarks'} label={'Enter Remarks (optional)'} errorMessage={''} />
            </>
            }
              </>
            
                
        
    )
}

export default BidDetails;
