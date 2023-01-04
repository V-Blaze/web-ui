import React from 'react'
import { ContractForm, GenerateEstimate, LandlordForm, PaymentForm, PropertyForm, Summary, TenantForm } from "./FormComponent";

const FormContainer = ({ step, setFormInformations, formInformations,}) => {

  switch (step) {
    case 1: 
        return (
            <GenerateEstimate
            formInformations={formInformations}
            setFormInformations={setFormInformations}
            />
        )
    case 2:
        return (
            <PropertyForm
            formInformations={formInformations}
            setFormInformations={setFormInformations}
            />
        )
    case 3:
        return (
            <LandlordForm
            formInformations={formInformations}
            setFormInformations={setFormInformations}
            />
        )
    case 4:
        return (
            <TenantForm
            formInformations={formInformations}
            setFormInformations={setFormInformations}
            />
        )
    case 5:
        return (
            <ContractForm
            formInformations={formInformations}
            setFormInformations={setFormInformations}
            />
        )
    case 6:
        return (
            <PaymentForm
            formInformations={formInformations}
            setFormInformations={setFormInformations}
            />
        )
    case 7:
        return (
            <Summary
            formInformations={formInformations}
            setFormInformations={setFormInformations}
            />
        )
    default:
        break;
  }
}

export default FormContainer