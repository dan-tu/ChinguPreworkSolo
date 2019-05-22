import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);

        this.parseData = this.parseData.bind(this);
    }

    // Parse props for meteorites to load
    parseData(meteorites) {
        function template(data) {
            if (data) {
                let geo = <td>Unknown</td>;
                if (data.geolocation) {
                    geo = <td>{data.geolocation.latitude}, {data.geolocation.longitude}</td>;
                }

                let year = <td>Unknown</td>;
                if (data.year) {
                    year = <td>{data.year.substring(0, 4)}</td>;
                }
                
                return (
                    <tr key={data.name}>
                        <td>{data.name}</td>
                        <td>{data.id}</td>
                        <td>{data.nametype}</td>
                        <td>{data.recclass}</td>
                        <td>{data.mass}</td>
                        <td>{data.fall}</td>
                        {year}
                        {geo}
                    </tr>
                );
            }
        }

        let children = [];
        
        meteorites.forEach(el => {
            children.push(template(el));
        })

        return children;
    }

    render() {
        let meteorites = this.parseData(this.props.meteorites);

        return (        
            <div className='container-fluid'>
                <div className='row mx-5'>
                    <table className='table table-dark rounded-lg'>
                        <thead>
                            <tr id='table-header'>
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
                    </table>
                </div>
            </div>
        );
    }
}

export default SearchPanel;