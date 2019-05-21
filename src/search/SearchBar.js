import React from 'react';
import '../App.css'

class SearchBar extends React.Component {
    render() {
        return (
            <div className='container mb-3'>
                <form className='form-inline justify-content-center'>
                    <div className='form-group'>
                        <input type="text" className='form-control' placeholder="Search Meteorites"></input>
                        <button type='submit' class='btn btn-primary ml-2'>Search</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;