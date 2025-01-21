import React, { useState } from 'react';
import { X } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && agreed) {
      console.log('Subscribed:', email);
      // Handle subscription logic here
    }
  };

  return (
    <div className="bg-black p-8 rounded-2xl max-w-2xl w-full">
      {/* Wave Image */}
      <div className="w-full h-48 overflow-hidden rounded-xl mb-8">
        <img 
          src="/api/placeholder/800/200" 
          alt="Colorful waves"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white">
          Be the first who see the news
        </h2>
        <p className="text-gray-400">
          Your company may not be in the software business, but eventually, a software company will be in your business.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg 
                       text-white placeholder-gray-500 focus:outline-none focus:border-gray-700"
              required
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-lg font-medium 
                       hover:bg-gray-100 transition-colors disabled:opacity-50"
              disabled={!email || !agreed}
            >
              SUBSCRIBE
            </button>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 rounded border-gray-700 bg-gray-900"
            />
            <label htmlFor="terms" className="text-gray-400 text-sm">
              I agree with the{' '}
              <a href="#" className="text-white underline hover:text-gray-300">
                Terms and Conditions
              </a>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;