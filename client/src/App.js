import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [pageLoad, setPageLoad] = useState("");
  const [serverRes, setServerRes] = useState("");

  async function getServerRes() {
    const res = await axios.get("http://localhost:3000/pageLoad");
    console.log(res.data);
    setServerRes(res.data);
  }

  useEffect(() => {
    getServerRes();
    
     setTimeout(() => {
      setPageLoad("page loaded");
    }, 2000);
  },[]);

  

  return (
    <div className="App">
      <h1>side_prjct</h1>
      <p>{pageLoad}</p>
      <p>Server Response: {serverRes}</p>
    </div>
  );
}

export default App;
