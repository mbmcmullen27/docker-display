import React from 'react';
import './App.css';
import Snackbar from './Snackbar.jsx'


function App() {
  return (
    <div className="App">
      <Snackbar />
      <video id="video" autoPlay muted loop>
        <source type="video/mp4" src="https://video.twimg.com/tweet_video/En0CdryWMAE7nTK.mp4"/>
      </video>      
    </div>
  );
}

export default App;
