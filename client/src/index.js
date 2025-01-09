import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 API
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from '@clerk/clerk-react';

// Fetch the Clerk public key from environment variables
const clerkPubKey = process.env.REACT_APP_CLERK_KEY;

if (!clerkPubKey) {
  console.error("Missing Clerk public key. Please set REACT_APP_CLERK_PUBLIC_KEY in your .env.local file.");
}

const root = ReactDOM.createRoot(document.getElementById('root')); // Initialize the root

root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);

// For performance measurements
reportWebVitals();
