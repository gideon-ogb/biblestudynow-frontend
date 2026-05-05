import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header'; // Corrected path
import Sidebar from './Components/Sidebar'; // Corrected path

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/bible-studies" element={<h1>Bible Studies Page</h1>} />
        <Route path="/sermons" element={<h1>Sermons Page</h1>} />
        <Route path="/devotionals" element={<h1>Devotionals Page</h1>} />
      </Routes>
    </>
  );
}

export default App;