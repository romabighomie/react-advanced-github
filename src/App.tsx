import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import FavouritesPage from "./pages/FavouritesPage";
import Navigations from "./components/Navigations";

function App() {
  return (
    <>
        <Navigations/>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/favourites' element={<FavouritesPage />}/>
        </Routes>
    </>
  );
}

export default App;
