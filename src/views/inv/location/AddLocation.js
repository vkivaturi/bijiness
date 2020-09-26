import React from 'react';
import Tables from '../../../utility/Tables';

import usersData from '../../../views/users/UsersData'

function AddLocation() {
    return (
        <div>
            <Tables locationsList = {usersData}/>

        </div>
    );
}

export default AddLocation;
