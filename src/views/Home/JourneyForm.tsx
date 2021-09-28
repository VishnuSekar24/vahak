import React from 'react'
import InputField from '../../components/Core/InputField';
// import Select from 'react-select'





 

const JourneyForm:React.FC<any> = ({formik, isEdit, handleEditDetail, journeyDetails}) => {
    

    return (
        
        <>
        { 
            <>
                    <InputField label="Source Location" name="sourceLocation" errorMessage={formik.errors.sourceLocation}  onChange={e=>formik.handleChange("sourceLocation")(e)}/>

                    <InputField label="Destination" name="destination" errorMessage={formik.errors.destination} onChange={e=>formik.handleChange("destination")(e)}/>
                    <InputField label="Enter Car Type" name="carType" errorMessage={formik.errors.carType} onChange={e=>formik.handleChange("carType")(e)}/>
                    <InputField label="Number of Travellers" name="noOfPerson" errorMessage={formik.errors.carType} onChange={e=>formik.handleChange("carType")(e)}/>
                    {/* <Select options={["cars", "sd"]}/> */}
                    </>
            
         } 
           
            
            
            </>
    )
}

export default JourneyForm;
