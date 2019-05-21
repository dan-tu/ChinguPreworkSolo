import React from 'react';
import '../App.css'

function SearchBar() {
    return (
        <form className='search-bar'>
            <input type="text" placeholder="Search Meteorites"></input>
            <input type="submit"></input>
        </form>
    );
};

export default SearchBar;