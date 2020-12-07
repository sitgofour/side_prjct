import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [serverRes, setServerRes] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setServerRes("page loaded");
    }, 2000);
  },[]);


  return (
    <div className="App">
      <h1>side_prjct</h1>
      <p>{serverRes}</p>
    </div>
  );
}

export default App;
