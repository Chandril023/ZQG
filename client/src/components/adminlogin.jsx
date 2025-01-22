import React from 'react';
import { SignIn, useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  React.useEffect(() => {
    if (isSignedIn) {
      setIsAuthenticated(true);
      navigate('/admin/dashboard');
    }
  }, [isSignedIn, setIsAuthenticated, navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Admin Login</h1>
        <div className="w-full max-w-md bg-white">
          <SignIn
            appearance={{
              elements: {
                card: "bg-white text-black border border-gray-700",
                formButtonPrimary: "bg-white text-black hover:bg-gray-200",
              },
            }}
            routing="path"
            path="/admin/login"
          />
        </div>
        <h6 className="text-sm mt-4">
          Return to{' '}
          <a
            href="/"
            className="underline hover:text-gray-300"
          >
            Home
          </a>
        </h6>
      </div>
    </div>
  );
};

export default AdminLogin;
