import React from 'react';
import axios from 'axios';
import GridList from '../GridList/GridList'
import './page.css';
import {Link} from 'react-router-dom';

class Page extends React.Component{
        constructor(props) {
        super(props);
        this.state= {
            baseurl:this.props.baseurl,
            searchType:this.props.searchType,
            url:this.props.url

        }        
    }
    search(event){
        if(event.key ==='Enter'){
            let url = this.state.baseurl+this.state.searchType+":"+event.target.value+"&type="+this.state.searchType;
            console.log(url)
            this.setState({url:url})
        }
    }
        render() {
            let searchInput = '';
            if(this.props.search){
            searchInput = (				
            <div>
				<input onKeyUp={this.search.bind(this)} className = "search" type="text" placeholder="Search..."/>
				</div>
                )             
            }
		return (
            <div className="main">
                <h1 className="pageTitle">{this.props.title}</h1>   
                {searchInput}             
                <GridList searchType = {this.state.searchType} url={this.state.url} s></GridList>
            </div>
        )
        }    
}
export default Page;