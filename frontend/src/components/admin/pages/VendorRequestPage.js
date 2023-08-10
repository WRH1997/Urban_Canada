// author: Nandkumar Kadivar

import { Row } from 'react-bootstrap'
import React, {useState,useEffect} from 'react'
import DataTable from '../components/DataTable'
import Header from '../components/Header'
import SidebarNav from '../components/SidebarNav'
import { ProSidebarProvider } from 'react-pro-sidebar'
import '../admin.css'
import axios from "axios"
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'

const VendorRequestPage = () => {
    const [loading,setLoading] = useState(true)
    const [rowData,setRowData] = useState([])
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
        axios.get("http://localhost:3001/admin/unverified-vendors",{headers: {token: "Bearer "+token}}).then((res)=>{
            const data = []
            res.data.forEach(vendor => {
                data.push({id: vendor._id,fname: vendor.firstName, lname: vendor.lastName, gender: vendor.gender, email: vendor.email})
            });
            setRowData(data)
            setLoading(false)
        }).catch((error)=>{
            if(error.response.status == 401){
                window.location.href = "/login"
            }else{
                alert(error)
            }
        })
    },[])

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
                                        <DataTable headerData={headerData} rowData={rowData} type={"request"} />
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

export default VendorRequestPage
