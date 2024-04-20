import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ada from './ada_wong.jpg'


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
      <nav>
        <a href="#" className="logo" ><b>eliks</b> hub </a>
        {/*<img src={ada}></img>*/}

        <ul className="nav-ul">
          <li className="nav-ul-li"><a href="#" className="nav-ul-li-a">Home</a></li>
          <li className="nav-ul-li"><a href="#" className="nav-ul-li-a">About</a></li>
          <li className="nav-ul-li"><a href="#" className="nav-ul-li-a">Contacts</a></li>
        </ul>
      </nav>

      <main>

      </main>


      <footer>

      </footer>
  {/*
      <input type='input'  />
      <button onClick={""}>Click me</button>
      {backendData ? <p>{backendData}</p> : <p>Loading...</p>}
  */}
    </div>
  )
}

export default App;
