import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import LandingPage from './pages/LandingPage.js';
import HomePage from './pages/HomePage.js';


function App() {

  const ServerURl = "http://localhost:8000";

  const [pageLoad, setPageLoad] = useState("");
  const [serverRes, setServerRes] = useState("");

  async function getServerRes() {
    const res = await axios.get(`${ServerURl}/pageLoad`);
    console.log(res.data);
    setServerRes(res.data);
  }

  async function getDatabaseResource() {
    const res = await axios.get(`${ServerURl}/getDatabaseResource`);
    console.log(res.data);
  }

  // testing server connection
  useEffect(() => {
    getServerRes();
    
     setTimeout(() => {
      setPageLoad("page loaded");
    }, 2000);
  },[]);

  // testing db lookup
  useEffect(() => {
    getDatabaseResource();
  }, []);


  

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
