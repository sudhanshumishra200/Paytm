import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { Button } from '../Components/Button'; // Ensure the path is correct
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();

    return (
        <div className="flex justify-center h-screen bg-gray-100">
            <div className="h-full flex flex-col justify-center">
                <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h2 className="text-3xl font-bold text-center">Send Money</h2>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                                <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                            </div>
                            <h3 className="text-2xl font-semibold">{name}</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="amount"
                                >
                                    Amount (in Rs)
                                </label>
                                <input
                                    onChange={(e) => setAmount(e.target.value)}
                                    type="number"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    id="amount"
                                    placeholder="Enter amount"
                                />
                            </div>
                            <Button
                                label="Initiate Transfer"
                                className="w-full border-2 border-[#00baf2] py-3 px-6 rounded-lg hover:bg-[#00baf2] hover:text-white transition-all duration-200 font-semibold text-base shadow-md"
                                onClick={() => {
                                    // Validation for empty or invalid input
                                    if (!amount || amount <= 0) {
                                        alert("Please enter a valid amount.");
                                        return;
                                    }

                                    // Proceed with the API call if validation passes
                                    axios.post(`${API_BASE_URL}/api/v1/account/transfer`, {
                                        to: id,
                                        amount,
                                    }, {
                                        headers: {
                                            Authorization: "Bearer " + localStorage.getItem("token"),
                                        },
                                    }).then(() => {
                                        navigate('/success');
                                    }).catch(() => {
                                        navigate('/error');
                                    });
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};