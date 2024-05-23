import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function AdminRegister() {
   
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [inGameId, setInGameId] = useState('');
    const [team, setTeam] = useState('');
    const [paymentToken, setPaymentToken] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber:'',
        inGameId:'',
        team: '',
      });

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!acceptTerms) {
            setError('Please accept the terms and conditions.');
            return;
        }

        try {
            // Send a request to create the user
            const response = await axios.post('http://localhost:5000/admin/register-user', {
                fullName,
                email,
                phoneNumber,
                inGameId,
                team,
                paymentToken,
            });

            if (response.data.success) {
                // User created successfully
                console.log('User created successfully!');
                window.location.reload();
                 
                // Reset error message
                setError('');
            } else {
                // Handle error from backend
                console.error('Error creating user:', response.data.error);
                setError(response.data.error);
            }
        } catch (error) {
            console.error('Error creating user:', error);
            setError('Internal server error');
        }
    };

    return (
        <>
            <form className="register-form" onSubmit={handleSubmit}>
                {/* Account section */}
                <div className="row">
                    <h4>Account</h4>
                    <div className="input-group input-group-icon">
                        <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        <div className="input-icon"><i className="fa fa-user"></i></div>
                    </div>
                    <div className="input-group input-group-icon">
                        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div className="input-icon"><i className="fa fa-envelope"></i></div>
                    </div>
                    <div className="input-group input-group-icon">
                        <input type='text' placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        <div className="input-icon"><i className="fa fa-key"></i></div>
                    </div>
                </div>

                {/* In Game Data and Select Team section */}
                <div className="row">
                    <div className="col-half">
                        <h4>In Game Data</h4>
                        <div className="input-group input-group-icon">
                            <input type="text" placeholder="In Game ID" value={inGameId} onChange={(e) => setInGameId(e.target.value)} />
                            <div className="input-icon"><i className="fa fa-user"></i></div>
                        </div>
                    </div>
                    <div className="col-half">
                        <h4>Select Team</h4>
                        <div className="input-group">
                            <select id="team-select" value={team} onChange={(e) => setTeam(e.target.value)}>
                                <option value="">All Teams</option>
                                <option value="Manchester United">Manchester United</option>
                                <option value="Manchester City">Manchester City</option>
                                <option value="Arsenal">Arsenal</option>
                                <option value="Chelsea">Chelsea</option>
                                <option value="Totenham">Totenham</option>
                                <option value="Real Madrid">Real Madrid</option>
                                <option value="Barcelona">Barcelona</option>
                                <option value="Liverpool">Liverpool</option>
                                <option value="Bayern Munich">Bayern Munich</option>
                                {/* Other options */}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Payment Details section */}
                <div className="row">
                    <h4>Payment Details</h4>
                    <div className="input-group input-group-icon">
                        <input type="text" placeholder="Enter Payment Token" value={paymentToken} onChange={(e) => setPaymentToken(e.target.value)} />
                        <div className="input-icon"><i className="fa fa-user"></i></div>
                    </div>
                </div>
                {/* Terms and Conditions section */}
                <div className="row">
                    <h4>Terms and Conditions</h4>
                    <div className="input-group">
                        <input id="terms" type="checkbox" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} />
                        <label htmlFor="terms">I accept the terms and conditions for signing up to this, and hereby confirm I have read the rules.</label>
                    </div>
                </div>

                {/* Error message */}
                {error && <div className="error-message">{error}</div>}

                {/* Submit button */}
                <div className="row">
                    <button type="submit">Submit</button>
                </div>
            </form>

        </>
    );
}
