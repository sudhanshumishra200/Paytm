import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import Success from './pages/Success';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/send" element={<SendMoney/>}/>
        <Route path="/success" element={<Success/>} />
        <Route path="/error" element={<Error/>} />
        <Route path="/home" element={<Home/>} />

        

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
