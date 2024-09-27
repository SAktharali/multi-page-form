import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Home = () => {
  const [data, setData] = useState([]); // State to store fetched data

  const fetchToken = async () => {
    try {
      const authToken = localStorage.getItem("token");
      const response = await axios.get("http://localhost:7000/api/v/home", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.data.success) {
        setData(response.data.users); // Set users data in state
      } else {
        alert(response.data.message);
        console.log(response.data.message);
      }
    } catch (error) {
      console.log("Internal server error", error);
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <>
      <div className="w-screen h-screen bg-slate-400 flex justify-center items-center">
        <div className="table-responsive card w-[700px] rounded-md shadow-md bg-white p-4">
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobileNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
