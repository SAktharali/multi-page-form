// import React, { useState } from 'react';
// import PersonDetails from './PersonDetails';
// import Address from './Address';
// import Payment from './Payment';
// import {useNavigate} from 'react-router-dom';
// import {useFormContext} from "../context/FormContext";
// import axios from "axios";

// const Form = () => {

//   const {data,setData,setErrors} = useFormContext();

//   // State to manage the current page number (0 = PersonDetails, 1 = Address, 2 = Payment)
//   const [page, setPage] = useState(0);

//   // Array to define the steps (pages) of the form
//   const forms = [1, 2, 3];

//   // Validation function to check if required fields are filled based on the current page
//   const validate = () => {
//     let tempErrors = {};

//     // Validation for the first page (PersonDetails)
//     if (page === 0) {
//       if (!data.name) tempErrors.name = 'Name is required';
//       if (!data.email) tempErrors.email = 'Email is required';
//       if (!data.mobile) tempErrors.mobile = 'Mobile number is required';
//       if (!data.password) tempErrors.password = 'Password is required';
//       else if (data.password.length < 6) tempErrors.password = 'Password must be at least 6 characters';
//     } 
//     // Validation for the second page (Address)
//     else if (page === 1) {
//       if (!data.address) tempErrors.address = 'Address is required';
//       if (!data.district) tempErrors.district = 'District is required';
//       if (!data.state) tempErrors.state = 'State is required';
//       if (!data.city) tempErrors.city = 'City is required';
//     } 
//     // Validation for the third page (Payment)
//     else if (page === 2) {
//       if (!data.cardNumber) tempErrors.cardNumber = 'Card Number is required';
//       if (!data.cardName) tempErrors.cardName = 'Card Name is required';
//       if (!data.expiryDate) tempErrors.expiryDate = 'Expiry Date is required';
//       if (!data.cvv) tempErrors.cvv = 'CVV is required';
//     }

//     // Update the errors state
//     setErrors(tempErrors);
//     // Return true if no errors, otherwise false
//     return Object.keys(tempErrors).length === 0;
//   };

//   // Function to render the form page based on the current step (page state)
//   const displayPage = () => {
//     switch (page) {
//       case 0:
//         return <PersonDetails />;
//       case 1:
//         return <Address />;
//       case 2:
//         return <Payment />;
//       default:
//         return <PersonDetails />;
//     }
//   };

//   // Function to handle clicking the "Prev" button to go back a step
//   const handlePrev = () => {
//     if (page > 0) setPage(page - 1);
//   };

//   // Function to handle clicking the "Next" button to go forward a step
//   const handleNext = (e) => {
//     e.preventDefault(); // Prevent form submission
//     if (validate()) {
//       if (page < 2) setPage(page + 1); // Go to the next step if validation passes
//     }
//   };

//   // Function to handle the form submission on the last page (Payment)
//   const handleSubmit = async (e) => {
//     try{
//     e.preventDefault(); 
//   const Navigate = useNavigate();

//     if (validate()) {
//       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v/register`,data);

//       if(response.data.success){
//  const isConfirmed = window.confirm("Check once before submitting the form");
//  if (isConfirmed) {
//    console.log(data);
//   //  alert("Form submitted successfully!"); 
//    alert(response.data.message); 
//    setData({
//      name: "",
//      email: "",
//      mobile: "",
//      password: "",
//      address: "",
//      district: "",
//      state: "",
//      city: "",
//      cardNumber: "",
//      cardName: "",
//      expiryDate: "",
//      cvv: ""
//    });
//    Navigate('/login');
//  }
//       }
//       else{
//         alert(response.data.message);
//       }
//     }
//   }
//   catch(error){
// alert("server error");
//   }
//   };

//   return (
//     <div className="w-screen h-screen bg-slate-300 flex justify-center items-center">
//       <div className="card w-[470px] rounded-md shadow-md bg-white p-5">
//         {/* Display the step indicators (1, 2, 3) */}
//         <div className="flex justify-center items-center">
//           {forms.map((_, i) => (
//             <React.Fragment key={i}>
//               <div
//                 className={`w-[35px] text-white my-3 rounded-full flex justify-center items-center h-[35px] 
//                   ${page >= i ? 'bg-blue-500' : 'bg-slate-500'}`}
//               >
//                 {i + 1}
//               </div>
//               {i !== forms.length - 1 && (
//                 <div className={`w-[85px] h-[3px] ${page > i ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>

//         {/* Render the current form page and handle navigation */}
//         <form onSubmit={page === 2 ? handleSubmit : handleNext}>
//           {displayPage()}

