import React from 'react';
import axios from 'axios';
import './tracks.css';
import {Link} from 'react-router-dom';
import defaultImage from '../../../public/imgs/default2.png'

class Tracks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIdx: 0
        }
    }

    onClick = (item, i) => {
        axios.get(`https://api.spotify.com/v1/artists/${item.artists[0].id}`).then((response) => {
            let image = response.data.images.length? response.data.images[0].url : defaultImage;
            this.props.changeSong({url:item.preview_url, title: item.name, image: image, albumName: item.artists[0].name})
            this.setState({activeIdx: i});
        })

    }

    render() {
        return (
            <div className="tracks">
                <ul className="tracks__list">
                {this.props.list.map((item, i) => {
                    return (
                        <li className={`tracks__list__item ${i === this.state.activeIdx? 'active' : ''}`} onClick={(event) => this.onClick(item, i)} key={i} >
                            <span className="tracks__list__idx">{`${i + 1}.`}</span>
                            <span className="tracks__list__name">{item.name}</span>
                            <span className="tracks__list__dur">{item.duration_ms}</span>
                        </li>
                    )
                })}
                </ul>
            </div>
        )
    }
}
export default Tracks;
