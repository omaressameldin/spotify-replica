import React from 'react';
import axios from 'axios';
import './artist.css';
import {Link} from 'react-router-dom';
import GridList from '../GridList/GridList'

const Artist = (props) => {
    return (
            <div>
                <h3>Albums</h3>
                <GridList list={props.albums} type='albums'></GridList>
            </div>
    	)
}
export default Artist;
