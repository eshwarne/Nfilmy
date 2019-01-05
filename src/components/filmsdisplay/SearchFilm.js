import React, { Component } from 'react'
import axios from 'axios';
import '../../../src/searchfilm.css'
class SearchFilm extends Component {
    state = {
        films:null
    }
    componentDidMount(){
        const id=this.props.match.params.id
        console.log(this.props)
        const url="http://www.omdbapi.com/?s="+id+"&apikey=26fbb188"
        axios.get(url)
        .then((response)=>{
                this.setState(
                    {films : response.data.Search}
                    )
                console.log(this.state)
        })
    }
    render(){
        const toDisplay = this.state.films? (
            this.state.films.map((film)=>{
                return (
                  <div className="card" id="searchdisplay">
                    <div className="card-image">
                      <img alt="NO POSTER" src={film.Poster}/>
                      <span className="card-title">{film.Title}</span>
                    </div>
                    <div className="card-content">
                      <p>Released Year: {film.Year}</p>
                    </div>
                  </div>)
            })
        ) : ("LOADING")
        return(
            <div id="searchdisplay">
            {toDisplay}</div>
            )
    }
}
export default SearchFilm;