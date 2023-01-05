import { TextField } from '@mui/material'
import React from 'react'

const ContractForm = ({setFormInformations, formInformations, handleSubmit}) => {
  return (
    <div className="mt-8 flex flex-col items-center lg:items-start">
      <h3 className=" font-semibold">Contract Details</h3>
      <div className=" my-3">
      <form id={5} onSubmit={ (e) => handleSubmit(e)} className="flex flex-col gap-4">
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
        </form>
      </div>
    </div>
  )
}

export default ContractForm