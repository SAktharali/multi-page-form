import React from 'react';
import {useFormContext} from "../context/FormContext";

const Payment = () => {

  const {data,setData,errors} = useFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <div className="flex flex-col mb-2">
        <h1 className='font-extrabold text-2xl text-pink-600 mb-2 text-center'>Payment Details</h1>
        <label htmlFor="cardNumber">
          <strong>Card Number:</strong>
        </label>
        <input
          type="text"
          name="cardNumber"
          value={data.cardNumber}
          onChange={handleChange}
          placeholder='Please enter card number'
          className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
        />
        <span className='text-red-400'>{errors.cardNumber}</span>
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="cardName">
          <strong>Card Name:</strong>
        </label>
        <input
          type="text"
          name="cardName"
          value={data.cardName}
          onChange={handleChange}
          placeholder='Please enter card name'
          className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
        />
        <span className='text-red-400'>{errors.cardName}</span>
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="expiryDate">
          <strong>Expiry Date:</strong>
        </label>
        <input
          type="text"
          name="expiryDate"
          value={data.expiryDate}
          onChange={handleChange}
          placeholder='Please enter expiry date'
          className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
        />
        <span className='text-red-400'>{errors.expiryDate}</span>
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="cvv">
          <strong>CVV:</strong>
        </label>
        <input
          type="text"
          name="cvv"
          value={data.cvv}
          onChange={handleChange}
          placeholder='Please enter CVV'
          className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
        />
        <span className='text-red-400'>{errors.cvv}</span>
      </div>
    </>
  );
};

export default Payment;

