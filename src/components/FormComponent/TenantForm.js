import React from 'react'
import { TextField } from '@mui/material'

const TenantForm = ({setFormInformations, formInformations, handleSubmit}) => {
  return (
    <div className="mt-8 flex flex-col items-center lg:items-start">
      <h3 className=" font-semibold">Tenant Details</h3>
      <div className=" my-3">
      <form id={4} onSubmit={ (e) => handleSubmit(e)} className="flex flex-col gap-4">
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
        </form>
      </div>
    </div>
  )
}

export default TenantForm