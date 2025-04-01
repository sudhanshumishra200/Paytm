import { Heading } from "../Components/Heading";
import { SubHeading } from "../Components/SubHeading";
import { InputBox } from "../Components/InputBox";
import { BottomWarning } from "../Components/BottomWarning";
import { Button } from "../Components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Signin() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // State to store error message
    const navigate = useNavigate();

    return (
        <div className="bg-slate-400 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"SignIn"} />
                    <SubHeading label={"Enter your credentials to sign in"} />
                    <InputBox
                        type={"email"}
                        label={"Email"}
                        placeholder={"Email"}
                        onChange={(e) => {
                            setusername(e.target.value);
                        }}
                    />
                    <InputBox
                        type={"password"}
                        label={"Password"}
                        placeholder={"Password"}
                        onChange={(e) => {
                            setpassword(e.target.value);
                        }}
                    />
                    {errorMessage && (
                        <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
                    )}
                    <BottomWarning
                        label={"Signup to create new account"}
                        buttonText={"signup"}
                        to={"/signup"}
                    />
                    <div className="pt-4">
                        <Button
                            className={`w-full border-2 border-[#00baf2] py-3 px-6 rounded-lg hover:bg-[#00baf2] hover:text-white transition-all duration-200 font-semibold text-base shadow-md`}
                            label={"SignIn"}
                            onClick={async () => {
                                try {
                                    // Make the API call
                                    const response = await axios.post(
                                        "http://localhost:3000/api/v1/users/signin",
                                        {
                                            username,
                                            password,
                                        }
                                    );
                                    localStorage.setItem("token", response.data.token);
                                    // If successful, redirect to dashboard
                                    navigate("/dashboard");
                                } catch (error) {
                                    if (error.response) {
                                        // Set the error message from the backend
                                        setErrorMessage(error.response.data.message);
                                    } else {
                                        // Handle other errors (e.g., network issues)
                                        setErrorMessage("Something went wrong. Please try again.");
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}