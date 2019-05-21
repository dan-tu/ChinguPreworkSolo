import React from 'react';
import SearchBar from './SearchBar';
import SearchPanel from './SearchPanel';
import '../App.css'

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='search-container'>
                <SearchBar></SearchBar>
                <SearchPanel/>
            </div>
        );
    }
}

export default Search;