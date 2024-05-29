import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PaymentTable from './paymenttable';
import Update from './update';
import AdminRegister from './adminregister';
import AdminPoints from './adminpointstable';

function AdminDashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [inGameId, setInGameId] = useState('');
  const [paymentToken, setPaymentToken] = useState('');
  const [activeSection, setActiveSection] = useState('payments');

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
    <>
      <nav className='admin-dashboard-navbar'>
        <ul>
          <li onClick={() => setActiveSection('payments')}>Payments</li>
          <li onClick={() => setActiveSection('registrations')}>Registrations</li>
          <li onClick={() => setActiveSection('updations')}>Updations</li>
          <li onClick={() => setActiveSection('points')}>Points</li>
        </ul>
      </nav>
      <div className='content'>
        <h2>Admin Dashboard</h2>
        {activeSection === 'payments' && (
          <>
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
            <PaymentTable />
          </>
        )}
        {activeSection === 'points' && (
          <>
            <h3>Master Points Database</h3>
            <AdminPoints />
          </>
        )}
        {activeSection === 'updations' && (
          <>
            <h2>Update the database</h2>
            <Update />
          </>
        )}
        {activeSection === 'registrations' && (
          <>
            <h2>Admin Register</h2>
            <AdminRegister />
          </>
        )}
        <button onClick={handleLogout}>Sign Out</button>
      </div>
      <style jsx>{`
        .admin-dashboard-navbar {
          background-color: #333;
          padding: 10px;
          width:auto;
        }
        .admin-dashboard-navbar ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: space-around;
        }
        .admin-dashboard-navbar ul li {
          color: white;
          cursor: pointer;
          padding: 10px 20px;
          transition: background-color 0.3s;
        }
        .admin-dashboard-navbar ul li:hover {
          background-color: #555;
        }
        .content {
          padding: 20px;
        }
        .row {
          margin-bottom: 20px;
        }
        .input-group {
          margin-bottom: 15px;
        }
        .input-group-icon {
          display: flex;
          align-items: center;
        }
        .input-group-icon input {
          padding: 10px;
          margin-right: 5px;
        }
        .input-icon {
          color: #555;
        }
        button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </>
  );
}

export default AdminDashboard;
