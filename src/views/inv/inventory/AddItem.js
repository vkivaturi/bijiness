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

const AddItem = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Add New Item
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Item code</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-item-code" name="text-input" placeholder="Enter item code" />
                    <CFormText>Please keep item code format consistent or UPC format. Ex TVSONY123. Size limit is 15 characters</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Item name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-item-name" name="text-input" placeholder="Enter item name" />
                    <CFormText>Max 50 characters</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="disabled-input">Item status</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="item-status" name="disabled-input" placeholder="Active" disabled />
                    <CFormText>Item is assumed active as soon as it is created </CFormText>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Item price</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-item-price" name="text-input" placeholder="Item price in number" />
                    <CFormText>Max 10 digit number</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Length (cm)</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-item-length" name="text-input" placeholder="Enter item length" />
                    <CFormText>Max 5 digits</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Width (cm)</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-item-width" name="text-input" placeholder="Enter item width" />
                    <CFormText>Max 5 digits</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Height (cm)</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-item-height" name="text-input" placeholder="Enter item height" />
                    <CFormText>Max 5 digits</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Volume (cc)</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-item-volume" name="text-input" placeholder="Enter item volume" />
                    <CFormText>Max 5 digits</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Item category</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-item-category" name="text-input" placeholder="Enter item category" />
                    <CFormText>Max 20 characters</CFormText>
                  </CCol>
                </CFormGroup>

              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Create item</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset data</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default AddItem
