import React from 'react';


const Scroll = (props) => {             // every props object has children.
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '80vh'}}>                                 
            {props.children}            
        </div>
    )
};

export default Scroll

// The props.children + the styling tags gives all props.children in scroll tags that styling