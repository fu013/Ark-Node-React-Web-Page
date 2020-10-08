import React from 'react';
import YouTube from 'react-youtube';
import "./css/video.css";
 
class Video extends React.Component {
  render() {
    const opts = {
      height: "500px",
      width: "624.999px",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
 
    return <YouTube videoId="imtaok9Qko4" opts={opts} onReady={this._onReady}/>;
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Video;