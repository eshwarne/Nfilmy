import React, { Component } from 'react'
import axios from 'axios';
class SearchFilm extends Component {
    componentDidMount(){
        const id=this.props.match.params.id
        console.log(this.props)
        const url="http://www.omdbapi.com/?s="+id+"&apikey=NOT INCLUDED IN GITHUB"
        axios.get(url)
        .then((response)=>{
                console.log(response.data.Search)
        })
    }
    render(){
        return(<p>HELLo</p>)
    }
}
export default SearchFilm;