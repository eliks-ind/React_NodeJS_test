import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ada from './ada_wong.jpg'
import leon from './leon.png'


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
      <div className="nav-container">
        <nav>
        <a href="#" className="logo" >eliks <b>hub</b> </a>
        <ul className="nav-ul">
          <li className="nav-ul-li"><a href="#" className="nav-ul-li-a">Home</a></li>
          <li className="nav-ul-li"><a href="#" className="nav-ul-li-a">About</a></li>
          <li className="nav-ul-li"><a href="#" className="nav-ul-li-a">Contacts</a></li>
        </ul>
      </nav>
      </div>
      

      <main>
        <div className="main-container">
          <ul className="projects">
            <li className="project">
              <a href="#">
              <img src={ada} />
              <h3 className="project-title">Ada Wong Sexy</h3>
              </a>
            </li>

            <li className="project">
              <a href="#">
                <img src={leon} />
                <h3 className="project-title">Leon Scott Kennedy</h3>
              </a>
            </li>
    
            <li className="project">
              <a href="#">
                <img src={leon} />
                <h3 className="project-title">Leon Scott Kennedy</h3>
              </a>
            </li>
    
            <li className="project">
              <a href="#">
                <img src={leon} />
                <h3 className="project-title">Leon Scott Kennedy</h3>
              </a>
            </li>
    
            <li className="project">
              <a href="#">
                <img src={leon} />
                <h3 className="project-title">Leon Scott Kennedy</h3>
              </a>
            </li>

            <li className="project">
              <a href="#">
                <img src={leon} />
                <h3 className="project-title">Leon Scott Kennedy</h3>
              </a>
            </li>

          </ul>
        </div>
      
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
