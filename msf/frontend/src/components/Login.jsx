import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // Validation function to check if required fields are filled
  const validate = () => {
    let tempErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+[^\s@]{2,}$/;
    // Validation logic for the login form
    if (!data.name) tempErrors.name = 'Name is required';
    if (!data.email){
       tempErrors.email = 'Email is required'
      }
      else if(!emailPattern.test(data.email)){
        tempErrors.email = 'enter valid email address'
      }

    if (!data.password) tempErrors.password = 'Password is required';

    // Update the errors state
    setErrors(tempErrors);

    // Return true if no errors, otherwise false
    return Object.keys(tempErrors).length === 0;
  };

axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const isValid = validate();

    if (isValid) {
      try{
const response = await axios.post("http://localhost:7000/api/v/login",data);
if(response.data.success){
  alert(response.data.message);
  localStorage.setItem("token",response.data.token);
  console.log(response); 
        Navigate("/home");
        setData({
          name: "",
          email: "",
          password: ""
        });
      }
      else{
        alert(response.data.message);
        console.log(response.data.message);
        
      }
    }
    catch (error) {
      console.error("Server error:", error.message);
      alert("Server error, please try again.");
    }
  }
  };
  return (
    <>
      <div className='w-screen h-screen bg-slate-400 flex justify-center items-center'>
        <div className='card w-[370px] rounded-md shadow-md bg-white p-4'>
          <form method='post' onSubmit={handleSubmit}>
            <div className="flex flex-col mb-2">
              <h1 className='font-extrabold text-2xl mt-10 text-green-600 mb-2 text-center'>Login</h1>
              <label htmlFor="name">
                <strong>Name:</strong>
              </label>
              <input
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder='Please enter name'
                className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
              />
              <span className='text-red-400'>{errors.name}</span>
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="email">
                <strong>Email:</strong>
              </label>
              <input
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder='Please enter email'
                className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
              />
              <span className='text-red-400'>{errors.email}</span>
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="password">
                <strong>Password:</strong>
              </label>
              <input
                name="password"
                value={data.password}
                onChange={handleChange}
                type="password"
                placeholder='Please enter password'
                className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
              />
              <span className='text-red-400'>{errors.password}</span>
            </div>
            <p className='text-center text-lg text-black'>
              Don't have an account? Create an <Link to="/register" className='text-blue-700 cursor-pointer'>account</Link>
            </p>
            <button type='submit' className='border w-full rounded-md shadow-md p-2 mt-1 text-white bg-green-500'>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
