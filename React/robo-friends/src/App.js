import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css'

class App extends Component {           // In order to use state, we have to got back to the original way to create React Components
    constructor() {
        super()                 // To use "this" we need to add "super" which calls the contructor of component
        this.state = {
            robots: [],          
            searchfield: '',         // this is what we want our state to be
        }
    }                        // To add state, just use a "constructor"
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
        .then(users => this.setState({ robots: users}));
    }

    onSearchChange = (event) => {     // ******any time you make your own methods on a component, use this syntax*****
        this.setState({ searchfield: event.target.value}) // any time you want to change state, you must put this method
        
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())    // If the name of the robots (in lower case or uppercase) include what is in the search field (in lower or upper case) then return the robots that return true to this
        })                                     // ^^ this is not referring to the app because the input is occuring in a different scope(?)
        if (this.state.robots.length === 0) {
            return <h1> Loading... </h1>
        } else {
            return (
                <div className="tc"> {/* Centers Everything */}
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} /> {/* Because STATE(?) is an object, we have to use 'this' */}      {/* In order to get this to function we need to share information between the CardList & Searchbox */}
                    <Scroll>
                        <CardList  robots={filteredRobots}/> {/* In order to do this, React has "State". This components are considered "Pure Components" because they are "Deterministic" and are passed down props. THey don't need to know anything other than the fact that are receiving something and returning something */}
                    </Scroll>
                </div>              //^^^ robots can now be accessed through this syntax
            );
        }
    }
}

export default App

// "State" simple means the description of you App. State is simply an object, an object that describes your application. And this state is the robots and whatever is entered in the seach box
// This state is able to change, we are able to change the value of the search box and the robots.
// **** Props are simply things that come out of state ****
// A parent feeds *State* to the child, and as soon as the child component receives the state it becomes a *Property/Prop*
// The child can never change the property, the parent just tells it what the state is and the child receives it as a *prop*