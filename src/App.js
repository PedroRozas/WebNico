//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Index1 from "./components/home/index";

function App() {
  return (
   
      <BrowserRouter>
      <Routes> 
      <Route exact path="/" element={<Index1 />} />

      </Routes>
      </BrowserRouter>
  
   
  );
  
}

export default App;
