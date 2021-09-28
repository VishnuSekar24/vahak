import React from 'react'
import DetailSection from '../../../components/DetailSection'

const Details:React.FC<any> = ({formData, handleEditDetail}) => {
    console.log(formData);
    return (
        <>
       {formData && <div>
            <DetailSection title="JOURNEY DETAILS" handleEdit={()=>{
               console.log("fsfsdsd")
               handleEditDetail()}}>
               <p>{`${formData.sourceLocation} - ${formData.destination}`}</p>
               <p>{`${formData.noOfPerson > 1 ? `${formData.noOfPerson}Persons` : "1 Person"},  ${formData.carType}`}</p>
           </DetailSection>
        </div>}
        </>
    )
}

export default Details
