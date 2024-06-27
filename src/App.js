import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Landing_Page from './components/Landing_Page/Landing_Page';
import Signup from './components/Sign Up/Sign_Up';
import Login from './components/Login/Login';



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