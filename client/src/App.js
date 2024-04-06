import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api');
        const responseData = await response.text();
        setBackendData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {backendData ? <p>{backendData}</p> : <p>Loading...</p>}
    </div>
  )
}

export default App;
