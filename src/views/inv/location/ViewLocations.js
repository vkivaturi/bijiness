import React, { Component } from 'react';
import Tables from '../../../utility/Tables';

import usersData from '../../../views/users/UsersData'


// function ViewLocations() {
//     return (
//         <div>
//             <Tables locationsList = {usersData}/>

//         </div>
//     );
// }

class ViewLocations extends Component {

    constructor(props) {

        super(props);

        this.state = {
            locations: [],
        }
    }

    componentDidMount() {
        //Load all items from database
        fetch('http://localhost:8080/locations')
            .then(res => res.json())
            .then(data => this.setState({ locations: data._embedded.locations }))
        //.then(data => console.log(data._embedded.locations[0]));
    }

    render() {
        return (
            <div>
                <Tables locationsList={this.state.locations} />
            </div>
        );

    }

}

export default ViewLocations;
