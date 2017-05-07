import React from 'react';
import './player.css';
import ReactPlayer from 'react-player'
class Player extends React.Component{
    constructor() {
        super();
        this.state = {
            url: 'https://p.scdn.co/mp3-preview/4839b070015ab7d6de9fec1756e1f3096d908fba',
            title:'test song',
            albumName:"Q",
            image:'https://i.scdn.co/image/17743a9712a501a763b1d0851c5014c5269236cc',
            playing: true,
            volume: 0.8,
            played: 0,
            loaded: 0,
            duration: 0,
            playbackRate: 1.0,
            progress: 0
        }
    }

  onProgress = (info) => {
    let progress = Math.floor(info.playedSeconds/this.state.duration * 100)
    console.log(progress)
    this.setState({progress: progress, played:info.playedSeconds})
    
  }      

	render(){
    	return(
            <div className = "player">
                <div className = "song-info">
                <div className="song-info__album" style={{backgroundImage: `url(${this.state.image})`}}></div>
                <div className="song-info__titles">
                    <h3 className = "song-info__titles__title">{this.state.title}</h3>
                    <h3 className = "song-info__titles__title">{this.state.albumName}</h3>
                </div>
                </div>
                <div className = "progress-bar">
                <div  style={{width: `${this.state.progress+"%"}`}} className = "progress-bar__finished"></div>
                </div>                                
            <ReactPlayer 
              ref={player => { this.player = player }}
              width='0'
              height='0'
              url={this.state.url}
              playing={this.state.playing}
              onPlay={() => this.setState({ playing: true })}
              onPause={() => this.setState({ playing: false })}
              onEnded={() => this.setState({ playing: false })}
              onProgress={this.onProgress}
              onDuration={duration => this.setState({ duration })}
            />                    
            </div>  
    	)
	}

}

export default Player;