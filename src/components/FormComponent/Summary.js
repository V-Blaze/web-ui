import React from 'react'

const Summary = () => {
  return (
    <div className="flex flex-col mt-4 mr-4 items-end">
      <div className="border border-black w-[70%] rounded-lg p-4">
        <h3 className=" font-semibold text-xl mb-6">Legal Document Quotation</h3>
        <ul className="mb-6 border-black border-b-2">
          <li className="flex justify-between"><span>Govefnment Stap Duty</span> <span className=" font-bold">₹20</span></li>
          <li className="flex justify-between"><span>Notarized Agreement</span> <span className=" font-bold">₹300</span></li>
          <li className="flex justify-between"><span>Doorstep Delivery</span> <span className=" font-bold">₹100</span></li>
          <li className="flex justify-between"><span>E-sign Agreement</span> <span className=" font-bold">₹50</span></li>
          <li className="flex justify-between"><span>Convenience Charges</span> <span className=" font-bold">₹379</span></li>
        </ul>
        <div className="flex justify-between font-bold mb-10">
          <span>Total Amount</span>
          <span>₹849</span>
        </div>
        <button type='button' className="w-full bg-black text-white h-8 px-3 rounded-lg">Pay ₹849</button>
      </div>
      <div className="flex flex-col gap-4 w-[70%] mt-6 ">
        <span>Addons</span>
        <textarea cols="28" rows="5" className="border-2 border-black rounded-lg" />
      </div>
    </div>
  )
}

export default Summary