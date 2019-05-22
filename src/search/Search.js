import React from 'react';
import SearchBar from './SearchBar';
import SearchPanel from './SearchPanel';
import '../App.css'

class Search extends React.Component {
    PAGE_SIZE = 50;

    constructor(props) {
        super(props);

        this.state = {
            meteorites: [],
            pages: 1,
            search: ''
        };

        // Implement page load when reach bottom
        window.onscroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                this.setState({
                    pages: this.state.pages + 1
                }, () => {
                    this.loadMeteorites();
                });
            }
        }

        this.loadMeteorites = this.loadMeteorites.bind(this);
        this.searchMeteorites = this.searchMeteorites.bind(this);
    }

    
    componentDidMount() {
        this.loadMeteorites();
    }

    // Fetch meteorites and set state depending on page
    loadMeteorites() {
        fetch('https://data.nasa.gov/resource/gh4g-9sfh.json?$order=name%20ASC&$limit=' + this.PAGE_SIZE 
        + '&$offset=' + (this.state.pages - 1) * this.PAGE_SIZE + this.state.search).then((res) => {
            return res.json();
        }).then((data) => {
            this.setState({
                meteorites: this.state.meteorites.concat(data)
            });
        });
    }

    // Searches (case insensitive) for meteorites with the given searchtext and updates the results
    searchMeteorites(searchtext) {
        let searchQuery = "&$where=lower(name) like '%25" + searchtext.toLowerCase() + "%25'";

        // Reset meteorite results then fetch new query
        this.setState({
            search: searchQuery,
            pages: 1,
            meteorites: []
        }, () => {
            this.loadMeteorites();
        });
    }

    render() {
        return (
            <div className='search-container'>
                <SearchBar search={this.searchMeteorites}></SearchBar>
                <SearchPanel meteorites={this.state.meteorites}></SearchPanel>
            </div>
        );
    }
}

export default Search;