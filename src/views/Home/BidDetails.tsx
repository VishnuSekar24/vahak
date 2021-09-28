import React from 'react'
import InputCheckBox from '../../components/Core/inputCheckBox';
import InputField from '../../components/Core/InputField';
import Currency from '../../components/Currency';
import PhoneNumber from '../../components/PhoneNumber';



const BidDetails:React.FC<any> = ({formik, enableNextButton, showBidForm, enableOTPButton}) => {


     if(formik && formik.values) {
         if(showBidForm) {
            formik.values.phoneNumber && formik.values.phoneNumber.length === 10 ? enableOTPButton(true) :enableOTPButton(false)
         }
     }
     

    return (
        <>
            <div className="bidSection">
                <Currency name="price" handleChange={(e: any) =>  enableNextButton(e.target.value.length)} max={10} />
                <InputCheckBox name="rateNegotiable" label="Rate Negotiable" />
                
            </div>

            {showBidForm && 
            <>
            <PhoneNumber name={'phoneNumber'} label={'Enter your Number'} errorMessage={formik.errors.phoneNumber} />
            <InputField name={'name'} label={'Enter your Name'} errorMessage={formik.errors.name}  onChange={e=>formik.handleChange("name")(e)}/>
            
            <InputField name={'remarks'} label={'Enter Remarks (optional)'} errorMessage={''} />
            </>
            }
              </>
            
                
        
    )
}

export default BidDetails;
