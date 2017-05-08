import React from 'react';
import axios from 'axios';
import './tracks.css';
import {Link} from 'react-router-dom';

class Tracks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIdx: 0
        }
    }

    onClick = (item, i) => {
        console.log(i);
        this.setState({activeIdx: i});
       this.props.changeSong({url:"https://p.scdn.co/mp3-preview/4839b070015ab7d6de9fec1756e1f3096d908fba"})
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
