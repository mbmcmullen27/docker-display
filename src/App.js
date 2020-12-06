import React, { useState, Fragment } from 'react';
import './App.css';

var mqtt = require('mqtt');

var client  = mqtt.connect("ws://172.17.0.1:9001",{ 
  clientId: "glub01"});

client.subscribe('Glubs',{qos:1}); //single topic

function App() {
  var note;
  client.on('message', function(topic, message) {
    note = message.toString();
    setMesg(note);
    console.log(note);
    client.end();
  });

  const [mesg, setMesg] = useState(<Fragment><em>nothing glubbed...</em></Fragment>);
  return (
    <div className="App">
      <p>message: {mesg}</p>
      <video id="video" autoPlay muted loop>
        <source type="video/mp4" src="https://video.twimg.com/tweet_video/En0CdryWMAE7nTK.mp4"/>
      </video>
    </div>
  );
}

export default App;
