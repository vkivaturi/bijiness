import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const AddLocation = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Add New Location
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Location Code</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-location-code" name="text-input" placeholder="Enter location code" />
                    <CFormText>Please keep location code format consistent. Ex BLR-HSR-01. Size limit is 15 characters</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Location Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-location-name" name="text-input" placeholder="Enter location name" />
                    <CFormText>Max 50 characters</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="disabled-input">Location status</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="location-status" name="disabled-input" placeholder="New" disabled />
                    <CFormText>Please use "Location status change" feature to activate this location </CFormText>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Address line 1</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-addr-line-1" name="text-input" placeholder="Enter address line 1" />
                    <CFormText>Max 50 characters</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Address line 2</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-addr-line-2" name="text-input" placeholder="Enter address line 2" />
                    <CFormText>Max 50 characters</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Address line 3</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-addr-line-3" name="text-input" placeholder="Enter address line 3" />
                    <CFormText>Max 50 characters</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Locality</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-locality" name="text-input" placeholder="Enter locality name" />
                    <CFormText>Max 50 characters</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>City / town</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-city" name="text-input" placeholder="Enter city / town / village name" />
                    <CFormText>Max 50 characters</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>District</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-district" name="text-input" placeholder="Enter district name" />
                    <CFormText>Max 50 characters</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>State</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-state" name="text-input" placeholder="Enter state name" />
                    <CFormText>Max 50 characters</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Pin code</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-postal-code" name="text-input" placeholder="Enter postal code" />
                    <CFormText>Eactly 6 digit number</CFormText>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Phone number</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-phone-number" name="text-input" placeholder="Enter contact phone number" />
                    <CFormText>Eactly 10 digit number</CFormText>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-notes">Notes</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      name="textarea-notes" 
                      id="textarea-notes" 
                      rows="3"
                      placeholder="Additional notes for the location..." 
                    />
                    <CFormText>Max 100 characters</CFormText>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select-type">Location type</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select-type" id="select-type">
                      <option value="0">Please select location type</option>
                      <option value="1">Distribution center</option>
                      <option value="2">Head office,</option>
                      <option value="3">Regional office</option>
                      <option value="4">Retail outlet</option>
                      <option value="5">Warehouse</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Lattitude</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-lattitude" name="text-input" placeholder="Enter location lattitude" />
                    <CFormText>Max 50 characters</CFormText>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Longitude</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-longitude" name="text-input" placeholder="Enter location longitudee" />
                    <CFormText>Max 50 characters</CFormText>
                  </CCol>
                </CFormGroup>

              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Create location</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset data</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default AddLocation
