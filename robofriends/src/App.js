import React, { Component } from 'react';
import 'tachyons';
import './App.css';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import { robots } from './robots.js';


class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {

        const filteredRobots = this.state.robots.filter( 
            robot => {
                return robot.name.toLowerCase().includes(
                    this.state.searchfield.toLowerCase())
            }
        )

        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={ this.onSearchChange }/>
                <CardList robots={ filteredRobots }  />
            </div>
        )
    }
} 


export default App;
