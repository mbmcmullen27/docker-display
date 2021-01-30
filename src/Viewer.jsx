import React from 'react';

export default class Viewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
    
    render(){
        return(
            <video id="video" autoPlay muted loop>
                <source type="video/mp4" src="https://video.twimg.com/tweet_video/En0CdryWMAE7nTK.mp4"/>
            </video> 
        )
    }
}
