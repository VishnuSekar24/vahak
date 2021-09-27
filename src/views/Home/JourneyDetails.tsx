import React, { useState } from 'react'
import InputTextField from '../../components/Core/InputTextField';
import { Formik, Form } from 'formik';
import Button from '../../components/Core/Button';
import * as Yup from "yup";
import DetailSection from '../../components/DetailSection';

interface journeyDetailsInterface {
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

const JourneyDetails:React.FC = () => {
    const initialValues : journeyDetailsInterface =  { sourceLocation: "", destination: "", carType:"", noOfPerson: 0};
    const [journeyDetails, setJourneyDetails] = useState<journeyDetailsInterface>(initialValues);
    const [isEdit, setEditable] = useState(true)
    const  handleChange = () => {

    }

    const handleEditDetail = () => {
        setEditable(true)
    }

    return (
        
        <div className="formContainer">
        {isEdit ? <Formik initialValues={journeyDetails} 
            validationSchema={journeyDetailsSchema}
                onSubmit={(
                    values: journeyDetailsInterface,
                  ) => {
                      setJourneyDetails(values);
                      setEditable(!isEdit)                   
                  }}
            >
           {({ errors, touched }) => (
                    
            <Form>
            <div className="formGroup">  
            <InputTextField label="Source Location" name="sourceLocation" handleChange={()=> handleChange()} errorMessage={errors.sourceLocation && touched.sourceLocation ? errors.sourceLocation: ""} required={true}/>
            
            <InputTextField label="Destination" name="destination" handleChange={()=> handleChange()} errorMessage={errors.destination && touched.destination ? errors.destination : ""} required={true}/>
            </div>  
            <InputTextField label="Enter Car Type" name="carType" handleChange={()=> handleChange()} errorMessage={errors.carType && touched.carType ? errors.carType : ""} required={true}/>
            {/* <InputSelectField name={''}  options={["Hatchback", "Sedan", "SUV" ]} /> */}

            <InputTextField label="Number of Travellers" name="noOfPerson" handleChange={()=> handleChange()} errorMessage={errors.carType && touched.carType ? errors.carType : ""} required={false}/>
            <Button name="Enter Bid Details" disabled={false}/>
            </Form>
            )}
            </Formik>
            :
           <DetailSection title="JOURNEY DETAILS" handleEdit={()=>handleEditDetail()}>
               <p>{`${journeyDetails.sourceLocation} - ${journeyDetails.destination}`}</p>
               <p>{`${journeyDetails.noOfPerson > 1 ? `${journeyDetails.noOfPerson}Persons` : "1 Person"},  ${journeyDetails.carType}`}</p>
           </DetailSection>
            
            }
            </div>
    )
}

export default JourneyDetails;
