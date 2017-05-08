import React from 'react';
import axios from 'axios';
import './artist.css';
import {Link} from 'react-router-dom';
import GridList from '../GridList/GridList';
import Tracks from '../Tracks/Tracks';
import defaultImage from '../../../public/imgs/default2.png'

const Artist = (props) => {
    console.log(props);
    let image = props.artist.images.length > 0? props.artist.images[0].url : defaultImage;
    return (
        <div className="artist">
            <div className="artist__cover" style={{backgroundImage: `url(${image})`}}>
                <div className="artist__cover__details">
                    <p>{`${props.artist.followers.total} Followers`}</p>
                    <h2>{props.artist.name}</h2>
                    <a href="javascript:void(0)" className="btn btn-green">Follow</a>
                    <a href="javascript:void(0)" className="btn btn-outline">Play All</a>
                </div>
            </div>
            <div className="tracks-wrapper">
                <h3 className="top-tracks">Top Tracks</h3>
                <Tracks list={props.tracks}></Tracks>
            </div>

            <h3>Albums</h3>
            <GridList list={props.albums} type='albums'></GridList>
        </div>
    )
}
export default Artist;
