import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CCardFooter
} from '@coreui/react'

import CIcon from '@coreui/icons-react'


const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
//const fields = ['name','registered', 'role', 'status']

const Tables = (props) => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h3>Locations list</h3>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={props.locationsList}
                //fields={fields}
                hover
                columnFilter
                sorter
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  'status':
                    (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    )
                }}
              />
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Export as csv</CButton>
              <CButton type="reset" size="sm" color="primary"><CIcon name="cil-ban" /> Export as Excel xlsx</CButton>
            </CCardFooter>

          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Tables
