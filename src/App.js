import React from 'react'
import Home from './Home/Home';
// import Movie from './Movie/Movie';
import {BrowserRouter as Router, Routes, Route} from  "react-router-dom";
import SingleMovie from './SingleMovie';
import "./App.css";

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<SingleMovie />} />
      </Routes>
    </Router>
   </>
  )
}

export default App
// const API_URL = `http://www.omdbapi.com/?s=kabhi&apikey=f97d2236`;