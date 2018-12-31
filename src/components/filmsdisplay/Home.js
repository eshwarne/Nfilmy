import React, { Component } from 'react';
class Home extends Component{
    state={
        searchKeyword:""
    }
    handleChange = (e) => {
        this.setState(
            {
                searchKeyword:e.target.value
            }
        )

    }
    handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(this.props.history.push(this.state.searchKeyword))
    }  
    render(){
        return(
            <form className="col s12" onSubmit={this.handleSubmit}>
                <div className="input-field col s12">
                <input placeholder="Search A Film" id="first_name" type="text" name="id" onChange={this.handleChange}/>
                <input type="submit" className="btn"></input>
                </div>
            </form>
        )
    }
}
export default Home
// import React from 'react'

// const Home = () =>{
//     return(
//         <div className="container">
//         SOME DOCTOR
//         </div>
//     )
// }
// export default Home