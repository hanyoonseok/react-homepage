import React,{Component} from 'react';
import YouTube from 'react-youtube';
import Youtube from '@u-wave/react-youtube';
import './style.css';

var player;
class Tube extends Component{
    videoOnReady(event) {
        player = event.target;
        player.seekTo(40, true);
        player.mute();
        player.playVideo();
    }
    videoOnPlay(event){
    }
    videoOnEnd(event)
    {
        player.playVideo();
    }
    render() {
      const opts = {
          width:'100%',
        playerVars: {
        autoplay: 1,
        controls:0,
        modestbranding:1,
        fs:0,
        rel:0,
        showinfo:0
        },
        
      };
      const {videoId} = this.props;
      return (
        <section>
          <div className="modal">
            <YouTube 
              videoId={videoId} 
              opts={opts} 
              onReady={this.videoOnReady} 
              onPlay={this.videoOnPlay}
              onStateChange={this.videoStateChange}
              onEnd={this.videoOnEnd}
              />
          </div>
        </section>
      )}
}

export default Tube;