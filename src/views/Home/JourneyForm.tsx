import React, { useState } from 'react'
import Select from "react-select"
import InputField from '../../components/Core/InputField';




 

const JourneyForm:React.FC<any> = ({formik, isEdit, handleEditDetail, journeyDetails}) => {
    
     const { values } = formik;
     const carTypes = [
        { value: 'hatchback', label: 'Hatchback' },
        { value: 'sedan', label: 'Sedan' },
        { value: 'suv', label: 'SUV' }
      ];
      const [carErrorMessage, setErrorMessage] = useState("");
      
    return (
        
        <>
        { 
            <>
                    <InputField label="Source Location" name="sourceLocation" value={values.sourceLocation}  errorMessage={formik.errors.sourceLocation}  onChange={e=>formik.handleChange("sourceLocation")(e)}/>

                    <InputField label="Destination" 
                      name="destination" value={values.destination} errorMessage={formik.errors.destination} onChange={e=>formik.handleChange("destination")(e)}/>
                    <div className="textFieldContainer">
                    <Select  
                    className="inputSelect1"
                     placeholder="Enter Car Type"
                     name="carType" options={carTypes}
                     components={{
                        IndicatorSeparator: () => null,
                      }}
                     onChange={e=>formik.handleChange("carType")(e?.value)}
                    />
                    <span className={`errorMessage ${formik.errors.carType ? "error" : ""}`} >{formik.errors.carType || ""}</span>
                    </div>
                    <InputField 
                        label="Number of Travellers" 
                        name="noOfPerson"  
                        value={values.noOfPerson} 
                        maxLength={1} 
                        errorMessage={formik.errors.noOfPerson || carErrorMessage} 
                        onChange={e=>{
                        formik.handleChange("noOfPerson")(e.target.value)   
                        if(formik.values.carType === "suv" && Number(e.target.value) > 5) {
                            setErrorMessage("No of Persons exceeds limit")
                            formik.setErrors({ noOfPerson: "not valid"})
                        }
                        else if (Number(e.target.value)>4) {
                            setErrorMessage("No of Persons exceeds limit")
                            formik.setErrors({ noOfPerson: "not valid"})
                        }
                        
                    }
                        }/>
                    </>
            
         } 
           
            
            
            </>
    )
}

export default JourneyForm;
