import React, { createContext, useContext, useState } from 'react';

// Create the context
const FormContext = createContext();

// Custom hook to use the context
export const useFormContext = () => useContext(FormContext);

// Create a provider component to wrap around the Form component
export const FormProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
    address: "",
    district: "",
    state: "",
    city: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: ""
  });

  const [errors, setErrors] = useState({});

  return (
    <FormContext.Provider value={{ data, setData, errors, setErrors }}>
      {children}
    </FormContext.Provider>
  );
};
