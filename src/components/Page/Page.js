import React from 'react';
import axios from 'axios';
import GridList from '../GridList/GridList'
import './page.css';
import {Link} from 'react-router-dom';

class Page extends React.Component{
        constructor(props) {
        super(props);
        this.state= {
            list:[{name:"omar hassan"}]
        }
    }
        render() {
            
		return (
            <div className="main">
                <h1 className="pageTitle">{this.props.title}</h1>                
                <GridList url={this.props.url} s></GridList>
            </div>
        )
        }    
}
export default Page;