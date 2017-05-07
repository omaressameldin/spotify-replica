import React from 'react';
import axios from 'axios';
import GridList from '../GridList/GridList'
import './page.css';
import {Link} from 'react-router-dom';

const baseurl = "https://api.spotify.com/v1/";

class Page extends React.Component{
        constructor(props) {
        super(props);
        this.state = {
            type: props.params? props.params.type : 'home',
            value: props.params? props.params.value : null,
            list: [],
            trackList: [],
            artist: null,
            album: null,
            title: this.getTitle(props),
        }
    }

    getTitle = (props) => {
        if(!props.params)
            return "Top artists";
        else {
            if(props.params.type === 'search')
                return `Search for an ${props.params.value}`
            else
                return props.params.value
        }
    }

    componentDidMount() {
        switch(this.state.type) {
            case 'home':
                let urlSuffix = `search?type=artist&q=adele`;
                this.getList(urlSuffix, 'artist');
                break;
            case 'search':

                break;
            case 'albums':

                break;
            case 'artists':

                break;
            default: break;
        }
    }

    componentWillReceiveProps(props) {
        let type = props.params.type;
        let value = props.params.value;
        this.setState({
            type: type,
            value: value,
            list: [],
            trackList: [],
            artist: null,
            album: null,
            title: this.getTitle(props)
        })
    }

    getList = (urlSuffix, type) => {
        let url = baseurl + urlSuffix;
        axios.get(url).then((response) => {
            console.log(type);
            if(type === "artist") {
                console.log(response.data.artists.items);
                this.setState({list: response.data.artists.items});
            } else {
                console.log(response.data.albums.items);
                this.setState({list: response.data.albums.items});
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
            let list = this.getList(urlSuffix, this.state.value);
            this.setState({list});
        }
    }
    render() {
        let searchInput = '';
        if(this.state.type === 'search') {
            searchInput = (
                <div>
                    <input ref="search" onKeyUp={this.search} className = "search" type="text" placeholder="Search..."/>
                </div>
            )
        }
    	return (
            <div className="main">
                <h1 className="pageTitle">{this.state.title}</h1>
                {searchInput}
                {  this.state.list && this.state.list.length > 0 &&
                    <GridList list={this.state.list}></GridList>
                }
            </div>
        )
    }
}
export default Page;
