import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Component/Navbar/Navbar';
import Healthmetrics from './Component/Healthmetrics'; // Ensure the component name is correct
import Body from './Body';
import VideoCall from './Component/VideoCall'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/healthmetrics' element={<Healthmetrics />} />
        <Route path='/vcall' element={<VideoCall />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}