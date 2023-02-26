import React from 'react'
import {Routes,Route} from "react-router-dom";
import Signup from './Signup/'
import Login from "./Login/"

export default function Index() {
  return (
    <Routes>

       <Route path="signup" element={<Signup />} />
       <Route path="login" element={<Login />} />
         
</Routes>
  )
}
