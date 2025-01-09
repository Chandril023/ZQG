import React, { useState, useEffect } from 'react';
import './adminlanding.css';
import { SignOutButton } from '@clerk/clerk-react';

const Dashboard = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [activeSection, setActiveSection] = useState('dashboard');
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

  useEffect(() => {
    fetch('/admin/registered-users')
      .then(res => res.json())
      .then(data => {
        setRegisteredUsers(data);
        setLoading(prev => ({ ...prev, users: false }));
      })
      .catch(() => {
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
      .catch(() => {
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

  const RegisteredUsersSection = () => (
    <section className="card">
      <h2>Registered Users</h2>
      {loading.users ? (
        <p>Loading...</p>
      ) : error.users ? (
        <p className="error">{error.users}</p>
      ) : (
        <ul>
          {registeredUsers.map((user, index) => (
            <li key={index}>{user.name} ({user.username})</li>
          ))}
        </ul>
      )}
    </section>
  );

  const MatchesSection = () => (
    <section className="card">
      <h2>Set Match</h2>
      <button onClick={generateMatch}>Generate Match</button>
      <ul>
        {matches.map((match, index) => (
          <li key={index}>{match.userA.username} vs {match.userB.username}</li>
        ))}
      </ul>
    </section>
  );

  const LeagueTableSection = () => (
    <section className="card">
      <h2>League Table</h2>
      {loading.table ? (
        <p>Loading...</p>
      ) : error.table ? (
        <p className="error">{error.table}</p>
      ) : (
        <ul>
          {tableData.map((row, index) => (
            <li key={index}>{row.name} - Points: {row.points}</li>
          ))}
        </ul>
      )}
    </section>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <>
            <RegisteredUsersSection />
            <MatchesSection />
            <LeagueTableSection />
          </>
        );
      case 'users':
        return <RegisteredUsersSection />;
      case 'matches':
        return <MatchesSection />;
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
            className={activeSection === 'matches' ? 'active' : ''} 
            onClick={() => setActiveSection('matches')}
          >
            Matches
          </li>
          <li 
            className={activeSection === 'league' ? 'active' : ''} 
            onClick={() => setActiveSection('league')}
          >
            League Table
          </li>
          <li><SignOutButton/></li>
        </ul>
      </nav>
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;