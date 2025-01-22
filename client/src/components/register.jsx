import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const RegistrationPage = () => {
  const initialTeams = [
    'Manchester United', 'Manchester City', 'Arsenal', 'Liverpool', 'Chelsea', 'Tottenham Hotspur',
    'Real Madrid', 'Barcelona', 'Atletico Madrid', 'Sevilla', 'Villarreal', 'Real Sociedad',
    // ... rest of the teams remain the same
  ];

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    team: '',
    phone: '',
    token: Math.random().toString(36).substr(2, 8).toUpperCase(),
  });

  const [registeredTeams, setRegisteredTeams] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (!formData.name || !formData.username || !formData.phone) {
      alert("Please fill all required fields");
      return;
    }
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.team) {
      alert("Please select a team");
      return;
    }

    if (registeredTeams.includes(formData.team)) {
      alert("This team has already been selected");
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/register-users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        alert(`Registration failed: ${errorMessage}`);
        return;
      }

      const data = await response.json();
      alert('Registration successful!');
      console.log('API Response:', data);

      setRegisteredTeams([...registeredTeams, formData.team]);
      
      setFormData({
        name: '',
        username: '',
        team: '',
        phone: '',
        token: Math.random().toString(36).substr(2, 8).toUpperCase(),
      });
      setStep(1);
    } catch (err) {
      console.error('Error:', err);
      alert('An error occurred while registering. Please try again later.');
    }
  };

  const availableTeams = initialTeams.filter(
    (team) => !registeredTeams.includes(team)
  );

  return (
    <div className="bg-black text-white flex flex-col justify-center px-5 ">
      <div className="relative sm:max-w-xl sm:mx-auto">
        <div className="relative bg-transparent px-3 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
              <div className="block pl-2 font-semibold text-xl self-start">
                <h2 className="leading-relaxed">Complete Your Registration</h2>
                <p className="text-sm font-normal leading-relaxed">Step {step} of 2</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-800 h-2 mt-4 rounded-full">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: step === 1 ? '50%' : '100%' }}
              ></div>
            </div>

            <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-white sm:text-lg sm:leading-7">
                {step === 1 ? (
                  // Step 1: Basic Information
                  <>
                    <div className="flex flex-col">
                      <label className="leading-loose">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Username *</label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        required
                      />
                    </div>
                  </>
                ) : (
                  // Step 2: Team Selection and Token
                  <>
                    <div className="bg-gray-800 p-4 rounded-md mb-4">
                      <label className="block text-sm font-medium">
                        Your Token Number
                      </label>
                      <div className="mt-1 text-lg font-mono font-bold text-blue-400">
                        {formData.token}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Select Team *</label>
                      <select
                        name="team"
                        value={formData.team}
                        onChange={handleChange}
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        required
                      >
                        <option value="">--Choose a team--</option>
                        {availableTeams.map((team, index) => (
                          <option key={index} value={team}>{team}</option>
                        ))}
                      </select>
                    </div>
                  </>
                )}
              </div>

              <div className="pt-4 flex items-center space-x-4">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 bg-gray-700 flex justify-center items-center text-white px-4 py-3 rounded-md focus:outline-none hover:bg-gray-600"
                  >
                    <ArrowLeft className="mr-2" size={20} />
                    Back
                  </button>
                )}
                {step === 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 bg-blue-500 flex justify-center items-center text-white px-4 py-3 rounded-md focus:outline-none hover:bg-blue-600"
                  >
                    Next
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-1 bg-green-500 flex justify-center items-center text-white px-4 py-3 rounded-md focus:outline-none hover:bg-green-600"
                  >
                    Register Now
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;