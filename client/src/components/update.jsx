import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';


function Update() {

  const [redirectTo, setRedirectTo] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    matchesPlayed: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    goalsScored: 0,
    goalsConceded: 0

  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [usernames, setUsernames] = useState([]); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'matchesPlayed' ? parseInt(value) : value, // Parse matchesPlayed to integer
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`https://zqgofficialapp-979i.onrender.com/admin/update-player/${formData.fullName}`, formData);
      console.log('Player stats updated successfully:', formData);
      setFormData({
        fullName: '',
        matchesPlayed: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        goalsScored: 0,
        goalsConceded: 0
      });
  
    } catch (error) {
      console.error('Error updating player stats:', error);
      setError('Error updating player stats');
    }
  };

  const fetchUsernames = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://zqgofficialapp-979i.onrender.com/admin/table-users`); // Adjusted endpoint
      setUsernames(response.data.allUsernames);
    } catch (error) {
      console.error('Error fetching usernames:', error);
      setError('Error fetching usernames');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsernames();
  }, []);

  return (
    <form className='registerform' onSubmit={handleSubmit}>
      <h2>Player Stats</h2>
      <div className="input-group input-group-icon">
        <label htmlFor="fullName">Full Name:</label>
        <p>
        <select id="fullName" name="fullName" value={formData.fullName} onChange={handleChange}>
          {isLoading ? (
            <option>Loading...</option>
          ) : error ? (
            <option disabled>{error}</option>
          ) : (
            usernames.map((username) => (
                <option key={username} value={username}>
                  {username}
                </option>
            ))
          )}
        </select>
        </p>
      </div>
      <div className='row'>
      <div className="input-group input-group-icon">
        <p>
        <label htmlFor="matchesPlayed">Matches Played:</label>
        <input
          type="number"
          name="matchesPlayed"
          id="matchesPlayed"
          value={formData.matchesPlayed}
          onChange={handleChange}
          min="0"
          required
        />
        </p>
      </div>
      </div>
      <div className="row">
      <div className="input-group input-group-icon">
        <label htmlFor="wins">Wins:</label>
        <input
          type="number"
          name="wins"
          id="wins"
          value={formData.wins}
          onChange={handleChange}
          min="0"
          required
        />
      </div>
      <div className="input-group input-group-icon">
        <label htmlFor="losses">Losses:</label>
        <input
          type="number"
          name="losses"
          id="losses"
          value={formData.losses}
          onChange={handleChange}
          min="0"
          required
        />
      </div>
      <div className="input-group input-group-icon">
        <label htmlFor="draws">Draws:</label>
        <input
          type="number"
          name="draws"
          id="draws"
          value={formData.draws}
          onChange={handleChange}
          min="0"
          required
        />
      </div>
      </div>
      <div className="row">
      <div className="input-group input-group-icon">
        <label htmlFor="goalsScored">Goals Scored:</label>
        <input
          type="number"
          name="goalsScored"
          id="goalsScored"
          value={formData.goalsScored}
          onChange={handleChange}
          min="0"
          required
        />
      </div>
      <div className="input-group input-group-icon">
        <label htmlFor="goalsConceded">Goals Conceded:</label>
        <input
          type="number"
          name="goalsConceded"
          id="goalsConceded"
          value={formData.goalsConceded}
          onChange={handleChange}
          min="0"
          required
        />
      </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Update;
