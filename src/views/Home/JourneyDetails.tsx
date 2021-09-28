import React, { useState } from 'react'
import InputTextField from '../../components/Core/InputTextField';
import { Formik, Form, FormikProps, FormikValues } from 'formik';
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

const JourneyDetails:React.FC<any> = ({formik, isEdit, handleEditDetail, journeyDetails}) => {
    const initialValues : journeyDetailsInterface =  { sourceLocation: "", destination: "", carType:"", noOfPerson: 0};
    // const [journeyDetails, setJourneyDetails] = useState<journeyDetailsInterface>(initialValues);
    // const [isEdit, setEditable] = useState(true)
    const  handleChange = () => {

    }

   

    return (
        
        // <div className="formContainer">
        <>
        { 
            <>
                    <InputTextField label="Source Location" name="sourceLocation" errorMessage={formik.errors.sourceLocation && formik.touched.sourceLocation ? formik.errors.sourceLocation : ""} />

                    <InputTextField label="Destination" name="destination" errorMessage={formik.errors.destination && formik.touched.destination ? formik.errors.destination : ""} />
                <InputTextField label="Enter Car Type" name="carType" errorMessage={formik.errors.carType && formik.touched.carType ? formik.errors.carType : ""} /><InputTextField label="Number of Travellers" name="noOfPerson" errorMessage={formik.errors.carType && formik.touched.carType ? formik.errors.carType : ""} /></>
            
         } 
           
            
            
            </>
            // </div>
    )
}

export default JourneyDetails;
