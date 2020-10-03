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

const AddItemSKU = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Add SKU for an Item
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
                    <CLabel>Item name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-item-name" name="text-input" placeholder="Selected item name" disabled />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Item SKU code</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-item-sku" name="text-input" placeholder="Item SKU code" />
                    <CFormText>Max 15 characters</CFormText>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="disabled-input">Item SKU status</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="item-sku-status" name="disabled-input" placeholder="Active" disabled />
                    <CFormText>Item SKU is assumed active as soon as it is created </CFormText>
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
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Create item SKU</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset data</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default AddItemSKU
