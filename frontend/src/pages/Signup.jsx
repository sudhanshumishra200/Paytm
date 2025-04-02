import { useState } from "react"
import { Heading } from "../Components/Heading"
import { SubHeading } from "../Components/SubHeading"
import { Button } from "../Components/Button"
import { InputBox } from "../Components/InputBox"
import { BottomWarning } from "../Components/BottomWarning"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// if u want to put custom bg image:- bg-[url('/img/hero-pattern.svg')]
export function Signup (){

const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [username, setuserName] = useState("")
const [password, setpassword] = useState("")
const navigate = useNavigate()

    return <div className="bg-slate-400 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"SignUp"}/>
                <SubHeading label={"Create a new account"}/>
                <InputBox type={"text"} label = {"First Name"} placeholder={"John"} onChange={(e) => {
                    setFirstName(e.target.value)
                }}/>
                <InputBox type={"text"} label = {"Last Name"} placeholder={"Down"} onChange={(e) => {
                    setLastName(e.target.value)
                }}/>
                <InputBox type={"email"} label = {"Email"} placeholder={"Email"} onChange={(e) => {
                    setuserName(e.target.value)
                }}/>
                <InputBox type={"password"} label = {"Password"} placeholder={"Password"} onChange={(e) => {
                    setpassword(e.target.value)
                }}/>
                <BottomWarning label={"Signin to existing account"} buttonText={"signin"} to={"/signin"}/>
                <div className="pt-4">
                <Button className={`w-full border-2 border-[#00baf2] py-3 px-6 rounded-lg hover:bg-[#00baf2] hover:text-white transition-all duration-200 font-semibold text-base shadow-md `}
                 label={"SignUp"} onClick={ async ()=> {
                    // here we can pass in the key value or without the key value same thing
                    const response = await axios.post(`${API_BASE_URL}/api/v1/users/signup`, {
                        // the key must be match with the defined key at the backend side
                        username,
                        firstName,
                        lastName,
                        password
                    });
                    localStorage.setItem("token", response.data.token) // here we are the storing the response to the local storage of the browser
                    navigate("/dashboard")
                }}/>
                </div>
            </div>

        </div>

    </div>
}