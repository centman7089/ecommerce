// @ts-nocheck
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";


import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Login from "./components/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () =>
{
  
  const [ token, setToken ] = useState( localStorage.getItem('token') ? localStorage.getItem('token') : "" )
  
  useEffect( () =>
  {
    localStorage.setItem('token',token)
  },[token])

  return (
    
    <div className="bg-gray-50 min-h-screen" >
      {token === "" ? <Login setToken={ setToken} /> :  <>
        <ToastContainer/>
         <Navbar />
      <hr />
      <div className="flex w-full">
<Sidebar/>
      </div>
      <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
<Routes>
      <Route path="/add" element={<Add token={token} />} />
      <Route path="/list" element={<List token={token} />} />
      <Route path="/orders" element={<Orders token={token} />} />
     
      {/* <Route path="*" element={<NotFound/>} /> */}
      </Routes>
      </div>
      </>
      }
     
    
     
  </div>
  )
};

export default App;
