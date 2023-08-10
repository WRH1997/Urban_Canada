// author: Nandkumar Kadivar

import { Row } from 'react-bootstrap'
import React,{useState,useEffect} from 'react'
import DataTable from '../components/DataTable'
import Header from '../components/Header'
import SidebarNav from '../components/SidebarNav'
import { ProSidebarProvider } from 'react-pro-sidebar'
import {Tabs,Tab,AppBar} from '@mui/material'
import '../admin.css'
import axios from 'axios'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert'

const CustomersPage = () => {
    const [activeConsumers,setActiveConsumers] = useState([])
    const [blockConsumers,setBlockConsumers] = useState([])
    const [loading,setLoading] = useState(true)
    const [alertMessage,setAlertMessage] = useState(localStorage.getItem("alert_message"))
    setTimeout(() => {
        localStorage.removeItem("alert_message")
        setAlertMessage(null);
    }, 3000);

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
        axios.get("http://localhost:3001/admin/active-consumers",{headers: {token: "Bearer "+token}}).then((res)=>{
            const data = []
            res.data.forEach(consumer => {
                data.push({id: consumer._id,fname: consumer.firstName, lname: consumer.lastName, gender: consumer.gender, email: consumer.email, role: consumer.role})
            });
            setActiveConsumers(data)
            // setLoading(false)
        }).catch((error)=>{
            if(error.response.status == 401){
                window.location.href = "/login"
            }else{
                alert(error)
            }
        })

        axios.get("http://localhost:3001/admin/blocked-consumers",{headers: {token: "Bearer "+token}}).then((res)=>{
            const data = []
            res.data.forEach(consumer => {
                data.push({id: consumer._id,fname: consumer.firstName, lname: consumer.lastName, gender: consumer.gender, email: consumer.email, role: consumer.role})
            });
            setBlockConsumers(data)
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
                                        <Tab label="Active Customers"/>
                                        <Tab label="Blocked Customers"/>
                                    </Tabs>
                                </AppBar>
                                <TabPanel value={value} tabIndex={0} headerData={headerData} rowData={activeConsumers} type={'listing'}>Item 1</TabPanel>
                                <TabPanel value={value} tabIndex={1} headerData={headerData} rowData={blockConsumers} type={'block-listing'}>Item 2</TabPanel>
                            </Row>
                        </div>
                    </div>
                }
            </main>
            {
                alertMessage != null &&
                <Alert className='admin-alerts' variant="outlined" severity="success">
                    {alertMessage}
                </Alert>
            }
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
