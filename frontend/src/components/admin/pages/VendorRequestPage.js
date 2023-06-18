import { Container, Row, Col } from 'react-bootstrap'
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import React from 'react'
import DataTable from '../components/DataTable'
import Header from '../components/Header'
import SidebarNav from '../components/SidebarNav'
import { ProSidebarProvider } from 'react-pro-sidebar'
import '../admin.css'

const VendorRequestPage = () => {
    const headerData = [
        {
          id: 'name',
          numeric: false,
          disablePadding: true,
          label: 'Name'
        },
        {
            id: 'email',
            numeric: false,
            disablePadding: true,
            label: 'Email'
        },
        {
            id: 'city',
            numeric: false,
            disablePadding: true,
            label: 'City'
        },
        {
            id: 'service',
            numeric: false,
            disablePadding: true,
            label: 'Service'
        },
        {
            id: 'action',
            numeric: false,
            disablePadding: true,
            label: 'Action'
        }
    ]

    const rowData = [
        {
            name: 'John Wick',
            email: 'jwick@gmail.com',
            city: 'New York',
            service: 'Cleaning'
        },
        {
            name: 'John Mcclane',
            email: 'mcclanej@gmail.com',
            city: 'Toronto',
            service: 'Electrician'
        }
    ]
    return (
        <div className='d-flex'>
            <ProSidebarProvider>
                <Header />
                <SidebarNav />
                <main className='d-flex p-3' style={{marginTop: "45px",backgroundColor: "#f6f9ff",width: "100%"}}>
                    <Container>
                        <Row className="dashboard-panel p-3">
                            <DataTable headerData={headerData} rowData={rowData} type={"request"} />
                        </Row>
                    </Container>
                </main>
            </ProSidebarProvider>
        </div>
        
    )
}

export default VendorRequestPage
