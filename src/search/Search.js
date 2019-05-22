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
            pages: 1
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
    }

    
    componentDidMount() {
        this.loadMeteorites();
    }

    // Fetch meteorites and set state
    loadMeteorites() {
        fetch('https://data.nasa.gov/resource/gh4g-9sfh.json?$order=name%20ASC&$limit=' + this.PAGE_SIZE 
            + '&$offset=' + (this.state.pages - 1) * this.PAGE_SIZE).then((res) => {
            return res.json();
        }).then((data) => {
            this.setState({
                meteorites: this.state.meteorites.concat(data)
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