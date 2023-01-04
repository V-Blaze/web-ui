import React, { useState } from 'react'
import { ContractForm, GenerateEstimate, LandlordForm, PaymentForm, PropertyForm, Summary, TenantForm } from "./FormComponent";

const FormContainer = () => {
  const [formInformations, setFormInformations] = useState({
    ContractDetails: '',
    LandlordDetails: '',
    PaymentDetails: '',
    PropertyDetails: '',
    TenantDetails: '',
    ContractDetails: '',
    ContractDetails: '',
    ContractDetails: '',
  });

  const [step, setstep] = useState(1);

  switch (step) {
    case 1:
        return (
            <GenerateEstimate />
        )
    case 2:
        return (
            <PropertyForm />
        )
    case 3:
        return (
            <LandlordForm />
        )
    case 4:
        return (
            <TenantForm />
        )
    case 5:
        return (
            <ContractForm />
        )
    case 6:
        return (
            <PaymentForm />
        )
    case 7:
        return (
            <Summary />
        )
    default:
        break;
  }
}

export default FormContainer