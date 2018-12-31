import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layouts/Navbar';
import Films from './components/filmsdisplay/Films'
import Home from './components/filmsdisplay/Home';
import SearchFilm from './components/filmsdisplay/SearchFilm'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/films" component={Films}></Route>
      <Route path="/:id" component={SearchFilm}></Route>
      </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
