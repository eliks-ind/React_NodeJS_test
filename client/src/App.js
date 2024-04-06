import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    try {
      const response = fetch('/api');
      const responseData = response.json();
      setBackendData(responseData);
    } catch (error) {
      
    }
  }, []);

  return (
    <div className="App">
      {backendData ? <p>{backendData.message}</p> : <p>Loading...</p>}
    </div>
  )
}

export default App;
