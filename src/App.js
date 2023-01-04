import React, { useState } from 'react'
import FormContainer from './components/FormContainer'
import Navbar from './components/Navbar'

const App = () => {
  const [step, setstep] = useState(1);
  const [currentForm, setCurrentForm] = useState('Generate Estimate');
  const [formInformations, setFormInformations] = useState({
    contractDetails: '',
    landlordDetails: '',
    paymentMode: '',
    paymentAmount: '',
    propertyDetails: '',
    tenantDetails: '',
  });

  const handleNext = () => {
    if (step < 7) {
      setstep(((prev) => prev + 1));
      // console.log(formInformations);
    }
  }

  const handlePrev = () => {
    if (step > 1) {
      setstep(((prev) => prev - 1));
    }
  }
  
  const handleCurrentForm = (form) => {
    setCurrentForm(form);
  }


  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <div>
              <div>
                  <button type='button' onClick={() => handlePrev()}>Go back</button>
                  <div>
                      <span>Step {step}/7</span>
                      <h3>{currentForm}</h3>
                      <span>Please fill in the following details below... there'll be some other details here later on.</span>
                  </div>
              </div>
          </div>
          <div>
              <div>
                  <ul>
                      <li>Generate Estimate</li>
                      <li>Property Details</li>
                      <li>Landlord Details</li>
                      <li>Tenant Details</li>
                      <li>Contract Details</li>
                      <li>Payment Details</li>
                      <li>Summary</li>
                  </ul>
              </div>
              <div>
                <FormContainer
                  step={step}
                  setFormInformations={setFormInformations}
                  formInformations={formInformations}
                  handleCurrentForm={handleCurrentForm}
                />
              </div>
          </div>
          <button type='button' onClick={() => handleNext()}>Save and Continue</button>
        </div>
      </div>
    </div>
  )
}

export default App