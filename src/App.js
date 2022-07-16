import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import './App.scss';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;
