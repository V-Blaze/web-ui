import React, { useState } from 'react'
import FormContainer from './components/FormContainer'
import Navbar from './components/Navbar';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GiGreenhouse } from "react-icons/gi";
import { TbCurrencyRupee, TbListDetails } from "react-icons/tb";
import { HiOutlineUserGroup, HiOutlineDocumentText } from "react-icons/hi";
import {IoCallOutline} from "react-icons/io5";

import './App.css';


const App = () => {
  const [step, setstep] = useState(1);
  const [currentForm, setCurrentForm] = useState('Payment Details');
  const [formInformations, setFormInformations] = useState({
    contractDetails: '',
    landlordDetails: '',
    paymentMode: '',
    paymentAmount: '',
    tenantDetails: '',
    propertyDetails: {
      floorNumber: '',
      BHK: '',
      typeOfProperty: '',
      officeNumber: 0,
      buildingName: '',
      noOfBathrooms: 0,
      pincode: '',
      locality: '',
      district: '',
      state: '',
    }
  });
  const forms = {
    1: 'Generate Estimate', 2: 'Property Details', 3: 'Landlord Details', 4: 'Tenant Details', 5: 'Contract Details', 6: 'Payment Details', 7: 'Summary'
  }

  const handleNext = () => {
    if (step < 7) {
      setstep(((prev) => prev + 1));
      setCurrentForm(forms[step + 1]);
      console.log(formInformations);
    }
  }

  const handlePrev = () => {
    if (step > 1) {
      setstep(((prev) => prev - 1));
      setCurrentForm(forms[step -1])
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  }


  return (
    <div className="flex flex-col lg:px-[10%]">
      <div className="flex items-center justify-center mb-4 ">
        <Navbar />
      </div>
      <div className=" bg-[#f7f8fa] px-[3%] lg:px-[6%]  pt-[5%]">
        <div className="bg-white rounded-t-xl p-6 flex flex-col">
          <div className=" flex justify-center items-center">
              <div className=" border-b grid grid-cols-1 lg:grid-cols-3">
                  <button type='button' onClick={() => handlePrev()} className="flex lg:self-start gap-1 lg:mr-[3%] items-center">
                    <AiOutlineArrowLeft />
                    <span className=" underline">Go back</span>
                  </button>
                  <div className="col-span-2">
                      <span className=" font-semibold">Step {step}/7</span>
                      <h3 className="font-bold text-2xl">{currentForm}</h3>
                      <span>Please fill in the following details below... there'll be some other details here later on.</span>
                  </div>
              </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="hidden lg:flex lg:mt-4 self-start">
                  <ul className=" flex flex-row lg:flex-col justify-center gap-4 lg:w-60">
                      
                      <li className="list-item"><span>Generate Estimate</span>
                      <span className={step >= 1 ? 'icon-span' : 'icon-span-active'}>
                        <TbCurrencyRupee className={step >= 1 ? 'text-white' : 'text-black'}  />
                        </span>
                        <span className={step >= 1 ? "progress-span bg-black" : 'progress-span'}></span></li>
                      
                      <li className="list-item"><span>Property Details</span>
                      <span  className={step >= 2 ? 'icon-span' : 'icon-span-active'}>
                        <GiGreenhouse className={step >= 2 && 'text-white'}  />
                        </span>
                        <span className={step >= 2 ? "progress-span bg-black" : 'progress-span'}></span></li>
                      
                      <li className="list-item"><span>Landlord Details</span>
                      <span className={step >= 3 ? 'icon-span' : 'icon-span-active'}>
                        <TbListDetails className={step >= 3 && 'text-white'}  />
                        </span>
                        <span className={step >= 3 ? "progress-span bg-black" : 'progress-span'}></span></li>
                      
                      <li className="list-item"><span>Tenant Details </span>
                      <span className={step >= 4 ? 'icon-span' : 'icon-span-active'}>
                        <HiOutlineUserGroup className={step >= 4 && 'text-white'}  />
                        </span>
                        <span className={step >= 4 ? "progress-span bg-black" : 'progress-span'}></span></li>
                      
                      <li className="list-item"><span>Contract Details</span>
                      <span className={step >= 5 ? 'icon-span' : 'icon-span-active'}>
                        <IoCallOutline className={step >= 5 && 'text-white'}  />
                        </span>
                        <span className={step >= 5 ? "progress-span bg-black" : 'progress-span'}></span></li>
                      
                      <li className="list-item"><span>Payment Details</span>
                      <span className={step >= 6 ? 'icon-span' : 'icon-span-active'}>
                        <TbCurrencyRupee className={step >= 6 && 'text-white'}  />
                        </span >
                        <span className={step >= 6 ? "progress-span bg-black" : 'progress-span'}></span></li>
                      
                      <li className="list-item"><span>Summary</span>
                      <span className={step >= 7 ? 'icon-span' : 'icon-span-active'}>
                        <HiOutlineDocumentText className={step >= 7 && 'text-white'}  />
                        </span>
                        <span className={step >= 7 ? "progress-span bg-black" : 'progress-span'}></span></li>
                  </ul>
              </div>
              <div className="col-span-2">
                <FormContainer
                  step={step}
                  setFormInformations={setFormInformations}
                  formInformations={formInformations}
                  handleSubmit={handleSubmit}
                />
              </div>
          </div>
          <div className=" self-end w-[70%]">
            <div className="flex justify-between items-center">
              <span className=" font-bold">Total: ₹470 </span>
              <button type='submit'  form={step}
                className=" self-end w-fit bg-black text-white h-12 px-3 rounded-lg mt-4"
                >Save and Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App