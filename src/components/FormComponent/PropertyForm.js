import React from 'react'
import { MenuItem, TextField } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const PropertyForm = ({setFormInformations, formInformations, handleSubmit}) => {
  const [floorNumber, setfloorNumber] = React.useState(0);
  const [BHKNumber, setBHKNumber] = React.useState('');

  const handleFloor = (e, newFloorNumber) => {
    setfloorNumber(newFloorNumber);

    setFormInformations({
      ...formInformations,
      propertyDetails: {
        ...formInformations.propertyDetails,
        floorNumber: e.target.value
      }
    })
  };

  const handleBHK = (e, newBHKNumber) => {
    setBHKNumber(newBHKNumber);

    setFormInformations({
      ...formInformations,
      propertyDetails: {
        ...formInformations.propertyDetails,
        BHK: e.target.value
      }
    })
  };

  const typeOfProperty = [
    {
      value: 'shop',
      label: 'Shop',
    },
    {
      value: 'office',
      label: 'Office',
    },
    {
      value: 'apartment/flat',
      label: 'Apartment/flat',
    },
    {
      value: 'godwon',
      label: 'Godwon',
    },
    {
      value: 'independent',
      label: 'Independent',
    },
    {
      value: 'land+BUilding/Shed',
      label: 'Land+BUilding/Shed',
    },
  ];

  return (
    <div className="mt-8 flex flex-col items-center lg:items-start">
      {/* <h3 className=" font-semibold">Property Details</h3> */}
      <div className=" my-2 w-full">
        <form id={2} onSubmit={ (e) => handleSubmit(e)} className="flex flex-col gap-4 w-full px-4 lg:px-0">
          <div className="flex flex-col gap-2 font-semibold">
            <span>Floor Number</span>
            <div className='flex gap-2 lg:gap-4'>
              <ToggleButtonGroup
                    value={floorNumber}
                    exclusive
                    onChange={handleFloor}
                    aria-label="floor Number"
                    className=" flex flex-wrap gap-2 lg:gap-4"
                  >
                    <ToggleButton value={'1'} aria-label="One" className={floorNumber === '1' ? 'floor-btn-active' : 'floor-btn'}>1</ToggleButton>
                    <ToggleButton value={'2'} aria-label="Two" className={floorNumber === '2' ? 'floor-btn-active' : 'floor-btn'}>2</ToggleButton>
                    <ToggleButton value={'3'} aria-label="Three" className={floorNumber === '3' ? 'floor-btn-active' : 'floor-btn'}>3</ToggleButton>
              </ToggleButtonGroup>
              <input
                // id="outlined-number"
                label="Number"
                placeholder='Floor No.'
                type="number"
                className="floor-btn pl-3"
                onChange={(e) => handleFloor(e, e.target.value)}
              />
            </div>
          </div>
          <div  className="flex flex-col gap-2 font-semibold">
              <span>Choose BHK</span>
              <div className='flex gap-2 lg:gap-4'>
                <ToggleButtonGroup
                      value={BHKNumber}
                      exclusive
                      onChange={handleBHK}
                      aria-label="BHK"
                      className=" flex flex-wrap gap-2 lg:gap-4"
                    >
                      <ToggleButton value='0.5' aria-label="One" className={BHKNumber === '0.5' ? 'floor-btn-active' : 'floor-btn'}>1 RK</ToggleButton>
                      <ToggleButton value='1' aria-label="Two" className={BHKNumber === '1' ? 'floor-btn-active' : 'floor-btn'}>1 BHK</ToggleButton>
                      <ToggleButton value='2' aria-label="Three" className={BHKNumber === '2' ? 'floor-btn-active' : 'floor-btn'}>2 BHK</ToggleButton>
                </ToggleButtonGroup>
                <input
                  // id="outlined-number"
                  placeholder='BHK No.'
                  label="Number"
                  type="number"
                  className="floor-btn pl-3"
                  onChange={(e) => handleBHK(e, e.target.value)}
                />
              </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
            <div className="flex flex-col gap-2">
              <span>Type Of Property <span className=" text-red-500">*</span></span>
              <TextField
                  id="outlined-select-mode"
                  select
                  required
                  label="Property"
                  defaultValue="shop"
                  value={formInformations.propertyDetails.typeOfProperty}
                  onChange={(e) => setFormInformations({
                    ...formInformations,
                    propertyDetails: {
                      ...formInformations.propertyDetails,
                      typeOfProperty: e.target.value
                    }
                  })}
                >
                  {typeOfProperty.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
              </TextField>
            </div>
            <div className="flex flex-col gap-2">
              <span>Office Number <span className=" text-red-500">*</span></span>
              <TextField
                  required
                  id="outlined-required"
                  // label="Required"
                  value={formInformations.propertyDetails.officeNumber}
                  onChange={(e) => setFormInformations({
                    ...formInformations,
                    propertyDetails: {
                      ...formInformations.propertyDetails,
                      officeNumber: e.target.value
                    }
                  })}
                />
            </div>
            <div className="flex flex-col gap-2">
              <span>Building Name <span className=" text-red-500">*</span></span>
              <TextField
                  required
                  id="outlined-required"
                  // label="Required"
                  value={formInformations.propertyDetails.buildingName}
                  onChange={(e) => setFormInformations({
                    ...formInformations,
                    propertyDetails: {
                      ...formInformations.propertyDetails,
                      buildingName: e.target.value
                    }
                  })}
                />
            </div>
            <div className="flex flex-col gap-2">
              <span>Number of bathrooms </span>
              <TextField
                  // required
                  id="outlined-required"
                  value={formInformations.propertyDetails.noOfBathrooms}
                  onChange={(e) => setFormInformations({
                    ...formInformations,
                    propertyDetails: {
                      ...formInformations.propertyDetails,
                      noOfBathrooms: e.target.value
                    }
                  })}
                />
            </div>
            <div className="flex flex-col gap-2">
              <span>Pincode <span className=" text-red-500">*</span></span>
              <TextField
                  required
                  id="outlined-required"
                  value={formInformations.propertyDetails.pincode}
                  onChange={(e) => setFormInformations({
                    ...formInformations,
                    propertyDetails: {
                      ...formInformations.propertyDetails,
                      pincode: e.target.value
                    }
                  })}
                />
            </div>
            <div className="flex flex-col gap-2">
              <span>Locality <span className=" text-red-500">*</span></span>
              <TextField
                  required
                  id="outlined-required"
                  value={formInformations.propertyDetails.locality}
                  onChange={(e) => setFormInformations({
                    ...formInformations,
                    propertyDetails: {
                      ...formInformations.propertyDetails,
                      locality: e.target.value
                    }
                  })}
                />
            </div>
            <div className="flex flex-col gap-2">
              <span>District <span className=" text-red-500">*</span></span>
              <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  value={formInformations.propertyDetails.district}
                  onChange={(e) => setFormInformations({
                    ...formInformations,
                    propertyDetails: {
                      ...formInformations.propertyDetails,
                      district: e.target.value
                    }
                  })}
                />
            </div>
            <div className="flex flex-col gap-2">
              <span>State <span className=" text-red-500">*</span></span>
              <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  value={formInformations.propertyDetails.state}
                  onChange={(e) => setFormInformations({
                    ...formInformations,
                    propertyDetails: {
                      ...formInformations.propertyDetails,
                      state: e.target.value
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

export default PropertyForm