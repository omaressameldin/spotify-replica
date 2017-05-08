import React from 'react';
import axios from 'axios';
import GridList from '../GridList/GridList'
import './page.css';
import {Link} from 'react-router-dom';
import Artist from '../Artist/Artist';
import Album from '../Album/Album';

const baseurl = "https://api.spotify.com/v1/";

class Page extends React.Component{
        constructor(props) {
        super(props);
        this._temp = {};
        this.state = {
            type: props.params? props.params.type : 'home',
            value: props.params? props.params.value : null,
            list: [],
            trackList: [],
            artist: null,
            album: null,
            title: this.getTitle(props),
        }
        console.log(this.state);
    }

    getTitle = (props) => {
        if(!props.params)
            return "Top Artists";
        else {
            let s = props.params.value;
            let str = s.charAt(0).toUpperCase() + s.slice(1);;
            if(props.params.type === 'search')
                return `Search for an ${str}`;
            else
                return str;
        }
    }

    componentDidMount(){
        console.log(this.state);
        switch(this.state.type) {
            case 'home':
                let urlSuffix = `search?type=artist&q=adele`;
                this.getList(urlSuffix, 'artists', this.updateState);
                break;
            case 'search':
                break;
            case 'albums':
            case 'artists':
                this.changeView({
                    params: {
                        type: this.state.type,
                        value: this.state.value
                    }
                });
                break;
            default: break;
        }
    }

    changeView(props) {
        console.log(props);
        let type = props.params.type;
        let value = props.params.value;
        let urlSuffix = `${type}/${value}`;
        this._temp.type = type;
        this._temp.value = value;
        this._temp.title = this.getTitle(props);
        if(type === 'search') {
            this._temp.list = [];
            this.updateState();
            return;
        }
        this.getItem(urlSuffix, type, () => {
            this.getTracks(`${urlSuffix}`, type, () => {
                if(type === 'artists') {
                    this.getList(`${urlSuffix}/albums`, '', () => {
                        this.updateState();
                    });
                } else {
                    this._temp.list = [];
                    this.updateState();
                }
            })
        });
    }

    componentWillReceiveProps(props) {
        this.changeView(props);
    }

    updateState = () => {
        this.setState({...this._temp});
        console.log(this.state);
        this._temp = {};
    }

    getList = (urlSuffix, type, cb) => {
        let url = baseurl + urlSuffix;

        axios.get(url).then((response) => {
            if(type === "artists") {
                this._temp.list = response.data.artists.items;
            } else if(type === "albums"){
                this._temp.list = response.data.albums.items;
            } else {
                this._temp.list = response.data.items;
            }
            cb();
        },
        (error) => {
            console.log(error);
        });
    }

    getTracks = (urlSuffix, type, cb) => {
        let url = baseurl + urlSuffix;
        url = type === 'artists'? url + '/top-tracks?country=US' : url + '/tracks';
        axios.get(url).then((response) => {
            this._temp.trackList = type === 'artists'? response.data.tracks : response.data.items;
            cb();
        },
        (error) => {
            console.log(error);
        });
    }

    getItem = (urlSuffix, type, cb) => {
        let url = baseurl + urlSuffix;
        axios.get(url).then((response) => {
            if(type === "artists") {
                this._temp.artist = response.data;
                cb();
            } else {
                this._temp.album = response.data;
                cb();
            }
        },
        (error) => {
            console.log(error);
        });
    }

    search = (event) => {
        if(event.key ==='Enter'){
            let value = this.refs.search.value;
            let urlSuffix = `search?type=${this.state.value}&q=${value}`;
            this.getList(urlSuffix, this.state.value + 's', this.updateState);
        }
    }

    render() {
        let searchInput = '';
        let gridType = 'albums';
        if(this.state.type == 'artist' || this.state.type == 'home' || this.state.value == 'artist')
            gridType = 'artists';
        if(this.state.type === 'search') {
            searchInput = (
                <div>
                    <input ref="search" onKeyUp={this.search} className = "search" type="text" placeholder="Search..."/>
                </div>
            );
        }

        switch(this.state.type) {
            case 'home':
            case 'search':
                return (
                    <div className="main">
                        <h1 className="pageTitle">{this.state.title}</h1>
                        {searchInput}
                        {this.state.list && this.state.list.length > 0 &&
                            <GridList list={this.state.list} type={gridType}></GridList>
                        }
                    </div>
                )
            case 'albums':
                return (
                    <div className="main">
                            {this.state.album &&
                                <Album album={this.state.album} tracks={this.state.trackList} />
                            }
                    </div>
                )
            case 'artists':
                return (

                    <div className="main">
                        {this.state.artist &&
                            <Artist artist={this.state.artist} tracks={this.state.trackList} albums={this.state.list} />
                        }
                    </div>

                )
            default:
                return (
                    <div>Error</div>
                );
        }
    }
}
export default Page;
