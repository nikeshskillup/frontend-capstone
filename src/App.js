import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Layout from './components/Landing_Page/Landing_Page';
import Login from './components/Login/Login';
import Signup from './components/Sign Up/Sign_Up'
import InstantConsultation from './components/InstantConsultationBooking/InstantConsultation'
import FindDoctorSearch from './components/FindDoctorSearch/FindDoctorSearch';
import BookingConsultation from './components/BookingConsultation';
import Notification from './components/Notification/Notification';
// import ReviewForm from './components/ReviewForm/ReviewForm'
// import ProfileCard from './components/ProfileCard/ProfileCard';


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Notification>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Layout />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/instant-consultation" element={<InstantConsultation />} />
                        <Route path="/finddoctor" element={<FindDoctorSearch />} />
                        <Route path='/search/doctors' element={<BookingConsultation />} />
                        {/* <Route path='/reviews' element={<ReviewForm/>}/> */}
                        {/* <Route path='/profile' element={<ProfileCard/>} /> */}


                    </Routes>
                </Notification>
            </BrowserRouter>

        </div>
    );
}
export default App;