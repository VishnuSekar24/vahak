import { Form, Formik, FormikProps } from 'formik';
import React, { useState } from 'react'
import Button from '../../components/Core/Button';
import Heading from '../../components/Heading';
import Navbar from '../../components/Navbar';
import JourneyDetails from './JourneyDetails';
import * as Yup from "yup";
import BidDetails from './BidDetails';
import Details from './details';


interface formValues {
    sourceLocation: string,
    destination: string,
    carType:string,
    noOfPerson:number,
    rateNegotiable:boolean,
    // price: any,
    }
    const journeyDetailsSchema = Yup.object().shape({
        sourceLocation: Yup.string()
        .required(`Source Location is Required`),
        destination: Yup.string()
        .required('Destination is Required'),
        carType: Yup.string().required("Car Type is Required"),
    });
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const bidDetailsSchema = Yup.object().shape({
        name: Yup.string()
        .required(`Name Location is Required`),
        phoneNumber: Yup.string().matches(phoneRegExp,"not")
        // destination: Yup.string()
        // .required('Destination is Required'),
        // carType: Yup.string().required("Car Type is Required"),
    });

    // const validationSchema = [journeyDetailsSchema, bidDetailsSchema]





const Home: React.FC= () => {
    const initialValues : formValues =  { sourceLocation: "", destination: "", carType:"", noOfPerson: 0, rateNegotiable:false};
    const [journeyDetails, setJourneyDetails] = useState<formValues>(initialValues);
    const [isEdit, setEditable] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [validationSchema, setSchema] =useState<any>(journeyDetailsSchema);
    const [showBidForm, setBidForm] = useState(false);
    const [buttonDisable, setButtonDisable] = useState(false);
    const handleEditDetail = () => {
        setEditable(!isEdit)
        setCurrentStep(1)
        setShowDetails(!showDetails)
        setCurrentButtonLabel("Enter Bid Details");
        setButtonDisable(false);
        setSchema(journeyDetailsSchema);
    }
     const [currentStep, setCurrentStep] =useState<number>(1);
     const [currentButtonLabel, setCurrentButtonLabel] =useState<string>("Enter Bid Details");

    //  const 

     
     const totalStep = 4;

     const renderForm = (formik: FormikProps<formValues>) => {
        switch(currentStep) {
            case 1: return <JourneyDetails formik={formik} isEdit={isEdit} handleEditDetail={()=>handleEditDetail()} journeyDetails={journeyDetails} />
            case 2 : return <BidDetails formik={formik} enableNextButton={(priceLength:number)=> setButtonDisable(!showBidForm &&priceLength > 0 ?false: true)} showBidForm={showBidForm}  />
        }
     }


    return (
        <div>
            <Navbar brandName="Vahak"/>
            <Heading title={`Place your Bid`} subTitle={`(${currentStep}/${totalStep} step)`} />
            <div className="formWrapper">
             <div className="formContainer">

             {showDetails && <Details formData={journeyDetails} handleEditDetail={()=>handleEditDetail()}/>}

             <Formik initialValues={journeyDetails} 
            validationSchema={validationSchema}
            onChange={(values: formValues)=>console.log("values-->", values)}
                onSubmit={(
                    values: formValues,
                  ) => {
                      console.log("values-->", values)

                    if(currentStep === 1) {
                        setJourneyDetails(values);
                        setEditable(!isEdit) 
                        setCurrentStep(currentStep+1);
                        setShowDetails(true)
                        setCurrentButtonLabel("Next");
                        setButtonDisable(true);
                    
                    }

                    if( currentStep === 2) {
                        setBidForm(true)
                        setCurrentButtonLabel("Verify via OTP");
                        setButtonDisable(true);
                        setSchema(bidDetailsSchema);
                    }
                      
                     
                                        
                  }}
            >
             {formik => (                   
            <Form>
                {renderForm(formik)}
            <Button name={currentButtonLabel} disabled={buttonDisable}/>
            </Form>
            )}
            </Formik>

            
            </div>
            </div>
            
        </div>
    )
}

export default Home;
