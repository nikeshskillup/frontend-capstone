import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Landing_Page from './Landing_Page/Landing_Page';
import Signup from './Sign Up/Sign_Up';
import Login from './Login/Login';



function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing_Page />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />



                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;