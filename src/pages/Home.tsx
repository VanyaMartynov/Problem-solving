import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome to Our App</h1>
        <div className="space-y-4">
          <Link
            to="/login"
            className="block w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 