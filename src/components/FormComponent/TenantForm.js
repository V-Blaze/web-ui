import React, { useState } from 'react'
import { MenuItem, TextField } from '@mui/material';

const TenantForm = ({setFormInformations, formInformations, handleSubmit}) => {
  const [AadhearVisible, setAadhearVisible] = useState(false);
  const partyType = [
    {
      value: 'tenant',
      label: 'Tenant',
    },
    {
      value: 'buyer',
      label: 'Buyer',
    },
    {
      value: 'witness',
      label: 'Witness',
    },
  ];

  const gender = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    },
    {
      value: 'transgender',
      label: 'Transgender',
    },
    {
      value: 'other',
      label: 'Other',
    },
    {
      value: 'undeclared',
      label: 'Undeclared',
    },
  ]


  return (
  <div className="mt-8 flex flex-col items-center lg:items-start">
    {/* <h3 className=" font-semibold">Property Details</h3> */}
    <div className=" my-2 w-full">
      <form id={4} onSubmit={ (e) => handleSubmit(e)} className="flex flex-col gap-4 w-full  px-10 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
          <div className="flex flex-col gap-2">
            <span>Party Type <span className=" text-red-500">*</span></span>
            <TextField
                id="outlined-select-mode"
                select
                required
                label="required"
                defaultValue="Tenant"
                value={formInformations.tenantDetails.partyType}
                onChange={(e) => setFormInformations({
                  ...formInformations,
                  tenantDetails: {
                    ...formInformations.tenantDetails,
                    partyType: e.target.value
                  }
                })}
              >
                {partyType.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
            </TextField>
          </div>
          <div className="flex flex-col gap-2">
            <span>Full Name <span className=" text-red-500">*</span></span>
            <TextField
                required
                id="outlined-required"
                label="Enter Full Name"
                value={formInformations.tenantDetails.fullName}
                onChange={(e) => setFormInformations({
                  ...formInformations,
                  tenantDetails: {
                    ...formInformations.tenantDetails,
                    fullName: e.target.value
                  }
                })}
              />
          </div>
          <div className="flex flex-col gap-2">
            <span>Gender <span className=" text-red-500">*</span></span>
            <TextField
                id="outlined-select-mode"
                select
                required
                label="Select Your Gender"
                defaultValue="Male"
                value={formInformations.tenantDetails.gender}
                onChange={(e) => setFormInformations({
                  ...formInformations,
                  tenantDetails: {
                    ...formInformations.tenantDetails,
                    gender: e.target.value
                  }
                })}
              >
                {gender.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
            </TextField>
          </div>
          <div className="flex flex-col gap-2">
            <span>Age <span className=" text-red-500">*</span></span>
            <TextField
                required
                id="outlined-required"
                label="Enter Your Age"
                value={formInformations.tenantDetails.age}
                onChange={(e) => setFormInformations({
                  ...formInformations,
                  tenantDetails: {
                    ...formInformations.tenantDetails,
                    age: e.target.value
                  }
                })}
              />
          </div>
          <div className="flex flex-col gap-2">
            <span>Phone </span>
            <TextField
                required
                id="outlined-required"
                label="Enter Phone Number"
                value={formInformations.tenantDetails.phone}
                onChange={(e) => setFormInformations({
                  ...formInformations,
                  tenantDetails: {
                    ...formInformations.tenantDetails,
                    phone: e.target.value
                  }
                })}
              />
          </div>
          <div className="flex flex-col gap-2">
            <span>Permanent Address Full <span className=" text-red-500">*</span></span>
            <TextField
                required
                id="outlined-required"
                label="Enter Full Address"
                value={formInformations.tenantDetails.permanentAddressFull}
                onChange={(e) => setFormInformations({
                  ...formInformations,
                  tenantDetails: {
                    ...formInformations.tenantDetails,
                    permanentAddressFull: e.target.value
                  }
                })}
              />
          </div>
          <div className="flex flex-col gap-2">
            <span>PAN Number (ABCDE1234F) <span className=" text-red-500">*</span></span>
            <TextField
                required
                id="outlined-required"
                label="Enter PAN"
                value={formInformations.tenantDetails.PANNumber}
                onChange={(e) => setFormInformations({
                  ...formInformations,
                  tenantDetails: {
                    ...formInformations.tenantDetails,
                    PANNumber: e.target.value
                  }
                })}
              />
          </div>
          <div className="flex flex-col gap-2">
            <span>Email Address <span className=" text-red-500">*</span></span>
            <TextField
                required
                id="outlined-required"
                label="Email Address"
                value={formInformations.tenantDetails.emailAdress}
                onChange={(e) => setFormInformations({
                  ...formInformations,
                  tenantDetails: {
                    ...formInformations.tenantDetails,
                    emailAdress: e.target.value
                  }
                })}
              />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
          <div className="flex flex-col gap-2">
            <span
              className="text-sm text-clip w-fit cursor-pointer"
              onClick={() => setAadhearVisible((prev) => !prev)}
            >
              +  Add Aadhear Number (optional)
            </span>
            {AadhearVisible && (
              <TextField
                id="outlined-required"
                label="Aadhear Number"
                value={formInformations.tenantDetails.AadhearNumber}
                onChange={(e) => setFormInformations({
                  ...formInformations,
                  tenantDetails: {
                    ...formInformations.tenantDetails,
                    AadhearNumber: e.target.value
                  }
                })}
              />
            )}
          </div>
          <div className="flex flex-col gap-2 col-start-1">
            <span>PAN Number (ABCDE1234F)  <span className=" text-red-500">*</span></span>
            <TextField
                required
                id="outlined-required"
                label="Enter PIN"
                value={formInformations.tenantDetails.PINNumber}
                onChange={(e) => setFormInformations({
                  ...formInformations,
                  tenantDetails: {
                    ...formInformations.tenantDetails,
                    PINNumber: e.target.value
                  }
                })}
              />
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default TenantForm