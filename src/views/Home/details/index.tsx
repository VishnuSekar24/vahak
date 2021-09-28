import React from 'react'
import DetailSection from '../../../components/DetailSection'

const Details:React.FC<any> = ({formData, handleEditDetail, currentStep, showBidForm}) => {
    console.log(formData);
    return (
        <>
       {formData && <div>
            <DetailSection title="JOURNEY DETAILS" isEdit={true} handleEdit={()=>{
               handleEditDetail()}}>
               <p>{`${formData.sourceLocation} - ${formData.destination}`}</p>
               <p>{`${formData.noOfPerson > 1 ? `${formData.noOfPerson}Persons` : "1 Person"},  ${formData.carType}`}</p>
           </DetailSection>

           {currentStep===3  && formData.phoneNumber && <DetailSection title="BID DETAILS" isEdit={false} handleEdit={()=>{
               handleEditDetail()}}>
               <p>{formData.phoneNumber}</p>
               <p>{formData.name}</p>
               <p>{formData.remarks}</p>
           </DetailSection>}
        </div>}
        </>
    )
}

export default Details
