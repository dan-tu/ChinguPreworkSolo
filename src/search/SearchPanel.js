import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class SearchPanel extends React.Component {
    PAGE_SIZE = 30;

    constructor(props) {
        super(props);

        this.parseData = this.parseData.bind(this);

        this.state = {
            page: 0
        }
    }

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
            <div className='container-fluid'>
                <div className='row mx-5'>
                    <table className='table table-dark rounded-lg'>
                        <thead>
                            <tr id='table-header'>
                                <th className='no-top-border'>Name</th>
                                <th className='no-top-border'>ID</th>
                                <th className='no-top-border'>Name Type</th>
                                <th className='no-top-border'>Rec Class</th>
                                <th className='no-top-border'>Mass(g)</th>
                                <th className='no-top-border'>Fall</th>
                                <th className='no-top-border'>Year</th> 
                                <th className='no-top-border'>Coordinates (Lat, Long)</th>
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