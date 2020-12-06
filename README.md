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