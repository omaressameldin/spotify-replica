import React from 'react';
import './player.css';
import ReactPlayer from 'react-player'
import FontAwesome from 'react-fontawesome';

class Player extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            title:'',
            albumName:"",
            image:'',
            playing: false,
            volume: 1,
            played: 0,
            loaded: 0,
            duration: 0,
            playbackRate: 1.0,
            progress: 0
        }
    }
    componentDidMount(){
         this.props.passChangeSong(this.changeSong);
    }
changeSong = (info) => {
    this.setState({
        url: info.url,
        title: info.title,
        albumName: info.albumName,
        image: info.image,
        playing:true,
        played:0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        progress:0
    })
}
  onProgress = (info) => {
    let progress = Math.floor(info.playedSeconds/this.state.duration * 100)
    this.setState({progress: progress, played:Math.floor(info.playedSeconds)})
    
  }      

	render(){
        if(this.state.url =='')
            return null        
    	return(
            <div className = "player">
                <div className = "song-info">
                <div className="song-info__album" style={{backgroundImage: `url(${this.state.image})`}}></div>
                <div className="song-info__titles">
                    <h3 className = "song-info__titles__title">{this.state.title}</h3>
                    <h3 className = "song-info__titles__title">{this.state.albumName}</h3>
                </div>
                </div>
                <div className = "progress">
                <h2 className = "durations">{this.state.played}</h2>
                <div className = "bar-button-container">     
                 <FontAwesome className="button" name={(this.state.playing)? 'pause': 'play'} onClick={()=>{this.setState({playing: !this.state.playing})}} size='2x' />
                <div className = "progress__bar" onClick = {(e)=>{let jump = (e.pageX-e.currentTarget.offsetLeft)/e.currentTarget.offsetWidth; this.player.seekTo(jump);}}>
                <div  style={{width: `${this.state.progress+"%"}`}} className = "progress__bar__finished"></div>
                </div> 
                </div>
                <h2 className = "durations">{this.state.duration}</h2> 
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
              onDuration={duration => this.setState({ duration:Math.floor(duration) })}
            />                    
            </div>  
    	)
	}

}

export default Player;