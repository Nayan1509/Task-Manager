import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setError('Email is required.');
    } else if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      navigate('/signup');
      console.log('Signed up with email:', email);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-900 to-purple-800 text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Taskverse - <span className="text-purple-300">Your Universe of Productivity</span>
      </h1>

      <form
        className="flex flex-col md:flex-row items-center gap-4 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-white w-full md:w-2/3 px-4 py-2 rounded-md text-black focus:outline-none shadow-xl/30"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-white w-full md:w-1/3 text-indigo-900 px-6 py-2 rounded-md hover:bg-gray-200 transition shadow-xl/30"
        >
          Sign Up
        </button>
      </form>

      {/* Error message */}
      {error && (
        <p className="text-red-300 mt-2 text-sm text-center">{error}</p>
      )}

      <button
        className="mt-6 text-white border border-white px-6 py-2 rounded-md hover:bg-white hover:text-indigo-900 transition shadow-xl/30"
      onClick={() => navigate('/login')}
      >
        Already Registered? Login
      </button>
    </div>
  );
};

export default LandingPage;
