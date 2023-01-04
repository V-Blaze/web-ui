import { TextField } from '@mui/material'
import React from 'react'

const ContractForm = ({setFormInformations, formInformations}) => {
  return (
    <div>
      <h3>Contract Details</h3>
      <div>
      <TextField
          required
          id="outlined-helperText-multiline-flexible"
          label="required"
          multiline
          rows={4}
          value={formInformations.contractDetails}
          onChange={(e) => setFormInformations({
            ...formInformations,
            contractDetails: e.target.value
          })}
          // defaultValue="Default Value"
          helperText="Enter Property Details"
        />
      </div>
    </div>
  )
}

export default ContractForm