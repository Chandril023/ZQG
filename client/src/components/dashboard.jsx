import React, { useState, useEffect } from 'react';
import './adminlanding.css';
import { SignOutButton } from '@clerk/clerk-react';
import { Upload } from 'lucide-react';
import './table.css';

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
        console.log('Old table data deleted successfully!');
        
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

  // Registered Users Section
// Registered Users Section
const RegisteredUsersSection = () => (
  <section className="user-section card">
    <h2 className="section-title">Registered Users</h2>
    {loading.users ? (
      <p>Loading...</p>
    ) : error.users ? (
      <p className="error-text">{error.users}</p>
    ) : (
      <div className="table-container">
        <table className="table styled-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Team Name</th>
            </tr>
          </thead>
          <tbody>
            {registeredUsers.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.team || 'N/A'}</td>
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
    const [payments, setPayments] = useState([]); // Initialize as empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await fetch(`${frontend}/api/payments`);
                if (!response.ok) {
                    throw new Error('Failed to fetch payments');
                }
                const data = await response.json();
                setPayments(Array.isArray(data) ? data : []);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchPayments();
    }, []);

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
        <section className="payment-section card">
            <h2 className="section-title">Payment Verifications</h2>

            <div className="form-container">
                <h3 className="form-title">Add New Payment Verification</h3>
                <form onSubmit={handleSubmit} className="payment-form">
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="input-field"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            className="input-field"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Digital Signature:</label>
                        <input
                            type="text"
                            name="signature"
                            value={formData.signature}
                            onChange={handleInputChange}
                            className="input-field"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Payment Screenshot:</label>
                        <div className="file-upload">
                            <label className="upload-btn">
                                Upload Image
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    className="hidden-file-input"
                                    required
                                />
                            </label>
                            {formData.screenshot && (
                                <span className="file-name">
                                    {formData.screenshot.name}
                                </span>
                            )}
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">
                        Add Payment Verification
                    </button>
                </form>
            </div>

            <div className="existing-payments">
                <h3 className="existing-title">Existing Verifications</h3>
                {loading ? (
                    <p>Loading payments...</p>
                ) : error ? (
                    <p className="error-text">Error: {error}</p>
                ) : payments.length === 0 ? (
                    <p>No payment verifications found.</p>
                ) : (
                    <table className="payments-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Token</th>
                                <th>Date Added</th>
                                <th>Screenshot</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment, index) => (
                                <tr key={index}>
                                    <td>{payment.name}</td>
                                    <td>{payment.username}</td>
                                    <td>{payment.token}</td>
                                    <td>{new Date(payment.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <button
                                            onClick={() => window.open(payment.screenshotUrl, '_blank')}
                                            className="view-btn"
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </section>
    );
};


  const LeagueTableSection = () => {
    const [editingRow, setEditingRow] = useState(null);
    const [editValues, setEditValues] = useState({});
  
    const calculatePoints = (team) => 3 * team.wins + team.draws;
    const calculateGoalDifference = (team) => team.goalsScored - team.goalsConceded;
    const calculateMatchesPlayed = (team) => team.wins + team.draws + team.losses;
  
    const sortedTableData = [...tableData].sort((a, b) => {
      const pointsA = calculatePoints(a);
      const pointsB = calculatePoints(b);
  
      if (pointsA !== pointsB) return pointsB - pointsA;
      const goalDiffA = calculateGoalDifference(a);
      const goalDiffB = calculateGoalDifference(b);
      return goalDiffB - goalDiffA;
    });
  
    const handleInputChange = (e, field) => {
      setEditValues({ ...editValues, [field]: e.target.value });
    };
  
    const handleSave = (row) => {
      const updatedValues = {
        ...row,
        ...editValues,
        wins: parseInt(editValues.wins || row.wins, 10),
        draws: parseInt(editValues.draws || row.draws, 10),
        losses: parseInt(editValues.losses || row.losses, 10),
        goalsScored: parseInt(editValues.goalsScored || row.goalsScored, 10),
        goalsConceded: parseInt(editValues.goalsConceded || row.goalsConceded, 10),
      };
      updateTable(row.username, updatedValues);
      setEditingRow(null);
      setEditValues({});
      window.location.reload();
    };
  
    return (
      <section className="card">
        <h2>League Table</h2>
        {loading.table ? (
          <p>Loading...</p>
        ) : error.table ? (
          <p className="error">{error.table}</p>
        ) : (
          <div className="table-container">
            <table className="league-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>User Name</th>
                  <th>Base Team</th>
                  <th>Matches Played</th>
                  <th>Wins</th>
                  <th>Draws</th>
                  <th>Losses</th>
                  <th>Goals Scored</th>
                  <th>Goals Conceded</th>
                  <th>Goal Difference</th>
                  <th>Points</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedTableData.map((row, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{row.username}</td>
                    <td>{row.team}</td>
                    <td>{calculateMatchesPlayed(row)}</td>
                    <td>
                      {editingRow === row.username ? (
                        <input
                          type="number"
                          defaultValue={row.wins}
                          onChange={(e) => handleInputChange(e, 'wins')}
                        />
                      ) : (
                        row.wins
                      )}
                    </td>
                    <td>
                      {editingRow === row.username ? (
                        <input
                          type="number"
                          defaultValue={row.draws}
                          onChange={(e) => handleInputChange(e, 'draws')}
                        />
                      ) : (
                        row.draws
                      )}
                    </td>
                    <td>
                      {editingRow === row.username ? (
                        <input
                          type="number"
                          defaultValue={row.losses}
                          onChange={(e) => handleInputChange(e, 'losses')}
                        />
                      ) : (
                        row.losses
                      )}
                    </td>
                    <td>
                      {editingRow === row.username ? (
                        <input
                          type="number"
                          defaultValue={row.goalsScored}
                          onChange={(e) => handleInputChange(e, 'goalsScored')}
                        />
                      ) : (
                        row.goalsScored
                      )}
                    </td>
                    <td>
                      {editingRow === row.username ? (
                        <input
                          type="number"
                          defaultValue={row.goalsConceded}
                          onChange={(e) => handleInputChange(e, 'goalsConceded')}
                        />
                      ) : (
                        row.goalsConceded
                      )}
                    </td>
                    <td>{calculateGoalDifference(row)}</td>
                    <td>{calculatePoints(row)}</td>
                    <td>
                      {editingRow === row.username ? (
                        <button onClick={() => handleSave(row)}>Save</button>
                      ) : (
                        <button onClick={() => setEditingRow(row.username)}>Edit</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <button onClick={createTable}>Create New Table</button>
      </section>
    );
  };

  // Render Content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <>
            <RegisteredUsersSection />
            <PaymentSection />
            <LeagueTableSection />
          </>
        );
      case 'users':
        return <RegisteredUsersSection />;
      case 'payments':
        return <PaymentSection />;
      case 'league':
        return <LeagueTableSection />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h3>Admin Dashboard</h3>
        </div>
        <ul className="sidebar-menu">
          <li 
            className={activeSection === 'dashboard' ? 'active' : ''} 
            onClick={() => setActiveSection('dashboard')}
          >
            Dashboard
          </li>
          <li 
            className={activeSection === 'users' ? 'active' : ''} 
            onClick={() => setActiveSection('users')}
          >
            Users
          </li>
          <li 
            className={activeSection === 'payments' ? 'active' : ''} 
            onClick={() => setActiveSection('payments')}
          >
            Payments
          </li>
          <li 
            className={activeSection === 'league' ? 'active' : ''} 
            onClick={() => setActiveSection('league')}
          >
            League Table
          </li>
        </ul>
        <SignOutButton />
      </nav>
      <main className="dashboard-content">{renderContent()}</main>
    </div>
  );
};

export default Dashboard;