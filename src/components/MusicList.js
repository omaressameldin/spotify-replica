import React from 'react';
import axios from 'axios';
class MusicList extends React.Component{
        constructor() {
        super();
    }
    componentDidMount(){
        axios.get('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj').then((response) =>{
            console.log(response.data);
        },
        (error) => {
            console.log(error);
        }
        );
    }
        render() {
        return ( 
            <div>
                <h1>omar essam</h1>
			</div>
        );
    }
}
export default MusicList;