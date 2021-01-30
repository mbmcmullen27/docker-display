# CRT display
* dockerfile builds an apline contiainer running nodejs with a react app that serves a video
* express server opens an endpoint that fetches tweets
* uses MQTT to display messages on screen
    * MQTT broker is running in a separate container, we want to put these together into this project using docker compose 

## Issue
* MQTT connection is failing before the handshake
    * MQTT console shows the connection being attempted and failing
        * probably a unsecure websocket thing
        * look into enabling mqtts in mosquitto.conf
## Resolved
* switched to Paho client to connect with websockets
* docker run -v needs an absolute path so we added $(pwd) to the run call

Using a config file:
> docker run -it -p 1883:1883 -p 8883:8883 -v $(pwd)/mosquitto.conf:/mosquitto/config/mosquitto.conf -v /mosquitto/data -v /mosquitto/log --name mqtt eclipse-mosquitto

## Questions

Seems like this line in App.js is pulling a lot of weight. Some things to look into:
* [] declaration syntax
* useState hook
* Fragment component

```jsx
  const [mesg, setMesg] = useState(<Fragment><em>nothing glubbed...</em></Fragment>);
```

## MQTT client/snackbar
* completed this fragment into a full component
