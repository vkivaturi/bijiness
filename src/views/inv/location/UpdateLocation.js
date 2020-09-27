import React from 'react';

import AddLocation from './AddLocation';

import {
    CCol,
    CFormGroup,
    CLabel,
    CSelect,
  } from '@coreui/react'
function UpdateLocation() {
    return (
        <div>
            <CFormGroup row>
                <CCol md="3">
                    <CLabel htmlFor="select-type">Location Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                    <CSelect custom name="select-type" id="select-type">
                        <option value="0">Please select location to update</option>
                        <option value="1">Hyderabad DC 1</option>
                        <option value="2">Hyderabad DC 2</option>
                        <option value="3">Hyderabad DC 3</option>
                        <option value="4">Hyderabad DC 4</option>
                        <option value="5">Kolkata Warehouse</option>
                    </CSelect>
                </CCol>
            </CFormGroup>

            <AddLocation />

        </div>
    );
}

export default UpdateLocation;
