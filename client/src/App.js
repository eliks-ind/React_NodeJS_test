import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ada from './ada_wong.jpg'
import ada_png from './ada_wong.png'
import leon from './leon.png'
import jill from './jill.png'
import carlos from './carlos.png'


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
        <a href="#" className="logo" >eliks <b className="hub">hub</b> </a>
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
            <li className="project ada">
              <a href="#">
                <div className="container-img">
                  <img src={ada_png} />
                </div>
                  <h3 className="project-title">Ada Wong Sexy</h3>
              </a>
            </li>

            <li className="project leon">
              <a href="#">
                <div className="container-img">
                    <img src={leon} />
                </div>
              
                <h3 className="project-title">Leon Scott Kennedy</h3>
              </a>
            </li>
    
            <li className="project jill">
              <a href="#">
                <div className="container-img">
                    <img src={jill} />
                </div>
                <h3 className="project-title">Jill Valentine</h3>
              </a>
            </li>
    
            <li className="project carlos">
              <a href="#">
                <div className="container-img">
                    <img src={carlos} />
                </div>
                <h3 className="project-title">Carlos Oliveira</h3>
              </a>
            </li>

          </ul>
        </div>
      
        <div className="comments_section">
          <div className="comments">
            
            <h4>Comments:</h4>
            <div className="input-section">
              <input type='input' placeholder="Enter the text..." />
              <a href="#" className="arrow-right"></a>
            </div>
            <ul>
              <li>
              {backendData ? <p>{backendData}</p> : <p>Loading...</p>}
              </li>
            </ul>
          </div>
        </div>

      </main>


      <footer>

      </footer>
  
      
  
    </div>
  )
}

export default App;
