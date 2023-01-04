import React from 'react'
import TextField from '@mui/material/TextField';

const LandlordForm = ({setFormInformations, formInformations}) => {
  return (
    <div>
      <h3>Landlord Details</h3>
      <div>
      <TextField
          required
          id="outlined-helperText-multiline-flexible"
          label="required"
          multiline
          rows={4}
          value={formInformations.landlordDetails}
          onChange={(e) => setFormInformations({
            ...formInformations,
            landlordDetails: e.target.value
          })}
          // defaultValue="Default Value"
          helperText="Enter Property Details"
        />
      </div>
    </div>
  )
}

export default LandlordForm