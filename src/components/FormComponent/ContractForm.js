import React from 'react'
import { TextField } from '@mui/material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const ContractForm = ({setFormInformations, formInformations, handleSubmit}) => {
  const [agreementDuration, setAgreementDuration] = React.useState('');
  const [lockingPeriod, setLockingPeriod] = React.useState('');

  const handleAgDuration = (e, newDuration) => {
    setAgreementDuration(newDuration);

    setFormInformations({
      ...formInformations,
      contractDetails: {
        ...formInformations.contractDetails,
        agreementDuration: e.target.value
      }
    })
  };

  const handleLkPeriod = (e, newPeriod) => {
    setLockingPeriod(newPeriod);

    setFormInformations({
      ...formInformations,
      contractDetails: {
        ...formInformations.contractDetails,
        minimumLockingPeriod: e.target.value
      }
    })
  };


  return (
    <div className="mt-8 flex flex-col items-center lg:items-start">
      {/* <h3 className=" font-semibold">Property Details</h3> */}
      <div className=" my-2 w-full">
        <form id={5} onSubmit={ (e) => handleSubmit(e)} className="flex flex-col gap-4 w-full  px-4 lg:px-0">
          <div className="flex flex-col gap-2 font-semibold">
            <span>Agreement Duration (in months)</span>
            <div className='flex gap-2 lg:gap-4'>
              <ToggleButtonGroup
                    value={agreementDuration}
                    exclusive
                    onChange={handleAgDuration}
                    aria-label="Agreement Duration"
                    className=" flex flex-wrap gap-2 lg:gap-4"
                  >
                    <ToggleButton value={'6 months'} aria-label="6 months" className={formInformations.contractDetails.agreementDuration === '6 months' ? 'duration-btn-active' : 'duration-btn'}>6 months</ToggleButton>
                    <ToggleButton value={'11 months'} aria-label="11 months" className={formInformations.contractDetails.agreementDuration === '11 months' ? 'duration-btn-active' : 'duration-btn'}>11 months</ToggleButton>
                    <ToggleButton value={'12 months'} aria-label="12 months" className={formInformations.contractDetails.agreementDuration === '12 months' ? 'duration-btn-active' : 'duration-btn'}>12 months</ToggleButton>
              </ToggleButtonGroup>
              <input
                // id="outlined-number"
                // label="Number"
                placeholder='Other'
                type="text"
                className="duration-btn pl-3"
                onChange={(e) => handleAgDuration(e, e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
            <div className="flex flex-col gap-2">
              <span>Agreement Start Date <span className=" text-red-500">*</span></span>
                <input type="date" id="start" name="trip-start" required
                  value={formInformations.contractDetails.agreementStartDate}
                  min="2018-01-01" max="2027-12-31"
                  className="border h-[1.4em] p-6 rounded-md"
                  onChange={(e) => setFormInformations({
                    ...formInformations,
                    contractDetails: {
                      ...formInformations.contractDetails,
                      agreementStartDate: e.target.value
                    }
                  })}
                />
            </div>
            <div className="flex flex-col gap-2">
              <span>Rent Amount <span className=" text-red-500">*</span></span>
              <TextField
                  required
                  id="outlined-required"
                  helperText="Enter Property Details"
                  // label="Required"
                  value={formInformations.contractDetails.rentAmount}
                  onChange={(e) => setFormInformations({
                    ...formInformations,
                    contractDetails: {
                      ...formInformations.contractDetails,
                      rentAmount: e.target.value
                    }
                  })}
                />
            </div>
            <div className="flex flex-col gap-2">
              <span>Refundable Deposit <span className=" text-red-500">*</span></span>
              <TextField
                  required
                  id="outlined-required"
                  // label="Required"
                  value={formInformations.contractDetails.RefundableDeposit}
                  onChange={(e) => setFormInformations({
                    ...formInformations,
                    contractDetails: {
                      ...formInformations.contractDetails,
                      RefundableDeposit: e.target.value
                    }
                  })}
                />
            </div>
            <div className="flex flex-col gap-2">
              <span>Non Refundable Deposit </span>
              <TextField
                  // required
                  id="outlined-required"
                  value={formInformations.contractDetails.nonRefundableDeposit}
                  onChange={(e) => setFormInformations({
                    ...formInformations,
                    contractDetails: {
                      ...formInformations.contractDetails,
                      nonRefundableDeposit: e.target.value
                    }
                  })}
                />
            </div>
          </div>
          <div  className="flex flex-col gap-2 font-semibold">
              <span>Minimum Lockin Period (in months) <span className=" text-red-500">*</span></span>
              <div className='flex gap-2 lg:gap-4'>
                <ToggleButtonGroup
                      value={lockingPeriod}
                      exclusive
                      onChange={handleLkPeriod}
                      aria-label="Non R Deposit"
                      className=" flex flex-wrap gap-2 lg:gap-4"
                    >
                      <ToggleButton value='1' aria-label="One" className={formInformations.contractDetails.minimumLockingPeriod === '1' ? 'floor-btn-active' : 'floor-btn'}>1</ToggleButton>
                      <ToggleButton value='2' aria-label="Two" className={formInformations.contractDetails.minimumLockingPeriod === '2' ? 'floor-btn-active' : 'floor-btn'}>2</ToggleButton>
                      <ToggleButton value='3' aria-label="Three" className={formInformations.contractDetails.minimumLockingPeriod === '3' ? 'floor-btn-active' : 'floor-btn'}>3</ToggleButton>
                </ToggleButtonGroup>
                <input
                  // id="outlined-number"
                  placeholder='Other'
                  // label="Number"
                  type="text"
                  className="floor-btn pl-3"
                  onChange={(e) => handleLkPeriod(e, e.target.value)}
                />
              </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
            <div className="flex flex-col gap-2">
              <span>Enter Rent Day <span className=" text-red-500">*</span></span>
                <input type="date" id="start" name="trip-start" required
                  value={formInformations.contractDetails.rentDay}
                  min="2018-01-01" max="2027-12-31"
                  className="border h-[1.4em] p-6 rounded-md"
                  onChange={(e) => setFormInformations({
                    ...formInformations,
                    contractDetails: {
                      ...formInformations.contractDetails,
                      rentDay: e.target.value
                    }
                  })}
                />
            </div>
            <div className="flex flex-col gap-2">
              <span>Notice period (in months) <span className=" text-red-500">*</span></span>
              <TextField
                  required
                  id="outlined-required"
                  // label="Required"
                  value={formInformations.contractDetails.noticePeriod}
                  onChange={(e) => setFormInformations({
                    ...formInformations,
                    contractDetails: {
                      ...formInformations.contractDetails,
                      noticePeriod: e.target.value
                    }
                  })}
                />
            </div>
          </div>
          <div className="flex flex-col gap-2">
              <span>Miscellaneous (if any other Terms and Conditions) (Maximum 200 character)</span>
              <TextField
                  // required
                  id="outlined-required"
                  // label="Required"
                  multiline
                  value={formInformations.contractDetails.miscellaneous}
                  onChange={(e) => setFormInformations({
                    ...formInformations,
                    contractDetails: {
                      ...formInformations.contractDetails,
                      miscellaneous: e.target.value
                    }
                  })}
                />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContractForm