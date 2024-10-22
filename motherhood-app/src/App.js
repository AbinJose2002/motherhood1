import React from 'react';
import logo from './logo.svg';
import './App.css';
import LogIn from './Components/LogIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import DoctorLogin from './Components/dlogin';
import { Home } from './Components/Home';
import Doctorsignup from './Components/Doctorsignup';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/dlogin' element={<DoctorLogin />} />
          <Route path='/dSignup' element={<Doctorsignup />} />
          <Route path='/dashboard/*' element={<Dashboard />} /> {/* Use /* to allow nested routes */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;