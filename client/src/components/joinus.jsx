import React from 'react';
import logo from '../components/photos/zero.png';

const NewsletterSignup = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white p-6 sm:p-8 lg:p-12 text-center rounded-lg shadow-lg">
      <div className="flex justify-center mb-6">
        <img
          src={logo}
          alt="ZQG Logo"
          className="h-14 sm:h-20 md:h-24 w-auto transition-transform duration-300 transform scale-110 object-contain opacity-80 hover:opacity-100 hover:scale-125"
        />
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">JOIN THE CLUB</h2>
      <p className="mb-6 text-sm sm:text-base lg:text-lg">
        Sign up for our newsletter to stay updated on product drops, news, and exclusive offers.
      </p>
      <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Your email address"
          className="p-3 w-full sm:w-auto sm:flex-grow border border-gray-700 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:shadow-lg transition-all duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
