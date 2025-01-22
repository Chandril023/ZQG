import React, { useState, useEffect } from 'react';
import { SignOutButton } from '@clerk/clerk-react';
import { Upload } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [loading, setLoading] = useState({
    users: true,
    payments: true,
    table: true,
  });
  const [error, setError] = useState({
    users: null,
    payments: null,
    table: null,
  });
  const [sidebarOpen, setSidebarOpen] = useState(true); // Manage sidebar state
  const frontend = "http://localhost:8080";

  // Fetch registered users
  useEffect(() => {
    fetch(`${frontend}/api/fetch-user`)
      .then((res) => res.json())
      .then((data) => {
        setRegisteredUsers(data);
        setLoading((prev) => ({ ...prev, users: false }));
      })
      .catch((err) => {
        setError((prev) => ({ ...prev, users: 'Failed to fetch users' }));
        setLoading((prev) => ({ ...prev, users: false }));
      });
  }, []);

  // Fetch payments
  useEffect(() => {
    fetch(`${frontend}/api/payments`)
      .then((res) => res.json())
      .then((data) => {
        setPayments(data);
        setLoading((prev) => ({ ...prev, payments: false }));
      })
      .catch((err) => {
        setError((prev) => ({ ...prev, payments: 'Failed to fetch payments' }));
        setLoading((prev) => ({ ...prev, payments: false }));
      });
  }, []);

  // Fetch league table
  useEffect(() => {
    fetch(`${frontend}/admin/fetch-table`)
      .then((res) => res.json())
      .then((data) => {
        setTableData(data);
        setLoading((prev) => ({ ...prev, table: false }));
      })
      .catch(() => {
        setError((prev) => ({ ...prev, table: 'Unable to fetch table data' }));
        setLoading((prev) => ({ ...prev, table: false }));
      });
  }, []);

  // Create Table
  const createTable = () => {
    fetch(`${frontend}/admin/delete-table`, {
      method: 'DELETE',
    })
      .then(() => {
        const newUsers = registeredUsers.map(user => ({
          username: user.username,
          name: user.name,
          team: user.team || 'N/A',
          points: 0,
          matchesPlayed: 0,
          goalsScored: 0,
          goalsConceded: 0,
          goalDifference: 0,
        }));
  
        fetch(`${frontend}/admin/create-table`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUsers),
        })
          .then(() => {
            alert('New table created successfully!');
            window.location.reload();
          })
          .catch(() => {
            alert('Failed to create new table.');
          });
      })
      .catch(() => {
        alert('Failed to delete old table data.');
      });
  };

  // Update Table
  const updateTable = (username, updatedValues) => {
    fetch(`${frontend}/admin/edit-table/${username}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedValues),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(`Updated table for ${username}`);
        setTableData((prev) =>
          prev.map((row) => (row.username === username ? data : row))
        );
      })
      .catch(() => alert('Failed to update table.'));
  };

  const RegisteredUsersSection = () => (
    <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Registered Users</h2>
      {loading.users ? (
        <p className="text-gray-500">Loading...</p>
      ) : error.users ? (
        <p className="text-red-500">{error.users}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team Name</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {registeredUsers.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.team || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );

  const PaymentSection = () => {
    const [formData, setFormData] = useState({
      name: '',
      username: '',
      signature: '',
      screenshot: null,
    });

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleFileChange = (e) => {
      setFormData({
        ...formData,
        screenshot: e.target.files[0],
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      const formPayload = new FormData();
      formPayload.append('name', formData.name);
      formPayload.append('username', formData.username);
      formPayload.append('signature', formData.signature);
      formPayload.append('screenshot', formData.screenshot);

      try {
        const response = await fetch(`${frontend}/api/payments`, {
          method: 'POST',
          body: formPayload,
        });

        if (!response.ok) {
          throw new Error('Failed to add payment verification');
        }

        const newPayment = await response.json();
        setPayments((prev) => [...prev, newPayment]);

        setFormData({
          name: '',
          username: '',
          signature: '',
          screenshot: null,
        });

        alert('Payment verification added successfully!');
      } catch (err) {
        alert(err.message || 'Error adding payment verification');
      }
    };

    return (
      <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Payment Verifications</h2>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-medium mb-4">Add New Payment Verification</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Digital Signature:</label>
              <input
                type="text"
                name="signature"
                value={formData.signature}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Payment Screenshot:</label>
              <div className="flex items-center space-x-2">
                <label className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 transition-colors">
                  <Upload className="inline-block mr-2" />
                  Upload Screenshot
                  <input
                    type="file"
                    name="screenshot"
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*"
                    required
                  />
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Submit Payment Verification
              </button>
            </div>
          </form>
        </div>

        {loading.payments ? (
          <p className="text-gray-500">Loading...</p>
        ) : error.payments ? (
          <p className="text-red-500">{error.payments}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Signature</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Screenshot</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {payments.map((payment, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{payment.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{payment.username}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{payment.signature}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a href={payment.screenshot} target="_blank" rel="noopener noreferrer">
                        View Screenshot
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    );
  };

  const LeagueTableSection = () => (
    <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">League Table</h2>

      {loading.table ? (
        <p className="text-gray-500">Loading...</p>
      ) : error.table ? (
        <p className="text-red-500">{error.table}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Matches Played</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Goals Scored</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Goals Conceded</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Goal Difference</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.username}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.team}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.points}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.matchesPlayed}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.goalsScored}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.goalsConceded}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.goalDifference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out ${sidebarOpen ? 'w-64' : 'w-0'} bg-gray-800 text-white p-6`}
      >
        {/* Toggle Button */}
        <button
          className="text-white bg-gray-700 rounded-full p-2 absolute top-4 left-4"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
        </button>

        {/* Sidebar Content */}
        {sidebarOpen && (
          <>
            <h2 className="text-2xl font-semibold mb-8">Admin Dashboard</h2>
            <nav className="space-y-4">
              <button
                onClick={() => setActiveSection('dashboard')}
                className="w-full text-left py-2 px-4 hover:bg-gray-700 rounded-md"
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveSection('registeredUsers')}
                className="w-full text-left py-2 px-4 hover:bg-gray-700 rounded-md"
              >
                Registered Users
              </button>
              <button
                onClick={() => setActiveSection('payments')}
                className="w-full text-left py-2 px-4 hover:bg-gray-700 rounded-md"
              >
                Payments
              </button>
              <button
                onClick={() => setActiveSection('leagueTable')}
                className="w-full text-left py-2 px-4 hover:bg-gray-700 rounded-md"
              >
                League Table
              </button>
            </nav>
          </>
        )}
      </div>

      {/* Main content */}
      <div className={`flex-1 bg-gray-100 p-6 ${sidebarOpen ? '' : 'w-full'}`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <SignOutButton
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
          >
            Sign Out
          </SignOutButton>
        </div>

        {activeSection === 'dashboard' && (
          <>
            <RegisteredUsersSection />
            <PaymentSection />
            <LeagueTableSection />
          </>
        )}
        {activeSection === 'registeredUsers' && <RegisteredUsersSection />}
        {activeSection === 'payments' && <PaymentSection />}
        {activeSection === 'leagueTable' && <LeagueTableSection />}
      </div>
    </div>
  );
};

export default Dashboard;
