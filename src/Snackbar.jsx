import React from 'react';
import './App.css';

import Paho from 'paho-mqtt';


export default class SnackBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: '',
            client: new Paho.Client('localhost', 1883, 'glub01')
        }

       this.onConnect = this.onConnect.bind(this);
       this.onConnectionLost = this.onConnectionLost.bind(this);
       this.onMessageArrived = this.onMessageArrived.bind(this);
        
    }

    componentDidMount(){
        var { client } = this.state;
        client.connect({onSuccess:this.onConnect});
        client.onConnectionLost = this.onConnectionLost;
        client.onMessageArrived = this.onMessageArrived;
    }

    onConnect() {
        var { client } = this.state;
        client.subscribe("Glubs");
    }
  
    onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:"+responseObject.errorMessage);
        }
    }

    onMessageArrived (message) {
        this.setState({note: message.payloadString})
        console.log(message);
        var toast = document.getElementById("snackbar");
        toast.className = "show";
    
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);;
    
    };
    
    render(){
        const { note } = this.state
        return (
            <div id="snackbar">{ note }</div>
        );
    }
}
