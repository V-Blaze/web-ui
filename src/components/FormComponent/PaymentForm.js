import { MenuItem, TextField } from '@mui/material';
import React from 'react';

const PaymentForm = ({setFormInformations, formInformations, handleSubmit}) => {
  const modes = [
    {
      value: 'cash',
      label: 'Cash',
    },
    {
      value: 'cheque',
      label: 'Cheque',
    },
    {
      value: 'internet-banking',
      label: 'Internet Banking',
    },
    {
      value: 'demand-draft',
      label: 'Demand Draft',
    },
  ];
  return (
    <div className="mt-8 flex flex-col gap-3 ">
      <form id={6} onSubmit={ (e) => handleSubmit(e)} className="flex flex-col px-4 gap-4">
      <div className="flex flex-col">
        <span>Deposit Method Mode <span className=" text-red-500">*</span></span>
        <TextField
            id="outlined-select-mode"
            select
            required
            label="required"
            defaultValue="cash"
            helperText="Please select Payment Mode"
            value={formInformations.paymentMode}
            onChange={(e) => setFormInformations({
              ...formInformations,
              paymentMode: e.target.value
            })}
          >
            {modes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
      </div>
      <div className="flex flex-col">
        <span>Cash Amount <span className=" text-red-500">*</span></span>
        <TextField
            required
            id="outlined-required"
            label="Required"
            // defaultValue="Hello World"
            value={formInformations.paymentAmount}
            onChange={(e) => setFormInformations({
              ...formInformations,
              paymentAmount: e.target.value
            })}
          />
        </div>
        </form>
    </div>
  )
}

export default PaymentForm