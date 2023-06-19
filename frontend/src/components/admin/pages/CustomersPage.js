import { Container, Row } from 'react-bootstrap'
import React from 'react'
import DataTable from '../components/DataTable'
import Header from '../components/Header'
import SidebarNav from '../components/SidebarNav'
import { ProSidebarProvider } from 'react-pro-sidebar'
import {Tabs,Tab,AppBar} from '@mui/material'
import '../admin.css'

const CustomersPage = () => {
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
            id: 'action',
            numeric: false,
            disablePadding: true,
            label: 'Action'
        }
    ]

    const rowData1 = [
        {
            name: 'John Wick',
            email: 'jwick@gmail.com',
            city: 'New York'
        },
        {
            name: 'John Mcclane',
            email: 'mcclanej@gmail.com',
            city: 'Toronto'
        }
    ]

    const rowData2 = [
        {
            name: 'Frank Martin',
            email: 'frank.martin@gmail.com',
            city: 'Halifax'
        }
    ]

    const [value, setValue] = React.useState(0);

    const tabChange = (event, val) => {
        setValue(val);
      };

    console.log(value)

    return (
        <div className='d-flex'>
        <ProSidebarProvider>
          <Header />
          <SidebarNav />
          <main className='d-flex p-3' style={{marginTop: "45px",backgroundColor: "#f6f9ff",width: "100%"}}>
            <Container>
                <Row className="dashboard-panel p-3">
                    <AppBar position='static' style={{background: '#fff', boxShadow: 'none'}}>
                        <Tabs value={value} onChange={tabChange}>
                            <Tab label="Active Service Providors"/>
                            <Tab label="Blocked Service Providors"/>
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} tabIndex={0} headerData={headerData} rowData={rowData1} type={'listing'}>Item 1</TabPanel>
                    <TabPanel value={value} tabIndex={1} headerData={headerData} rowData={rowData2} type={'block-listing'}>Item 2</TabPanel>
                </Row>
            </Container>
        </main>
        </ProSidebarProvider>
    </div>
        
    )
}

const TabPanel = (props) => {
    return (
        <div>
            {
                props.value == props.tabIndex && <DataTable headerData={props.headerData} rowData={props.rowData} type={props.type} />
            }
        </div>
    )
}

export default CustomersPage
