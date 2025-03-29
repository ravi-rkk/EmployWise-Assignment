import { useState } from 'react'

import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Login from './assets/Components/Login';
import UserList from './assets/Components/UserList';
import EditUser from './assets/Components/EditUser';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element = {<Login/>} />
        <Route path='/UserList' element={<UserList/>} />
        <Route path='/edit/:id' element={<EditUser/>} />
       
       

      </Routes>
    </div>
     
  )
}


