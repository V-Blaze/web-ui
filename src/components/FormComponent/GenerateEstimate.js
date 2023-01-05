import React from 'react'

const GenerateEstimate = ({handleSubmit}) => {
  return (
    <div className="flex justify-center items-center">
      <h2 className=" text-3xl">Generate Estimate</h2>
      <form id={1} onSubmit={ (e) => handleSubmit(e)} className="flex flex-col gap-4"></form>
    </div>
  )
}

export default GenerateEstimate