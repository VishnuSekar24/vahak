import React from 'react'
import InputCheckBox from '../../components/Core/inputCheckBox';
import Currency from '../../components/Currency';



const BidDetails:React.FC<any> = ({formik, enableNextButton}) => {

    return (
        
            <div className="bidSection">
                <Currency handleChange={(e: any) =>  enableNextButton(e.target.value.length)} max={10} /><InputCheckBox name="rateNegotiable" label="Rate Negotiable" />
        
        </div>
              
            
                
        
    )
}

export default BidDetails;
