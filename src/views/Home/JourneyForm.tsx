import React from 'react'
import InputTextField from '../../components/Core/InputTextField';





 

const JourneyForm:React.FC<any> = ({formik, isEdit, handleEditDetail, journeyDetails}) => {
    

    return (
        
        <>
        { 
            <>
                    <InputTextField label="Source Location" name="sourceLocation" errorMessage={formik.errors.sourceLocation && formik.touched.sourceLocation ? formik.errors.sourceLocation : ""} />

                    <InputTextField label="Destination" name="destination" errorMessage={formik.errors.destination && formik.touched.destination ? formik.errors.destination : ""} />
                    <InputTextField label="Enter Car Type" name="carType" errorMessage={formik.errors.carType && formik.touched.carType ? formik.errors.carType : ""} />
                    <InputTextField label="Number of Travellers" name="noOfPerson" errorMessage={formik.errors.carType && formik.touched.carType ? formik.errors.carType : ""} /></>
            
         } 
           
            
            
            </>
    )
}

export default JourneyForm;
