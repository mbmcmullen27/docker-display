import React, { useState, Fragment } from 'react';
import './App.css';

//var mqtt = require('mqtt');
import Paho from 'paho-mqtt';

var client  = new Paho.Client('localhost', 8883, 'glub01')

// connect the client
client.connect({onSuccess:onConnect});
client.onConnectionLost = onConnectionLost;


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  client.subscribe("Glubs");
}

function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

function App() {
  var note;
  client.onMessageArrived = function(message) {
    note = message.payloadString;
    setMesg(note);
    console.log(note);
  };

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
