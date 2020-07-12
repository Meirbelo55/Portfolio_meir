import React from 'react';
import  Cv from './Component/CV-Meir_belaich/CV Meir_belaich.pdf';
import './App.css';
import PictureProfile from "./Component/PictureProfil";
import './Component/stylessass/style.css';
function App() {
  return (
    <div className="App">
        je suis la 1ere div
      <div className='profilpicture'>
      <PictureProfile />
      <p>je mapel meir</p>
          <div className='about-profile-cv'>
              <a
                  className='waves-effect waves-light btn-large pulse blue'
                  href={Cv}
                  target='__blank'
                  rel='noopener noreferrer'
                  download
              >
                  Télecharger mon CV
              </a>
          </div>
      </div>
    </div>
  );
}
export default App;
