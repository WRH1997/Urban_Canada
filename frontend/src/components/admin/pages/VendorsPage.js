// author: Nandkumar Kadivar

import { Row } from 'react-bootstrap'
import React, {useState,useEffect} from 'react'
import DataTable from '../components/DataTable'
import Header from '../components/Header'
import SidebarNav from '../components/SidebarNav'
import { ProSidebarProvider } from 'react-pro-sidebar'
import {Tabs,Tab,AppBar} from '@mui/material'
import '../admin.css'
import axios from "axios"
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const VendorsPage = () => {
    const [activeVendors,setActiveVendors] = useState([])
    const [blockVendors,setBlockVendors] = useState([])
    const [loading,setLoading] = useState(true)

    const headerData = [
        {
            id: 'id',
            numeric: true,
            disablePadding: true,
            label: 'Id'
        },
        {
          id: 'fname',
          numeric: false,
          disablePadding: true,
          label: 'First Name'
        },
        {
            id: 'lname',
            numeric: false,
            disablePadding: true,
            label: 'Last Name'
        },
        {
            id: 'gender',
            numeric: false,
            disablePadding: true,
            label: 'Gender'
        },
        {
            id: 'email',
            numeric: false,
            disablePadding: true,
            label: 'Email'
        },
        {
            id: 'action',
            numeric: false,
            disablePadding: true,
            label: 'Action'
        }
    ]

    useEffect(()=>{
        const token = localStorage.getItem("authToken")
        axios.get("http://localhost:3001/admin/active-vendors",{headers: {token: "Bearer "+token}}).then((res)=>{
            const data = []
            res.data.forEach(vendor => {
                data.push({id: vendor._id,fname: vendor.firstName, lname: vendor.lastName, gender: vendor.gender, email: vendor.email, role: vendor.role})
            });
            setActiveVendors(data)
            // setLoading(false)
        }).catch((error)=>{
            if(error.response.status == 401){
                window.location.href = "/login"
            }else{
                alert(error)
            }
        })

        axios.get("http://localhost:3001/admin/blocked-vendors",{headers: {token: "Bearer "+token}}).then((res)=>{
            const data = []
            res.data.forEach(vendor => {
                data.push({id: vendor._id,fname: vendor.firstName, lname: vendor.lastName, gender: vendor.gender, email: vendor.email, role: vendor.role})
            });
            setBlockVendors(data)
            setLoading(false)
        }).catch((error)=>{
            if(error.response.status == 401){
                window.location.href = "/login"
            }else{
                alert(error)
            }
        })
    },[])

    const [value, setValue] = React.useState(0);

    const tabChange = (event, val) => {
        setValue(val);
      };

    return (
        <div className='d-flex'>
            <ProSidebarProvider>
                <Header />
                <SidebarNav />
                <main className='d-flex p-3' style={{marginTop: "45px",backgroundColor: "#f6f9ff",width: "100%"}}>
                {loading ? 
                    <div className='d-flex align-items-center justify-content-center' style={{width: "100%",height: "100vh"}}>
                        <Stack sx={{ color: 'grey.800' }} spacing={2} direction="row">
                            <CircularProgress color="inherit" />
                        </Stack>
                    </div> 
                    : 
                    <div className='col-12 d-flex justify-content-center'>
                        <div className='col-11 admin-container' style={{margin: "0px", padding: "0px"}}>
                            <Row className="dashboard-panel p-3">
                                <AppBar position='static' style={{background: '#fff', boxShadow: 'none', marginBottom: "5px"}}>
                                    <Tabs value={value} onChange={tabChange}>
                                        <Tab label="Active Service Providers"/>
                                        <Tab label="Blocked Service Providers"/>
                                    </Tabs>
                                </AppBar>
                                
                                <TabPanel value={value} tabIndex={0} headerData={headerData} rowData={activeVendors} type={'listing'}>Item 1</TabPanel>
                                <TabPanel value={value} tabIndex={1} headerData={headerData} rowData={blockVendors} type={'block-listing'}>Item 2</TabPanel>
                            </Row>
                        </div>
                    </div>
                }
                    
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

export default VendorsPage
