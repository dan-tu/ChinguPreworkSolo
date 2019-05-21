import React from 'react';
import SearchBar from './SearchBar';
import SearchPanel from './SearchPanel';
import '../App.css'

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            meteorites: []
        };
    }

    componentDidMount() {
        // Fetch meteorites
        fetch('https://data.nasa.gov/resource/gh4g-9sfh.json?$order=name%20ASC').then((res) => {
            return res.json();
        }).then((data) => {
            this.setState({
                meteorites: data
            });
        });
    }



    render() {
        return (
            <div className='search-container'>
                <SearchBar></SearchBar>
                <SearchPanel meteorites={this.state.meteorites}></SearchPanel>
            </div>
        );
    }
}

export default Search;