import React from 'react'
import { ContractForm, GenerateEstimate, LandlordForm, PaymentForm, PropertyForm, Summary, TenantForm } from "./FormComponent";

const FormContainer = ({ step, setFormInformations, formInformations, handleSubmit}) => {

  switch (step) {
    case 1: 
        return (
            <GenerateEstimate
            formInformations={formInformations}
            setFormInformations={setFormInformations}
            handleSubmit={handleSubmit}
            />
        )
    case 2:
        return (
            <PropertyForm
            formInformations={formInformations}
            setFormInformations={setFormInformations}
            handleSubmit={handleSubmit}
            />
        )
    case 3:
        return (
            <LandlordForm
            formInformations={formInformations}
            setFormInformations={setFormInformations}
            handleSubmit={handleSubmit}
            />
        )
    case 4:
        return (
            <TenantForm
            formInformations={formInformations}
            setFormInformations={setFormInformations}
            handleSubmit={handleSubmit}
            />
        )
    case 5:
        return (
            <ContractForm
            formInformations={formInformations}
            setFormInformations={setFormInformations}
            handleSubmit={handleSubmit}
            />
        )
    case 6:
        return (
            <PaymentForm
            formInformations={formInformations}
            setFormInformations={setFormInformations}
            handleSubmit={handleSubmit}
            />
        )
    case 7:
        return (
            <Summary
            formInformations={formInformations}
            setFormInformations={setFormInformations}
            handleSubmit={handleSubmit}
            />
        )
    default:
        break;
  }
}

export default FormContainer