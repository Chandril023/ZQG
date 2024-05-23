import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'


export default function Register() {
    const BACKEND_URL=process.env.BACKEND_URL;
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [inGameId, setInGameId] = useState('');
    const [team, setTeam] = useState('');
    const [paymentToken, setPaymentToken] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [error, setError] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!acceptTerms) {
            setError('Please accept the terms and conditions.');
            return;
        }

        try {
            // Send a request to create the user
            const response = await axios.post(`https://zqgofficialapp-979i.onrender.com/admin/create-user`, {
                fullName,
                email,
                phoneNumber,
                inGameId,
                team,
                paymentToken,
            });
           
            if (response.status === 201) {
                // User created successfully, reload the page
                window.location.reload();
           }
           else if (response.data.success) {
                // User created successfully, handle success state within React
                console.log('User created successfully!');
                // Optionally clear form fields here
                setFullName('');
                setEmail('');
                setPhoneNumber('');
                setInGameId('');
                setTeam('');
                setPaymentToken('');
            } else {
                // Handle error from backend (optional)
                setError('Incorrect username or payment token.');
                setShowErrorMessage(true);
                setTimeout(() => setShowErrorMessage(false), 5000);
            }
        } catch (error) {
            // Handle error response status 400 (Bad Request)
            if (error.response && error.response.status === 400) {
                setError('Invalid username or payment token.');
                setShowErrorMessage(true);
                setTimeout(() => setShowErrorMessage(false), 5000);
            } else {
                console.error('Error creating user:', error);
            }
        }
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <form className="register-form" onSubmit={handleSubmit}>
                {/* Account section */}
                <div className="row">
                    <h4>Account</h4>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="email" className="form-control" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                </div>

                {/* In Game Data and Select Team section */}
                <div className="row">
                    <div className="col-md-6">
                        <h4>In Game Data</h4>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="In Game ID" value={inGameId} onChange={(e) => setInGameId(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4>Select Team</h4>
                        <div className="form-group">
                            <select className="form-control" value={team} onChange={(e) => setTeam(e.target.value)}>
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
                            </select>
                        </div>
                    </div>
                </div>

                {/* Payment Details section */}
                <div className="row">
                    <h4>Payment Details</h4>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Enter Payment Token" value={paymentToken} onChange={(e) => setPaymentToken(e.target.value)} />
                    </div>
                </div>

                {/* Terms and Conditions section */}
                <div className="row">
                    <h4>Terms and Conditions</h4>
                    <div className="form-group">
                        <div className="form-check">
                            <input id="terms" type="checkbox" className="form-check-input" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} />
                            <label className="form-check-label" htmlFor="terms">I accept the terms and conditions for signing up to this, and hereby confirm I have read the rules.</label>
                        </div>
                    </div>
                </div>

                 {/* Error message */}
                 {showErrorMessage && (
                    <div className="row justify-content-center">
                        <div className="col-md-4 error-message">{error}</div>
                    </div>
                )}

                {/* Submit button */}
                <div className="row justify-content-center">
                    <button type="submit" className="btn btn-primary col-md-4">Submit</button>
                </div>

                <div className="row justify-content-center">
                    <Link to="/home" className="col-md-4 text-center">Return to Home</Link>
                </div>
            </form>
        </div>
    );
}
