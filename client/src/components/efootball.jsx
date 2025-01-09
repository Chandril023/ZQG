import React, { useState } from 'react';
import Menu from './menu';
import Footer from './footer';
import './efootball.css';

function Efootball() {
  const initialTeams = [
    // England
    'Manchester United',
    'Manchester City',
    'Arsenal',
    'Liverpool',
    'Chelsea',
    'Tottenham Hotspur',

    // Spain
    'Real Madrid',
    'Barcelona',
    'Atletico Madrid',
    'Sevilla',
    'Villarreal',
    'Real Sociedad',

    // Portugal
    'Sporting CP',
    'Benfica',
    'Porto',
    'Braga',
    'Vitória SC',
    'Boavista',

    // Netherlands
    'Ajax',
    'PSV Eindhoven',
    'Feyenoord',
    'AZ Alkmaar',
    'FC Twente',
    'SC Heerenveen',

    // France
    'Paris Saint-Germain (PSG)',
    'Olympique Lyonnais',
    'Olympique de Marseille',
    'AS Monaco',
    'Lille OSC',
    'RC Lens',

    // Germany
    'Bayern Munich',
    'Borussia Dortmund',
    'RB Leipzig',
    'Bayer Leverkusen',
    'Eintracht Frankfurt',
    'Union Berlin',

    // Italy
    'AC Milan',
    'Inter Milan',
    'Juventus',
    'Napoli',
    'AS Roma',
    'Lazio',

    // India
    'Mumbai City FC',
    'ATK Mohun Bagan',
    'Bengaluru FC',
    'Hyderabad FC',
    'Kerala Blasters',
    'Odisha FC',

    // USA
    'LA Galaxy',
    'Inter Miami CF',
    'Seattle Sounders FC',
    'Atlanta United',
    'Philadelphia Union',
    'New York City FC',

    // Saudi Arabia
    'Al-Ittihad',
    'Al-Hilal',
    'Al-Nassr',
    'Al-Ahli',
    'Al-Shabab',
    'Al-Ettifaq'
  ];

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    team: '',
    phone: '',
  });

  const [error, setError] = useState('');
  const [registeredTeams, setRegisteredTeams] = useState([]); // Tracks registered teams

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!formData.name || !formData.username || !formData.team || !formData.phone) {
      setError('All fields are required.');
      return;
    }

    // Check if the team is already taken
    if (registeredTeams.includes(formData.team)) {
      setError('This team has already been selected.');
      return;
    }

    setError('');
    alert('Registration successful!');
    console.log('Form Data:', formData);

    // Add the team to the list of registered teams
    setRegisteredTeams([...registeredTeams, formData.team]);

    // Reset form
    setFormData({
      name: '',
      username: '',
      team: '',
      phone: '',
    });
  };

  // Filter out teams that are already registered
  const availableTeams = initialTeams.filter(team => !registeredTeams.includes(team));

  return (
    <>
      <Menu />
      <div className="overlay">
        <div className="container-head-1">
          <div className="pt-5 text-white">
            <header className="py-5 mt-5">
              <h4 className="lead mb-0">ZQG</h4>
              <h1 className="dm-serif-display-regular">Efootball Tournament 2025</h1>
              <h4 className="lead mb-0">Esports</h4>
            </header>
          </div>
        </div>
        <form className="registration-form-container" onSubmit={handleSubmit}>
          <h1 className="dm-serif-display-regular">Registrations Open</h1>
          {error && <p className="error-message">{error}</p>}
          <label htmlFor="name" className="text-white">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter your full name'
            required
          />
          <label htmlFor="username" className="text-white">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder='Enter username (e.g., @username)'
            required
          />
          <label htmlFor="team" className="text-white">Team</label>
          <select
            id="team"
            name="team"
            value={formData.team}
            onChange={handleChange}
            required
          >
            <option value="">--Choose a team--</option>
            {availableTeams.map((team, index) => (
              <option key={index} value={team}>
                {team}
              </option>
            ))}
          </select>
          <label htmlFor="phone" className="text-white">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder='phone: 123-456-7890'
          />
          <button type="submit" className="btn btn-primary">Register Now</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Efootball;
