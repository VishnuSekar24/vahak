import React from 'react'
import DetailSection from '../../../components/DetailSection'

const Details:React.FC<any> = ({formData, handleEditDetail, currentStep, showBidForm}) => {
    console.log(formData);
    return (
        <>
       {formData && <div>
            {currentStep>=2 && 
            <DetailSection title="JOURNEY DETAILS" isEdit={true} handleEdit={()=>{
               handleEditDetail()}}>
                   <div>
               <p>{`${formData.sourceLocation} - ${formData.destination}`}</p>
               <p>{`${formData.noOfPerson > 1 ? `${formData.noOfPerson}Persons` : "1 Person"},  ${formData.carType}`}</p>
               </div>
           </DetailSection>}

           {currentStep===3  && formData.phoneNumber && <DetailSection title="BID DETAILS" isEdit={false} handleEdit={()=>{
               handleEditDetail()}}>
               <div><p>{formData.phoneNumber}</p>
               <p>{formData.name}</p>
               <p>{formData.remarks}</p>
               </div>
               <div className="priceSection">
                   <p>{formData.price}</p>
                   <span>{formData.rateNegotiable ? "Rate Negotiable" : "Fixed Price"}</span>
               </div>
           </DetailSection>}
        </div>}
        </>
    )
}

export default Details
