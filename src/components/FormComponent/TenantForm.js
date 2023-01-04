import React from 'react'
import { TextField } from '@mui/material'

const TenantForm = ({setFormInformations, formInformations}) => {
  return (
    <div>
      <h3>Tenant Details</h3>
      <div>
      <TextField
          required
          id="outlined-helperText-multiline-flexible"
          label="required"
          multiline
          rows={4}
          value={formInformations.tenantDetails}
          onChange={(e) => setFormInformations({
            ...formInformations,
            tenantDetails: e.target.value
          })}
          // defaultValue="Default Value"
          helperText="Enter Property Details"
        />
      </div>
    </div>
  )
}

export default TenantForm