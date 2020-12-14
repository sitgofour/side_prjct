import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage.js';
import HomePage from './pages/HomePage.js';
import Resources from './pages/Resources.js';
import NewResource from './components/NewResourceForm.js';
import NewResourcePage from './pages/NewResource.js';



function App() {  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/resources">
          <Resources />
        </Route>
        <Route exact path="/new-resource">
          <NewResourcePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
