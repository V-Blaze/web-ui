import React from 'react'
import FormContainer from './components/FormContainer'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <div>
              <div>
                  <button type='button'>Go back</button>
                  <div>
                      <span>Step 6/7</span>
                      <h3>Payment Details</h3>
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
                <FormContainer />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App