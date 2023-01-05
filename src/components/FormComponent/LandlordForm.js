import React from 'react'
import TextField from '@mui/material/TextField';

const LandlordForm = ({setFormInformations, formInformations, handleSubmit}) => {
  return (
    <div className="mt-8 flex flex-col items-center lg:items-start">
      <h3 className=" font-semibold">Landlord Details</h3>
      <div className=" my-3">
        <form id={3} onSubmit={ (e) => handleSubmit(e)} className="flex flex-col gap-4">
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
            {/* <button type='submit'
            className=" self-end w-fit bg-black text-white h-8 px-3 rounded-lg mt-4"
          >Save and Continue</button> */}
          </form>
      </div>
    </div>
  )
}

export default LandlordForm