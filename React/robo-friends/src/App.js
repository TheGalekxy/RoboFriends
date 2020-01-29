import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';


class App extends Component {           // In order to use state, we have to got back to the original way to create React Components
    constructor() {
        super()                 // To use "this" we need to add "super" which calls the contructor of component
        this.state = {
            robots: robots,          // this is what we want our state to be
            searchfield: '', 
        }
    }                        // To add state, just use a "constructor"
    
    onSearchChange = (event) => {     // ******any time you make your own methods on a component, use this syntax*****
        this.setState({ searchfield: event.target.value}) // any time you want to change state, you must put this method
        
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())    // If the name of the robots (in lower case or uppercase) include what is in the search field (in lower or upper case) then return the robots that return true to this
        })                                     // ^^ this is not referring to the app because the input is occuring in a different scope(?)
        console.log(filteredRobots)          // any time this input changes, we console.log it
    return (
        <div className="tc"> {/* Centers Everything */}
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} /> {/* Because STATE(?) is an object, we have to use 'this' */}      {/* In order to get this to function we need to share information between the CardList & Searchbox */}
            <CardList  robots={filteredRobots}/> {/* In order to do this, React has "State". This components are considered "Pure Components" because they are "Deterministic" and are passed down props. THey don't need to know anything other than the fact that are receiving something and returning something */}
        </div>              //^^^ robots can now be accessed through this syntax


    );
    }
}

export default App

// "State" simple means the description of you App. State is simply an object, an object that describes your application. And this state is the robots and whatever is entered in the seach box
// This state is able to change, we are able to change the value of the search box and the robots.
// **** Props are simply things that come out of state ****
// A parent feeds *State* to the child, and as soon as the child component receives the state it becomes a *Property/Prop*
// The child can never change the property, the parent just tells it what the state is and the child receives it as a *prop*