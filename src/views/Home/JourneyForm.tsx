import React from 'react'
import InputField from '../../components/Core/InputField';
import InputSelectField from '../../components/Core/inputSelectField';
// import Select from 'react-select'





 

const JourneyForm:React.FC<any> = ({formik, isEdit, handleEditDetail, journeyDetails}) => {
    
     const { values } = formik;
    return (
        
        <>
        { 
            <>
                    <InputField label="Source Location" name="sourceLocation" value={values.sourceLocation}  errorMessage={formik.errors.sourceLocation}  onChange={e=>formik.handleChange("sourceLocation")(e)}/>

                    <InputField label="Destination" name="destination" value={values.destination} errorMessage={formik.errors.destination} onChange={e=>formik.handleChange("destination")(e)}/>
                    <InputField label="Enter Car Type" name="carType" value={values.carType} errorMessage={formik.errors.carType} onChange={e=>formik.handleChange("carType")(e)}/>
                    <InputSelectField name={'443'} options={["xuv", "ford"]} />
                    <InputField label="Number of Travellers" name="noOfPerson"  value={values.noOfPerson} errorMessage={formik.errors.noOfPerson} onChange={e=>formik.handleChange("noOfPerson")(e)}/>
                    {/* <Select options={["cars", "sd"]}/> */}
                    </>
            
         } 
           
            
            
            </>
    )
}

export default JourneyForm;
