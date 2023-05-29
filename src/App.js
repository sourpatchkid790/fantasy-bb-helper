import './App.css';
import PlayerStatsPage from './pages/PlayerStatsPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import TestAPI from './pages/TestAPI';

import { Routes, Route, Switch } from 'react-router-dom';

import React, { useState, useEffect } from 'react';



function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/stats' element={<PlayerStatsPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/api' element={<TestAPI />} />
      </Routes>
      
    </div>
  );
}

export default App;
