import React, { useState, useEffect } from 'react';
import './adminlanding.css';

const AdminLanding = () => {
  // ... Previous state and functions remain the same ...
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState({
    users: true,
    matches: true,
    table: true
  });
  const [error, setError] = useState({
    users: null,
    matches: null,
    table: null
  });

  // All the previous useEffects and functions remain the same
  useEffect(() => {
    fetch('/admin/registered-users')
      .then(res => res.json())
      .then(data => {
        setRegisteredUsers(data);
        setLoading(prev => ({ ...prev, users: false }));
      })
      .catch(err => {
        setError(prev => ({ ...prev, users: 'Unable to fetch registered users' }));
        setLoading(prev => ({ ...prev, users: false }));
      });
  }, []);

  useEffect(() => {
    fetch('/admin/fetch-table')
      .then(res => res.json())
      .then(data => {
        setTableData(data);
        setLoading(prev => ({ ...prev, table: false }));
      })
      .catch(err => {
        setError(prev => ({ ...prev, table: 'Unable to fetch table data' }));
        setLoading(prev => ({ ...prev, table: false }));
      });
  }, []);

  const generateMatch = () => {
    if (registeredUsers.length < 2) {
      alert('Not enough users to generate a match');
      return;
    }

    const shuffled = [...registeredUsers].sort(() => 0.5 - Math.random());
    const newMatch = {
      userA: shuffled[0],
      userB: shuffled[1],
      score: '0-0'
    };

    setMatches(prev => [...prev, newMatch]);
  };

  const updateMatchScore = (index, score) => {
    const updatedMatches = [...matches];
    updatedMatches[index].score = score;
    setMatches(updatedMatches);
  };

  const updateTableRow = async (index, updatedData) => {
    try {
      const response = await fetch('/admin/edit-table', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData)
      });

      if (response.ok) {
        const newTableData = [...tableData];
        newTableData[index] = updatedData;
        const sortedData = sortTableData(newTableData);
        setTableData(sortedData);
      }
    } catch (err) {
      alert('Failed to update table');
    }
  };

  const sortTableData = (data) => {
    return data.sort((a, b) => {
      if (a.points !== b.points) return b.points - a.points;
      if (a.goalDifference !== b.goalDifference) return b.goalDifference - a.goalDifference;
      if (a.matchesPlayed !== b.matchesPlayed) return b.matchesPlayed - a.matchesPlayed;
      return b.goalsGiven - a.goalsGiven;
    });
  };

  return (
    <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
      {/* Navbar */}
      <nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
        <div class="container-fluid">
          <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
            <img src="/api/placeholder/400/320" alt="logo"/>
          </a>

          <div class="collapse navbar-collapse" id="sidebarCollapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="bi bi-house"></i> Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="bi bi-people"></i> Users
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="bi bi-trophy"></i> Matches
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="bi bi-table"></i> League Table
                </a>
              </li>
            </ul>
            
            <hr class="navbar-divider my-5 opacity-20"/>

            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="bi bi-person-square"></i> Account
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="bi bi-box-arrow-left"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div class="h-screen flex-grow-1 overflow-y-lg-auto">
        <header class="bg-surface-primary border-bottom pt-6">
          <div class="container-fluid">
            <div class="mb-npx">
              <div class="row align-items-center">
                <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                  <h1 class="h2 mb-0 ls-tight">Admin Dashboard</h1>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main class="py-6 bg-surface-secondary">
          <div class="container-fluid">
            {/* Registration Section */}
            <div className="card shadow border-0 mb-7">
              <div className="card-header">
                <h5 className="mb-0">Registered Users</h5>
              </div>
              <div className="table-responsive">
                {loading.users ? (
                  <p className="p-4">Loading...</p>
                ) : error.users ? (
                  <p className="p-4 text-danger">{error.users}</p>
                ) : registeredUsers.length === 0 ? (
                  <p className="p-4">No new registrations till now</p>
                ) : (
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Team</th>
                        <th>Phone Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      {registeredUsers.map((user, index) => (
                        <tr key={index}>
                          <td>{user.name}</td>
                          <td>{user.username}</td>
                          <td>{user.team}</td>
                          <td>{user.phoneNumber}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            {/* Match Generation Section */}
            <div className="card shadow border-0 mb-7">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Set Match</h5>
                <button 
                  className="btn btn-sm btn-primary" 
                  onClick={generateMatch}
                >
                  Generate Random Match
                </button>
              </div>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Match</th>
                      <th>Score</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matches.map((match, index) => (
                      <tr key={index}>
                        <td>{`${match.userA.username} vs ${match.userB.username}`}</td>
                        <td>{match.score}</td>
                        <td>
                          <input 
                            type="text" 
                            className="form-control form-control-sm"
                            placeholder="Format: 2-1"
                            onChange={(e) => updateMatchScore(index, e.target.value)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* League Table Section */}
            <div className="card shadow border-0 mb-7">
              <div className="card-header">
                <h5 className="mb-0">League Table</h5>
              </div>
              <div className="table-responsive">
                {loading.table ? (
                  <p className="p-4">Loading...</p>
                ) : error.table ? (
                  <p className="p-4 text-danger">{error.table}</p>
                ) : (
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Team</th>
                        <th>Goals Given</th>
                        <th>Goals Conceded</th>
                        <th>Goal Difference</th>
                        <th>Wins</th>
                        <th>Draws</th>
                        <th>Losses</th>
                        <th>Points</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.name}</td>
                          <td>{row.username}</td>
                          <td>{row.team}</td>
                          <td>{row.goalsGiven}</td>
                          <td>{row.goalsConceded}</td>
                          <td>{row.goalDifference}</td>
                          <td>{row.wins}</td>
                          <td>{row.draws}</td>
                          <td>{row.losses}</td>
                          <td>{row.points}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-primary"
                              onClick={() => {
                                const updatedData = {
                                  ...row,
                                  goalsGiven: prompt('Goals Given:', row.goalsGiven),
                                  goalsConceded: prompt('Goals Conceded:', row.goalsConceded),
                                  wins: prompt('Wins:', row.wins),
                                  draws: prompt('Draws:', row.draws),
                                  losses: prompt('Losses:', row.losses)
                                };
                                updateTableRow(index, updatedData);
                              }}
                            >
                              Update
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLanding;