import React from 'react';
import {useFormContext} from "../context/FormContext";

const PersonDetails = () => {

  const {data,setData,errors} = useFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <div className="flex flex-col mb-2">
        <h1 className='font-extrabold text-2xl text-pink-600 mb-2 text-center'>Personal Details</h1>
        <label htmlFor="name">
          <strong>Name:</strong>
        </label>
        <input
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder='Please enter name'
          className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
          required
        />
        <span className='text-red-400'>{errors.name}</span>
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="email">
          <strong>Email:</strong>
        </label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder='Please enter email'
          className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
        />
        <span className='text-red-400'>{errors.email}</span>
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="mobile">
          <strong>Mobile Number:</strong>
        </label>
        <input
          type="text"
          name="mobileNumber"
          value={data.mobileNumber}
          onChange={handleChange}
          placeholder='Please enter mobile number'
          className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
        />
        <span className='text-red-400'>{errors.mobileNumber}</span>
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="password">
          <strong>Password:</strong>
        </label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder='Please enter password'
          className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
        />
        <span className='text-red-400'>{errors.password}</span>
      </div>
    </>
  );
};

export default PersonDetails;
