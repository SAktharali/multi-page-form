import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Form from './components/Form';
import Login from './components/Login';
import { FormProvider } from './context/FormContext';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route 
          path="/register" 
          element={
            <FormProvider>
              <Form />
            </FormProvider>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
