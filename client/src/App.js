import React from 'react';

import Register from "./components/register";
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import AdminLogin from './components/adminlogin';
import AdminDashboard from './components/dashboard';
import { useState } from 'react';
import Members from './components/member';
import ProtectedRoute from './components/protectedroute';
import './App.css'
import Efootball from './components/efootball';
import Landing from './components/landing';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin/login' element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />}/>
        <Route
         path="/admin/dashboard"
  element={
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <AdminDashboard setIsAuthenticated={setIsAuthenticated} />
    </ProtectedRoute>
  }
/>
<Route path='/members' element={<Members/>}/>
        <Route path='/efootball' element={<Efootball/>}/>
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
