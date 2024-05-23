import React from 'react';
import Home from "./components/home";
import Register from "./components/register";
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import AdminLogin from './components/adminlogin';
import AdminDashboard from './components/dashboard';
import { useState } from 'react';
import ProtectedRoute from './components/protectedroute';
import './App.css'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
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
        <Route path='/home' element={<Home />}/>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
