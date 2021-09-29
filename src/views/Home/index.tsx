import { Form, Formik, FormikProps } from 'formik';
import React, { useState } from 'react'
import Button from '../../components/Core/Button';
import Heading from '../../components/Heading';
import Navbar from '../../components/Navbar';
import JourneyForm from './JourneyForm';
import * as Yup from "yup";
import BidDetails from './BidDetails';
import Details from './details';
import OtpForm from './OtpForm';


interface formValues {
    sourceLocation?: string,
    destination?: string,
    carType?: string,
    noOfPerson?: string,
    rateNegotiable?: boolean,
    price?: number,
    phoneNumber?: any
    remarks?: string,
    otp?:string,
    car?:string
}
const journeyDetailsSchema = Yup.object().shape({
    sourceLocation: Yup.string()
        .required(`Source Location is Required`),
    destination: Yup.string()
        .required('Destination is Required'),
    carType: Yup.string().required("Car Type is Required"),
    noOfPerson: Yup.string().required("No of Person is Required"),
});
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const bidDetailsSchema = Yup.object().shape({
    name: Yup.string()
        .required(`Name Location is Required`),
    phoneNumber: Yup.string().matches(phoneRegExp, "Phone Number is not valid").max(10, "too long").min(10, "too short")

});





const Home: React.FC = () => {
    const initialValues: any = { sourceLocation: "", destination: "", carType: "", noOfPerson: 0, rateNegotiable: false, phoneNumber: "", remarks: "" , otp:""};
    const [formData, setJourneyDetails] = useState<formValues>(initialValues);
    const [isEdit, setEditable] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [validationSchema, setSchema] = useState<any>(journeyDetailsSchema);
    const [showBidForm, setBidForm] = useState(false);
    const [buttonDisable, setButtonDisable] = useState(false);
    const otpValue = 1234;
    const handleEditDetail = () => {
        setEditable(!isEdit)
        setCurrentStep(1)
        setShowDetails(!showDetails)
        setCurrentButtonLabel("Enter Bid Details");
        setButtonDisable(false);
        setSchema(journeyDetailsSchema);
    }
    let [currentStep, setCurrentStep] = useState<number>(1);
    const [currentButtonLabel, setCurrentButtonLabel] = useState<string>("Enter Bid Details");

    const totalStep = 4;

    const renderForm = (formik: FormikProps<formValues>) => {
        switch (currentStep) {
            case 1: return <JourneyForm formik={formik} isEdit={isEdit} handleEditDetail={() => handleEditDetail()} journeyDetails={formData} />
            case 2: return <BidDetails formik={formik} enableNextButton={(priceLength: number) => setButtonDisable(!showBidForm && Number(priceLength) > 0 ? false : true)} showBidForm={showBidForm} enableOTPButton={(value: boolean) => {
                setButtonDisable(!value)
            }} />
            case 3: return <OtpForm formik={formik} />
        }


    }

    const validateOtp = (values:any, formik?:any) => {
        const otpArr = otpValue.toString().split("")
        let flag = false;

        for(let i=0;i<otpArr.length;i++) {  
            if(String(values[`otp${i+1}`]) == otpArr[i]) {
                flag=true
            } else {
                flag=false
            }
        }

        if(flag === true) {
            setCurrentStep(currentStep+1)
            setCurrentButtonLabel("Submit Bid")
        }
    

       
       
        
    }


    return (
        <div>
            <Navbar brandName="Vahak" />
            <Heading title={`Place your Bid`} subTitle={`(${currentStep}/${totalStep} step)`} />
            <div className="formWrapper">
                <div className="formContainer">

                    <Details currentStep={currentStep} showBidForm={showBidForm} formData={formData} handleEditDetail={() => handleEditDetail()} />

                    <Formik
                        initialValues={{sourceLocation:"", otp:""}}
                        validationSchema={validationSchema}
                        onSubmit={(
                            values: formValues,
                        ) => {
                            setJourneyDetails(values);
                            if (currentStep === 1) {

                                setEditable(!isEdit)
                                setCurrentStep(currentStep + 1);
                                values.price && setBidForm(true);
                                setCurrentButtonLabel(`${!values.price ? "Next" : "Verify via OTP"}`);
                                setButtonDisable(true);
                                

                            }

                            if (currentStep === 2) {
                                setBidForm(true)

                                setCurrentButtonLabel("Verify via OTP");
                                setButtonDisable(true);
                                setSchema(bidDetailsSchema);
                            }

                            if (currentStep === 2 && showBidForm) {
                                setBidForm(false)
                                setCurrentStep(currentStep + 1)
                            }

                            if(currentStep ===3 ) {
                                validateOtp(values)
                            }



                        }}
                    >
                        {formik => (
                            <Form>
                                {renderForm(formik)}
                                
                                <Button name={currentButtonLabel} disabled={buttonDisable} />
                            </Form>
                        )}
                    </Formik>


                </div>
            </div>

        </div>
    )
}

export default Home;
