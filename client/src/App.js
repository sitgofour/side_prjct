import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import NewResourceForm from './components/NewResourceForm.js';
import LandingPage from './pages/LandingPage.js';

function App() {

  const [pageLoad, setPageLoad] = useState("");
  const [serverRes, setServerRes] = useState("");

  async function getServerRes() {
    const res = await axios.get("http://localhost:8000/pageLoad");
    console.log(res.data);
    setServerRes(res.data);
  }

  async function getDatabaseResource() {
    const res = await axios.get("http://localhost:8000/getDatabaseResource");
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
    <div className="App">
      {/* <LandingPage /> */}
      <NewResourceForm />
    </div>
  );
}

export default App;
