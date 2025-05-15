import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to MailDash</h1>
      <p className="text-lg mb-8 text-gray-600">
        A modern mailing dashboard built with React, Tailwind, and Shadcn UI.
      </p>
      <div className="flex gap-4">
        <Link to="/signin">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Sign In
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
