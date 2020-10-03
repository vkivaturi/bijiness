import React from 'react';
import Tables from '../../../utility/Tables';

import usersData from '../../users/UsersData'

function ViewItemSKUs() {
    return (
        <div>
            <Tables locationsList = {usersData}/>

        </div>
    );
}

export default ViewItemSKUs;
