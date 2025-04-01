import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen bg-red-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">Transaction Failed!</h1>
                <p className="text-gray-700 mb-6">Unfortunately, your transaction could not be completed.</p>
                <button
                    onClick={() => navigate('/dashboard')}
                    className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
                >
                    Go to Dashboard
                </button>
            </div>
        </div>
    );
};

export default Error;