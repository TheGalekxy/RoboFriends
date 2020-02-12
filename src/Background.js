import React, { Component, Fragment } from 'react';
import './Background.css';

class Background extends Component {
    render() {
        return (
        <Fragment className='f1 tc'>
            <h1> Hello World! </h1>             {/*This is JSX, not html*/}
            <p> This is going to change the background colour to a *gradient* </p>
        </Fragment>
        )
    }
}

export default Background