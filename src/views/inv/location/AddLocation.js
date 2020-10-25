import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CTextarea,
  CInput,
  CLabel,
  CSelect,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const servelURL = "http://localhost:8080/";


class AddLocation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locationCode: '',
      locationStatus: "New",
      addressLine1: '',
      addressLine2: '',
      addressLine3: '',
      locality: '',
      city: '',
      district: '',
      state: '',
      postalCode: '',
      notes: '',
      locationType: '1'
    };
  }

  //Set value to respecctive field when there is a change
  handleChange = (event) => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({ [name]: val });
  }

  //Call backend API to add a new location
  handleSubmit = (event) => {

    var postData = {
      locationCode: this.state.locationCode,
      locationStatus: this.state.locationStatus,
      addressLine1: this.state.addressLine1,
      addressLine2: this.state.addressLine2,
      addressLine3: this.state.addressLine3,
      locality: this.state.locality,
      city: this.state.city,
      district: this.state.district,
      state: this.state.state,
      postalCode: this.state.postalCode,
      notes: this.state.notes,
      locationType: this.state.locationType

    };

    fetch(servelURL + 'locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      //ChromeSamples.log('Created Gist:', data.html_url);
    });
  }

  render() {
    return (
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Add New Location
            </CCardHeader>
            <CCardBody>
              <CForm>
                <CFormGroup row>
                  <CCol>
                    <CLabel>Location Code</CLabel>
                    <CInput name="locationCode" placeholder="Ex BLR-HSR-01. Max 15 characters" onChange={this.handleChange} />
                  </CCol>
                  <CCol>
                    <CLabel htmlFor="select-type">Location type</CLabel>
                    <CSelect custom name="locationType" onChange={this.handleChange}>
                      <option value="1">Distribution center</option>
                      <option value="2">Head office,</option>
                      <option value="3">Regional office</option>
                      <option value="4">Retail outlet</option>
                      <option value="5">Warehouse</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol>
                    <CLabel>Address line 1</CLabel>
                    <CInput name="addressLine1" placeholder="Max 50 characters" onChange={this.handleChange} />
                  </CCol>
                  <CCol>
                    <CLabel>Address line 2</CLabel>
                    <CInput name="addressLine2" placeholder="Max 50 characters" onChange={this.handleChange} />
                  </CCol>
                  <CCol>
                    <CLabel>Address line 3</CLabel>
                    <CInput name="addressLine3" placeholder="Max 50 characters" onChange={this.handleChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>Locality</CLabel>
                    <CInput name="locality" placeholder="Max 50 characters" onChange={this.handleChange} />
                  </CCol>
                  <CCol>
                    <CLabel>City / town</CLabel>
                    <CInput name="city" placeholder="Max 50 characters" onChange={this.handleChange} />
                  </CCol>
                  <CCol>
                    <CLabel>District</CLabel>
                    <CInput name="district" placeholder="Max 50 characters" onChange={this.handleChange} />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol>
                    <CLabel>State</CLabel>
                    <CInput name="state" placeholder="Max 50 characters" onChange={this.handleChange} />
                  </CCol>
                  <CCol>
                    <CLabel>Pin code</CLabel>
                    <CInput name="postalCode" placeholder="6 digits" onChange={this.handleChange} />
                  </CCol>
                  <CCol>
                    <CLabel>Phone number</CLabel>
                    <CInput name="phoneNumber" placeholder="10 digits" onChange={this.handleChange} />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-notes">Notes</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea
                      name="notes"
                      rows="3"
                      placeholder="Max 100 characters"
                      onChange={this.handleChange}
                    />
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton onClick={this.handleSubmit} size="md" color="primary"><CIcon name="cil-scrubber" /> Create location</CButton>
              <CButton type="reset" size="md" color="danger"><CIcon name="cil-ban" /> Reset data</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    )
  }
}

export default AddLocation
