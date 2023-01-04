import React from 'react'
import TextField from '@mui/material/TextField';

const PropertyForm = ({setFormInformations, formInformations}) => {
  return (
    <div>
      <h3>Property Details</h3>
      <div>
      <TextField
          required
          id="outlined-helperText-multiline-flexible"
          label="required"
          multiline
          rows={4}
          value={formInformations.propertyDetails}
          onChange={(e) => setFormInformations({
            ...formInformations,
            propertyDetails: e.target.value
          })}
          // defaultValue="Default Value"
          helperText="Enter Property Details"
        />
      </div>
    </div>
  )
}

export default PropertyForm