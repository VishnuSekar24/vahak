import React from 'react'

// interface OtpInterface {
//     noOfInputs:number
// }
  

const OtpInput:React.FC<any> = ({noOfInputs,handleOtpChange, formik}) => {
    const otpInputs = []
    for(let i=1;i<=noOfInputs;i++) {
          otpInputs.push(`otp${i}`);
    }
    // const arr = ["1","2","3","4"]
    // console.log(Number(arr.join("")))

    let test: {name: string, otp: string}[] = [];
    const handleChange = (name:string ,e: string) => {
        if(e){
            const i = test.findIndex(_item => _item.name === name);
            if (i > -1) test[i] = {name, otp: e};
            else test.push({name, otp: e});
        }

        const otpString = test.map(data => {
            return data.otp
        })
        handleOtpChange(Number(otpString.join("")));
        console.log(Number(otpString.join("")), "sample")
    }
    // formik.setFieldValue("otp1", "23");
    return (
        <div className="otpWrapper">
            {otpInputs.map(otpInput=> (
              <input type="text" name={otpInput} maxLength={1} max={1} className="otpInput" onChange={e =>handleChange(otpInput, e.target.value)} />
            ))}
        </div>
    )
    // return (
            
          
          
    //         <Field type="number" name="opt1" maxLength={1} autoFocus={true}  className="otpInput"/>
    //         <Field type="number" name="opt2"  className="otpInput" />
    //         <Field type="number" name="opt3"  className="otpInput" />
            
            
     
    // )
}

export default OtpInput;