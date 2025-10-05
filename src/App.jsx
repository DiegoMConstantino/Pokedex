import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import SearchedPokemon from './pages/SearchedPokemon';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:pokemon" element={<SearchedPokemon />} />
      </Routes>
    </div>
  );
};

export default App
