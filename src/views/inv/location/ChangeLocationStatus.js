import React from 'react';

import {
    CCol,
    CFormGroup,
    CLabel,
    CSelect,
    CRow,
    CCard,
    CCardHeader,
    CCardFooter,
    CCardBody,
    CButton,
    CInput
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

function ChangeLocationStatus() {
    return (
        <div>
            <CRow>
                <CCol>
                    <CCard>
                        <CCardHeader>
                            Update location status
                        </CCardHeader>
                        <CCardBody>

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
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="select-type">Location status</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CSelect custom name="select-type" id="select-type">
                                        <option value="0">Please select location status</option>
                                        <option value="1">Active</option>
                                        <option value="2">New</option>
                                        <option value="3">Inactive</option>
                                        <option value="4">Removed</option>
                                        <option value="5">Paused</option>
                                    </CSelect>
                                </CCol>
                            </CFormGroup>

                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="date-input">Location status change update date</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                                </CCol>
                            </CFormGroup>

                        </CCardBody>
                        <CCardFooter>
                            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Update location status</CButton>
                            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset data</CButton>
                        </CCardFooter>

                    </CCard>
                </CCol>
            </CRow>
        </div>
    );
}

export default ChangeLocationStatus;
