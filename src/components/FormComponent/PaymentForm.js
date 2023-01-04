import { MenuItem, TextField } from '@mui/material';
import React from 'react';

const PaymentForm = ({setFormInformations, formInformations}) => {
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
    <div>
      <span>Deposit Method Mode *</span>
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
      <span>Cash Amount</span>
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
  )
}

export default PaymentForm