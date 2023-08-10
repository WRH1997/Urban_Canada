// author: Nandkumar Kadivar

import { Row, Col } from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import DoughnutChart from '../components/DoughnutChart'
import Map from '../components/Map'
import Header from '../components/Header'
import SidebarNav from '../components/SidebarNav'
import { ProSidebarProvider } from 'react-pro-sidebar'
import '../admin.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export const DashboardPage = () => {
  const [loading,setLoading] = useState(true)
  const [activeConsumers,setActiveConsumers] = useState([])
  const [activeVendors,setActiveVendors] = useState([])
  const [pendingRequest,setPendingRequest] = useState([])
  const [data,setData] = useState(null)
  const [cityList,setCityList] = useState(null)
  
  useEffect(()=>{
    const token = localStorage.getItem("authToken")
    axios.get("http://localhost:3001/admin/active-vendors",{headers: {token: "Bearer "+token}}).then((res)=>{
      
        const data = []
        res.data.forEach(vendor => {
            data.push({id: vendor._id,fname: vendor.firstName, lname: vendor.lastName, gender: vendor.gender, email: vendor.email, role: vendor.role})
        });
        setActiveVendors(data.length)
    }).catch((error)=>{
      if(error.response.status == 401){
        window.location.href = "/login"
      }else{
        alert(error)
      }
    })

    axios.get("http://localhost:3001/admin/active-consumers",{headers: {token: "Bearer "+token}}).then((res)=>{
        const data = []
        res.data.forEach(consumer => {
            data.push({id: consumer._id,fname: consumer.firstName, lname: consumer.lastName, gender: consumer.gender, email: consumer.email, role: consumer.role})
        });
        setActiveConsumers(data.length)
    }).catch((error)=>{
      if(error.response.status == 401){
        window.location.href = "/login"
      }else{
        alert(error)
      }
    })

    axios.get("http://localhost:3001/admin/unverified-vendors",{headers: {token: "Bearer "+token}}).then((res)=>{
        const data = []
        res.data.forEach(vendor => {
            data.push({id: vendor._id,fname: vendor.firstName, lname: vendor.lastName, gender: vendor.gender, email: vendor.email})
        });
        setPendingRequest(data.length)
    }).catch((error)=>{
      if(error.response.status == 401){
        window.location.href = "/login"
      }else{
        alert(error)
      }
    })

    axios.get("http://localhost:3001/admin/top-service-statistics",{headers: {token: "Bearer "+token}}).then((res)=>{
        if(res.data){
          setData(res.data)
        }
    }).catch((error)=>{
        if(error.response.status == 401){
          window.location.href = "/login"
        }else{
          alert(error)
        }
      })
      
      axios.get("http://localhost:3001/admin/city-statistics",{headers: {token: "Bearer "+token}}).then((res)=>{
        if(res.data){
          setCityList(res.data)
        }
      }).catch((error)=>{
        if(error.response.status == 401){
          window.location.href = "/login"
        }else{
          alert(error)
        }
    })

    setLoading(false)
},[])
  return (
    <div className='d-flex'>
      <ProSidebarProvider>
          <Header />
          <SidebarNav />
            <main className='d-flex justify-content-center p-3 admin-main' style={{marginTop: "45px",backgroundColor: "#f6f9ff",width: "100%"}}>
            {loading ? 
                <div className='d-flex align-items-center justify-content-center' style={{width: "100%",height: "100vh"}}>
                    <Stack sx={{ color: 'grey.800' }} spacing={2} direction="row">
                        <CircularProgress color="inherit" />
                    </Stack> 
                </div>
                : 
                <div className='col-12 d-flex justify-content-center'>
                <div className='col-11 admin-container' style={{margin: "0px", padding: "0px"}}>
                  <Row className="dashboard-panel p-3" style={{backgroundColor: "#1F2937",color: "#fff"}}>
                    <Col className='d-flex dashboard-panel-column'>
                      <div className='dashboard-panel-digit'>{activeConsumers}</div>
                      <div className='dashboard-panel-label'>Customer</div>
                    </Col>
                    <Col className='d-flex dashboard-panel-column'>
                      <div className='dashboard-panel-digit'>{activeVendors}</div>
                      <div className='dashboard-panel-label'>Vendor</div>
                    </Col>
                    <Col className='d-flex dashboard-panel-column'>
                      <div className='dashboard-panel-digit'>{pendingRequest}</div>
                      <div className='dashboard-panel-label'>Request</div>
                    </Col>
                  </Row>
                  <Row className='mt-2 d-flex flex-wrap align-items-center dashboard-map-panel'>
                    <div className='col-12 col-lg-6'>
                      {
                        cityList ? 
                          <Map city_list={cityList} />
                        :
                          <div className='d-flex align-items-center justify-content-center' style={{width: "100%",height: "100vh"}}>
                            <Stack sx={{ color: 'grey.800' }} spacing={2} direction="row">
                              <CircularProgress color="inherit" />
                            </Stack> 
                          </div>
                      }
                    </div>
                    <div className='col-12 col-lg-6'>
                      {data ? 
                        <DoughnutChart labels={data.categories} values={data.category_values}/>
                      :
                        <div className='d-flex align-items-center justify-content-center' style={{width: "100%",height: "100vh"}}>
                          <Stack sx={{ color: 'grey.800' }} spacing={2} direction="row">
                            <CircularProgress color="inherit" />
                          </Stack> 
                        </div>
                       }
                    </div>
                  </Row>
                </div>
                </div>
            }
              
          </main>
      </ProSidebarProvider>
    </div>
    
  )
}
