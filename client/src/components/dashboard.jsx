import React, { useState } from 'react';

import PaymentTable from './paymenttable';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Update from './update';
import AdminRegister from './adminregister';
import AdminPoints from './adminpointstable';
function AdminDashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [inGameId, setInGameId] = useState('');
  const [paymentToken, setPaymentToken] = useState('');

  
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  const generateToken = async () => {
    try {
      const response = await axios.post('http://localhost:5000/admin/generate-token', { username, inGameId });
      const { paymentToken } = response.data;
      
      setPaymentToken(paymentToken);
      setUsername('');
      setInGameId('');
    } catch (error) {
      console.error('Error generating token:', error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Generate Payment Token</h3>
      <div className="row">
        <h4>Account</h4>
        <div className="input-group input-group-icon">
          <input 
            type="text" 
            placeholder="Full Name" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <div className="input-icon"><i className="fa fa-user"></i></div>
        </div>
        <div className="input-group input-group-icon">
          <input 
            type="text" 
            placeholder="IN-GAME-ID" 
            value={inGameId} 
            onChange={(e) => setInGameId(e.target.value)} 
          />
          <div className="input-icon"><i className="fa fa-key"></i></div>
        </div>
        <button onClick={generateToken}>Generate</button>
      </div>
      <h3>Payment Token Database</h3>
      <PaymentTable/>
      <h3>Master Points Database</h3>
      <AdminPoints/>
      <h2>Update the database</h2>
      <Update/>
      <h2>Admin Register</h2>
      <AdminRegister/>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
}

export default AdminDashboard;
