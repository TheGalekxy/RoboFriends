import React from 'react';

const SearchBox = ({ searchChange}) => {
    return (
        <div>
            <input 
            className='pa3 ba b--green bg-lightest-blue' 
            type="search" 
            placeholder="search robots" 
            onChange={searchChange}
            /> {/* Adds some tachyon styling */}
        </div>
    );
}

export default SearchBox;