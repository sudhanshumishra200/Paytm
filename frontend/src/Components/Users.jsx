import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    // Fetch users from the backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/v1/users/bulk?filter=" + filter
                );
                setUsers(response.data.user);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [filter]);

    return (
        <div className="mt-6">
            <div className="font-bold text-2xl mb-4 text-gray-800">Users</div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>
            <div className="space-y-4">
                {users.map((user) => (
                    <User key={user._id} user={user} />
                ))}
            </div>
        </div>
    );
};

function User({ user }) {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            {/* User Avatar */}
            <div className="flex items-center">
                <div className="rounded-full h-12 w-12 bg-blue-100 flex justify-center items-center text-blue-600 font-bold text-xl mr-4">
                    {user.firstName[0]}
                </div>
                <div>
                    <div className="text-lg font-semibold text-gray-800">
                        {user.firstName} {user.lastName}
                    </div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                </div>
            </div>

            {/* Send Money Button */}
            <Button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 font-semibold shadow-md"
                label={"Send Money"}
                onClick={() => {
                    navigate("/send?id=" + user._id + "&name=" + user.firstName);
                }}
            />
        </div>
    );
}