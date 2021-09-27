import React, { useState } from 'react'
import Heading from '../../components/Heading';
import Navbar from '../../components/Navbar';
import JourneyDetails from './JourneyDetails';

// var currentStep:number;


const Home: React.FC= () => {
     const [currentStep, setCurrentStep] =useState<number>(1);
     const [currentBtnLabel, setCurrentBtnLabel] =useState<string>("Enter Bid Details");
    //  const cars = [ 
    //      {id: 1, name:"Hatchback"},
    //      {id: 2, name:"Sedan"},
    //      {id: 3, name:"SUV"}
    //  ]
    const cars = ["Hatchback", "Sedan", "SUV" ]

     
     const totalStep = 4;

    const handleButtonCLick = () => {

    }

    return (
        <div>
            <Navbar brandName="Vahak"/>
            <Heading name={`Place your Bid(${currentStep}/${totalStep} step)`} />
            <div className="formWrapper">
             <JourneyDetails />
            </div>
            
        </div>
    )
}

export default Home;
