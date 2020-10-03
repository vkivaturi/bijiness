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

const UpdateItem = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Update Item
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select-type">Item code</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select-type" id="select-type">
                      <option value="0">Please select item code to add SKU</option>
                      <option value="1">ITEM1</option>
                      <option value="2">ITEM2</option>
                      <option value="3">ITEM3</option>
                      <option value="4">ITEM4</option>
                      <option value="5">ITEM5</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Item code</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-item-code" name="text-input" placeholder="" disabled />
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
                    <CLabel htmlFor="select-type">Item status</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select-type" id="select-type">
                      <option value="0">Please select item status</option>
                      <option value="1">Active</option>
                      <option value="2">Inactive</option>
                    </CSelect>
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
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Update item</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset data</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default UpdateItem
