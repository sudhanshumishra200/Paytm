import { useState, useEffect } from "react";
import axios from "axios";
import { Appbar } from "../Components/Appbar";
import { Balance } from "../Components/Balance";
import { Users } from "../Components/Users";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function Dashboard() {
    const [balance, setBalance] = useState(null); // State to store the balance
    const [error, setError] = useState(null); // State to store any error messages

    // Function to fetch the balance from the backend
    const fetchBalance = async () => {
        try {
            const token = localStorage.getItem("token"); // Get the token from localStorage
            const response = await axios.get(`${API_BASE_URL}/api/v1/account/balance`, {
                headers: {
                    Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
                },
            });
            setBalance(response.data.balance); // Update the balance state
        } catch (error) {
            console.error("Error fetching balance:", error);
            setError(error.response?.data?.message || "Failed to fetch balance");
        }
    };

    // Fetch the balance when the component mounts
    useEffect(() => {
        fetchBalance();
    }, []);

    return (
        <div>
            <Appbar />
            <div className="m-8">
                {error ? (
                    <div className="text-red-500 text-sm mb-4">{error}</div>
                ) : (
                    <Balance value={balance !== null ? balance.toLocaleString() : "Loading..."} />
                )}
                <Users />
            </div>
        </div>
    );
}