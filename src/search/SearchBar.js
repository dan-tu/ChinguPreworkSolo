import React from 'react';
import '../App.css'

class SearchBar extends React.Component {
    render() {
        return (
            <form className='search-bar'>
                <input type="text" placeholder="Search Meteorites"></input>
                <input type="submit"></input>
            </form>
        );
    }
};

export default SearchBar;