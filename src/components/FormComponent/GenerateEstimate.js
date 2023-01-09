import React, {useState} from 'react';
import { TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';

const GenerateEstimate = ({setFormInformations, formInformations, handleSubmit}) => {
  const [pType, setPType] = useState('owner');

  const handlePartyType = (e, newParty) => {
    setPType(newParty);

    setFormInformations({
      ...formInformations,
      generalEstimate: {
        ...formInformations.generalEstimate,
        partyType: e.target.value
      }
    })
  };

  return (
<div className="mt-8 flex flex-col items-center lg:items-start">
      <div className=" my-2 w-full">
        <form id={1} onSubmit={ (e) => handleSubmit(e)} className="flex flex-col gap-4 w-full  px-10 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
            <div className="flex flex-col gap-2">
              <span>Select Stamp Paper Amount <span className=" text-red-500">*</span></span>
              <TextField
                  required
                  id="outlined-required"
                  label="₹ 20 Stamp"
                  value={formInformations.generalEstimate.stampPaperAmount}
                  onChange={(e) => setFormInformations({
                    ...formInformations,
                    generalEstimate: {
                      ...formInformations.generalEstimate,
                      stampPaperAmount: e.target.value
                    }
                  })}
                />
            </div>
            <div className="flex flex-col gap-2">
              <span><span className=" text-red-500">*</span></span>
              <TextField
                  required
                  id="outlined-required"
                  // label="Required"
                  value={formInformations.generalEstimate.stampPaperAmount}
                  onChange={(e) => setFormInformations({
                    ...formInformations,
                    generalEstimate: {
                      ...formInformations.generalEstimate,
                      stampPaperAmount: e.target.value
                    }
                  })}
                />
            </div>
            <div className="flex flex-col gap-2">
              <span>Agreement Start Date <span className=" text-red-500">*</span></span>
                <input type="date" id="start" name="trip-start" required
                  value={formInformations.generalEstimate.agreementStartDate}
                  min="2018-01-01" max="2027-12-31"
                  className="border h-[1.4em] p-6 rounded-md"
                  onChange={(e) => setFormInformations({
                    ...formInformations,
                    generalEstimate: {
                      ...formInformations.generalEstimate,
                      agreementStartDate: e.target.value
                    }
                  })}
                />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2 font-semibold">
              <span>I am:</span>
              <div className='flex gap-2 lg:gap-4'>
                <ToggleButtonGroup
                      required
                      value={pType}
                      exclusive
                      onChange={handlePartyType}
                      aria-label="floor Number"
                      className=" flex flex-wrap gap-2 lg:gap-4"
                    >
                      <ToggleButton required value={'tenant'} aria-label="Tenant" className={pType === 'tenant' ? 'floor-btn-active' : 'floor-btn'}>Tenant</ToggleButton>
                      <ToggleButton value={'owner'} aria-label="Owner" className={pType === 'owner' ? 'floor-btn-active' : 'floor-btn'}>Owner</ToggleButton>
                </ToggleButtonGroup>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-6">
              <span>Add on services</span>
              <div className="shadow-md grid grid-cols-1 md:grid-cols-3 gap-2 px-2 justify-between border-l-4 border-black rounded-lg">
                <div className=" col-span-2 flex flex-col gap-2">
                  <span className=" font-bold">Notorised Agreement</span>
                  <p>Get the signature on your agreement authenticated by a Notary Public</p>
                  <span className=" font-semibold">₹ 200</span>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type="button"
                    className="bg-black text-white px-6 rounded-md"
                    onClick={(e) => setFormInformations({
                      ...formInformations,
                      generalEstimate: {
                        ...formInformations.generalEstimate,
                        notorisedAgreement: !formInformations.generalEstimate.notorisedAgreement,
                      }
                    })}
                  >
                    {formInformations.generalEstimate.notorisedAgreement ? 'Remove' : 'Add'}
                  </button>
                </div>
              </div>
              <div className="shadow-md grid grid-cols-1 md:grid-cols-3 gap-2 px-2 justify-between border-l-4 border-black rounded-lg">
                <div className=" col-span-2 flex flex-col gap-2">
                  <span className=" font-bold">E-Sign Agreement</span>
                  <p>Get agreement e-signed if any party involved in the agreements stays in remote area</p>
                  <span className=" font-semibold">₹ 50</span>
                </div>
                <div className="flex justify-center items-center">
                  {formInformations.generalEstimate.E_signAgreement === 0 ? (
                    <button
                      type="button"
                      className="bg-black text-white px-6 rounded-md"
                      onClick={(e) => setFormInformations({
                        ...formInformations,
                        generalEstimate: {
                          ...formInformations.generalEstimate,
                          E_signAgreement: 1,
                        }
                      })}
                    >
                      Add
                    </button>
                  ) : (
                    <div className="flex w-fit gap-1 justify-center items-center border px-2 rounded-md">
                      <button
                        type="button"
                        id='dec'
                        onClick={(e) => setFormInformations({
                          ...formInformations,
                          generalEstimate: {
                            ...formInformations.generalEstimate,
                            E_signAgreement: formInformations.generalEstimate.E_signAgreement + 1
                          }
                        })}
                      >
                        +
                      </button>
                      <input 
                        type="text" 
                        // value={Esign}
                        value={formInformations.generalEstimate.E_signAgreement}
                        onChange={(e) => setFormInformations({
                          ...formInformations,
                          generalEstimate: {
                            ...formInformations.generalEstimate,
                            E_signAgreement: e.target.value
                          }
                        })}
                        className=" w-8 text-center font-semibold"
                      />
                      <button
                        type="button"
                        id='dec'
                        onClick={(e) => setFormInformations({
                          ...formInformations,
                          generalEstimate: {
                            ...formInformations.generalEstimate,
                            E_signAgreement: formInformations.generalEstimate.E_signAgreement - 1
                          }
                        })}
                      >
                        -
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="shadow-md grid grid-cols-1 md:grid-cols-3 gap-2 px-2 justify-between border-l-4 border-black rounded-lg">
                <div className=" col-span-2 flex flex-col gap-2">
                  <span className=" font-bold">DoorStep Delivery</span>
                  <p>Courier Charges or deliveries outside bengaluru</p>
                  <span className=" font-semibold">₹ 50</span>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type="button"
                    className="bg-black text-white px-6 rounded-md"
                    onClick={(e) => setFormInformations({
                      ...formInformations,
                      generalEstimate: {
                        ...formInformations.generalEstimate,
                        doorStepDelivery: !formInformations.generalEstimate.doorStepDelivery,
                      }
                    })}
                  >
                    {formInformations.generalEstimate.doorStepDelivery ? 'Remove' : 'Add'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default GenerateEstimate