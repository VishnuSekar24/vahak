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
    }
    const journeyDetailsSchema = Yup.object().shape({
        sourceLocation: Yup.string()
        .required(`Source Location is Required`),
        destination: Yup.string()
        .required('Destination is Required'),
        carType: Yup.string().required("Car Type is Required"),
    });

const Home: React.FC= () => {
    const initialValues : formValues =  { sourceLocation: "", destination: "", carType:"", noOfPerson: 0};
    const [journeyDetails, setJourneyDetails] = useState<formValues>(initialValues);
    const [isEdit, setEditable] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [buttonDisable, setButtonDisable] = useState(false);
    const handleEditDetail = () => {
        setEditable(!isEdit)
        setCurrentStep(1)
        setShowDetails(!showDetails)
        setCurrentButtonLabel("Enter Bid Details");
        setButtonDisable(false);
    }
     const [currentStep, setCurrentStep] =useState<number>(1);
     const [currentButtonLabel, setCurrentButtonLabel] =useState<string>("Enter Bid Details");

    //  const 

     
     const totalStep = 4;

     const renderForm = (formik: FormikProps<formValues>) => {
        switch(currentStep) {
            case 1: return <JourneyDetails formik={formik} isEdit={isEdit} handleEditDetail={()=>handleEditDetail()} journeyDetails={journeyDetails} />
            case 2 : return <BidDetails enableNextButton={(priceLength:number)=> setButtonDisable(priceLength > 0 ?false: true)}  />
        }
     }


    return (
        <div>
            <Navbar brandName="Vahak"/>
            <Heading name={`Place your Bid(${currentStep}/${totalStep} step)`} />
            <div className="formWrapper">
             <div className="formContainer">

             {showDetails && <Details formData={journeyDetails} handleEditDetail={()=>handleEditDetail()}/>}



             <Formik initialValues={journeyDetails} 
            validationSchema={journeyDetailsSchema}
                onSubmit={(
                    values: formValues,
                  ) => {

                    if(currentStep === 1) {
                        setJourneyDetails(values);
                        setEditable(!isEdit) 
                        setCurrentStep(currentStep+1);
                        setShowDetails(true)
                        setCurrentButtonLabel("Next");
                        setButtonDisable(true);
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
