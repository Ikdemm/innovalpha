import React from "react";
import "./App.css";
import HomeComponent from './components/HomeComponent';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <Router>
    <HomeComponent/>
  </Router>
)

export default App;