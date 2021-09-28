import React from 'react'
import InputField from '../../components/Core/InputField';
// import Select from 'react-select'





 

const JourneyForm:React.FC<any> = ({formik, isEdit, handleEditDetail, journeyDetails}) => {
    

    return (
        
        <>
        { 
            <>
                    <InputField label="Source Location" name="sourceLocation" errorMessage={formik.errors.sourceLocation} />

                    <InputField label="Destination" name="destination" errorMessage={formik.errors.destination} />
                    <InputField label="Enter Car Type" name="carType" errorMessage={formik.errors.carType} />
                    <InputField label="Number of Travellers" name="noOfPerson" errorMessage={formik.errors.carType} />
                    {/* <Select options={["cars", "sd"]}/> */}
                    </>
            
         } 
           
            
            
            </>
    )
}

export default JourneyForm;
