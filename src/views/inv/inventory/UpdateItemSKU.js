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

const UpdateItemSKU = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Update SKU for an Item
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
                    <CLabel htmlFor="select-type">Item SKU code</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select-type" id="select-type">
                      <option value="0">Please select item SKU to update</option>
                      <option value="1">SKU1</option>
                      <option value="2">SKU2</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select-type">Item SKU status</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select-type" id="select-type">
                      <option value="0">Status of item SKU</option>
                      <option value="1">Active</option>
                      <option value="2">Inactive</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-sku-start">SKU start / manufacture date</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-sku-start" name="date-sku-start" placeholder="date" />
                  </CCol>
                </CFormGroup>
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-sku-end">SKU end / expiry date</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-sku-end" name="date-sku-end" placeholder="date" />
                  </CCol>
                </CFormGroup>

              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Update item SKU</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset data</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default UpdateItemSKU
