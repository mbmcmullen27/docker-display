import './App.css';

function App() {
  return (
    <div className="App">
      <video id="video" autoPlay muted loop>
        <source type="video/mp4" src="https://video.twimg.com/tweet_video/En0CdryWMAE7nTK.mp4"/>
      </video>
    </div>
  );
}

export default App;
