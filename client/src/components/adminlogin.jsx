import React from 'react';
import { SignIn, useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import './admin-login.css';

const AdminLogin = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  // Use React's useEffect to handle the redirect
  React.useEffect(() => {
    if (isSignedIn) {
      setIsAuthenticated(true);
      navigate('/admin/dashboard');
    }
  }, [isSignedIn, setIsAuthenticated, navigate]);

  return (
    <div className="admin-login-container">
      <h1>Admin Login</h1>
      <div className="sign-in-wrapper">
        <SignIn
          // Remove afterSignIn prop as we're handling it with useEffect
          routing="path"
          path="/admin/login"
        />
        <h6>return to <a href='/'>Home</a></h6>
      </div>
    </div>
  );
};

export default AdminLogin;