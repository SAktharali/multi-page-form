import React from 'react';
import {useFormContext} from "../context/FormContext";

const Address = () => {

  const {data,setData,errors} = useFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <div className="flex flex-col mb-2">
        <h1 className='font-extrabold text-2xl text-pink-600 mb-2 text-center'>Address</h1>
        <label htmlFor="address">
          <strong>Address:</strong>
        </label>
        <textarea
          name="address"
          rows={2}
          value={data.address}
          onChange={handleChange}
          placeholder='Please enter address'
          className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
          required
        ></textarea>
        <span className='text-red-400'>{errors.address}</span>
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="state">
          <strong>State:</strong>
        </label>
        <input
          type="text"
          name="state"
          value={data.state}
          onChange={handleChange}
          placeholder='Please enter state'
          className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
        />
        <span className='text-red-400'>{errors.state}</span>
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="city">
          <strong>City:</strong>
        </label>
        <input
          type="text"
          name="city"
          value={data.city}
          onChange={handleChange}
          placeholder='Please enter city'
          className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
        />
        <span className='text-red-400'>{errors.city}</span>
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="district">
          <strong>District:</strong>
        </label>
        <input
          type="text"
          name="district"
          value={data.district}
          onChange={handleChange}
          placeholder='Please enter district'
          className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
        />
        <span className='text-red-400'>{errors.district}</span>
      </div>
    </>
  );
};

export default Address;
