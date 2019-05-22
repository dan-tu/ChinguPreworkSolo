import React from 'react';
import '../App.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchtext: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            searchtext: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.search(this.state.searchtext);
    }

    render() {
        return (
            <div className='container mb-3'>
                <form className='form-inline justify-content-center' onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchtext} onChange={this.handleChange} className='form-control' placeholder='Search Meteorites'/> 
                    <button type='submit' className='btn btn-primary ml-2'>Submit</button>
                </form>
            </div>
        );
    }
};

export default SearchBar;