//           {/* Display the Prev and Next/Submit buttons */}
//           <div className="flex justify-between mt-4">
//             {/* Show the "Prev" button on pages other than the first */}
//             {page > 0 && (
//               <button
//                 type="button"
//                 className="px-3 py-2 text-lg rounded-md bg-yellow-500 text-white"
//                 onClick={handlePrev}
//               >
//                 Prev
//               </button>
//             )}
//             {/* Show "Next" on all but the last page, "Submit" on the last page */}
//             <button
//               type={page === 2 ? "submit" : "button"}
//               className={`px-3 py-2 text-lg rounded-md ${page === 0 ? "w-full" : ""} bg-green-700 text-white`}
//               onClick={page === 2 ? handleSubmit : handleNext}
//             >
//               {page === 2 ? "Submit" : "Next"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;

import React, { useState } from 'react';
import PersonDetails from './PersonDetails';
import Address from './Address';
import Payment from './Payment';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from "../context/FormContext";
import axios from "axios";

const Form = () => {
  const { data, setData, setErrors } = useFormContext();
  const [page, setPage] = useState(0);
  const navigate = useNavigate(); // Moved this to the top

  // Array to define the steps (pages) of the form
  const forms = [1, 2, 3];

  // Validation function to check if required fields are filled based on the current page
  const validate = () => {
    let tempErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+[^\s@]{2,}$/;

    if (page === 0) {
      if (!data.name) tempErrors.name = 'Name is required';
      if (!data.email) 
        {
          tempErrors.email = 'Email is required'
        }
        else if (!emailPattern.test(data.email)) {
          tempErrors.email = "Please enter a valid email address";
        }
      if (!data.mobileNumber) tempErrors.mobileNumber = 'Mobile number is required';
      if (!data.password) tempErrors.password = 'Password is required';
      else if (data.password.length < 6) tempErrors.password = 'Password must be at least 6 characters';
    } else if (page === 1) {
      if (!data.address) tempErrors.address = 'Address is required';
      if (!data.district) tempErrors.district = 'District is required';
      if (!data.state) tempErrors.state = 'State is required';
      if (!data.city) tempErrors.city = 'City is required';
    } else if (page === 2) {
      if (!data.cardNumber) tempErrors.cardNumber = 'Card Number is required';
      if (!data.cardName) tempErrors.cardName = 'Card Name is required';
      if (!data.expiryDate) tempErrors.expiryDate = 'Expiry Date is required';
      if (!data.cvv) tempErrors.cvv = 'CVV is required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const displayPage = () => {
    switch (page) {
      case 0:
        return <PersonDetails />;
      case 1:
        return <Address />;
      case 2:
        return <Payment />;
      default:
        return <PersonDetails />;
    }
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validate()) {
      if (page < 2) setPage(page + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
      "http://localhost:7000/api/v/register",
          data
        );

        if (response.data.success) {
          const isConfirmed = window.confirm(
            "Check once before submitting the form"
          );
          if (isConfirmed) {
            console.log(data);
            alert(response.data.message);
            navigate("/login");

            setData({
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
              cvv: "",
            });
            
          }
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error("Server error:", error);
        alert("Server error, please try again.");
      }
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-300 flex justify-center items-center">
      <div className="card w-[470px] rounded-md shadow-md bg-white p-5">
        {/* Display the step indicators (1, 2, 3) */}
        <div className="flex justify-center items-center">
          {forms.map((_, i) => (
            <React.Fragment key={i}>
              <div
                className={`w-[35px] text-white my-3 rounded-full flex justify-center items-center h-[35px] 
                  ${page >= i ? "bg-blue-500" : "bg-slate-500"}`}
              >
                {i + 1}
              </div>
              {i !== forms.length - 1 && (
                <div
                  className={`w-[85px] h-[3px] ${
                    page > i ? "bg-blue-500" : "bg-slate-400"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Render the current form page and handle navigation */}
        <form onSubmit={page === 2 ? handleSubmit : handleNext}>
          {displayPage()}

          <div className="flex justify-between mt-4">
            {page > 0 && (
              <button
                type="button"
                className="px-3 py-2 text-lg rounded-md bg-yellow-500 text-white"
                onClick={handlePrev}
              >
                Prev
              </button>
            )}
            <button
              type={page === 2 ? "submit" : "button"}
              className={`px-3 py-2 text-lg rounded-md ${
                page === 0 ? "w-full" : ""
              } bg-green-700 text-white`}
              onClick={page === 2 ? handleSubmit : handleNext}
            >
              {page === 2 ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
