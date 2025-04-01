import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen bg-green-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold text-green-600 mb-4">Transfer Successful!</h1>
                <p className="text-gray-700 mb-6">Your money has been transferred successfully.</p>
                <button
                    onClick={() => navigate('/dashboard')}
                    className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
                >
                    Go to Dashboard
                </button>
            </div>
        </div>
    );
};

export default Success;