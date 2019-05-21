import React from 'react';
import '../App.css';

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);

        this.parseData = this.parseData.bind(this);

        this.state = {
            page: 0
        }
    }

    PAGE_SIZE = 30;

    // Parse props for meteorites to load
    parseData(meteorites) {
        function template(data) {
            return (
                <tr key={data.name}>
                    <td>{data.name}</td>
                    <td>{data.id}</td>
                    <td>{data.nametype}</td>
                    <td>{data.recclass}</td>
                    <td>{data.mass}</td>
                    <td>{data.fall}</td>
                    <td>{data.year.substring(0, 4)}</td>
                    <td>{data.geolocation.latitude}, {data.geolocation.longitude}</td>
                </tr>
            );
        }

        let children = [];
        
        for (var i = this.state.page * this.PAGE_SIZE; i < (this.state.page + 1) * this.PAGE_SIZE; i++) {
            if (meteorites[i]) {
                children.push(template(meteorites[i]));
            }
        }

        return children;
    }

    render() {
        let meteorites = this.parseData(this.props.meteorites);

        return (        
            <table className='search-results'>
                <thead className='table-header'>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Name Type</th>
                        <th>Rec Class</th>
                        <th>Mass(g)</th>
                        <th>Fall</th>
                        <th>Year</th>
                        <th>Coordinates (Lat, Long)</th>
                    </tr>
                </thead>
                <tbody>
                    {meteorites}
                </tbody>
            </table>)
        ;
    }
}

export default SearchPanel;