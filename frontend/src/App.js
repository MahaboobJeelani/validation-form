import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
