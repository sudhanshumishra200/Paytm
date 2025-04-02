// Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Components/Button'; // Adjust path as needed

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    

    return (
        <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-100 to-blue-50'
        }`}>
            <div className="relative w-80 sm:w-96">
                {/* Toggle Button */}
                <button
                    onClick={toggleDarkMode}
                    className={`absolute -top-12 right-0 p-2 rounded-full ${
                        isDarkMode 
                            ? 'bg-gray-700 text-white hover:bg-gray-600' 
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    } transition-all duration-200 shadow-md`}
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? '☀️' : '🌙'}
                </button>

                {/* Card */}
                <div className={`p-8 rounded-xl shadow-xl ${
                    isDarkMode 
                        ? 'bg-gray-800 text-white' 
                        : 'bg-white text-gray-800'
                } transform transition-all duration-300 hover:scale-105`}>
                    {/* Paytm Logo placeholder */}
                    <div className="flex justify-center mb-6">
                        <div className="w-28 h-14 bg-[#00baf2] rounded-lg flex items-center justify-center text-white font-bold text-xl tracking-wide">
                            Paytm
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-8 tracking-tight">
                        Welcome to Paytm
                    </h2>

                    <div className="flex flex-col gap-5">
                        <Link to="/signin">
                            <Button
                                className="w-full bg-[#00baf2] text-white py-3 px-6 rounded-lg hover:bg-[#00a2d6] transition-all duration-200 font-semibold text-base shadow-md"
                            >
                                Sign In
                            </Button>
                        </Link>

                        <Link to = "/signup">
                        <Button
                            className={`w-full border-2 border-[#00baf2] py-3 px-6 rounded-lg hover:bg-[#00baf2] hover:text-white transition-all duration-200 font-semibold text-base shadow-md ${
                                isDarkMode ? 'text-white' : 'text-[#00baf2]'
                            }`}
                        >
                            Sign Up
                        </Button>
                        </Link>
                    </div>

                    <div className="mt-6 text-center">
                        <Link
                            to="/forgot-password"
                            className={`text-sm hover:underline transition-colors duration-200 ${
                                isDarkMode ? 'text-[#00baf2]' : 'text-[#00baf2]'
                            }`}
                        >
                            Forgot Password?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;