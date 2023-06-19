import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import DoughnutChart from '../components/DoughnutChart'
import Map from '../components/Map'
import Header from '../components/Header'
import SidebarNav from '../components/SidebarNav'
import { ProSidebarProvider } from 'react-pro-sidebar'
import '../admin.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const DashboardPage = () => {
  return (
    <div className='d-flex'>
      <ProSidebarProvider>
          <Header />
          <SidebarNav />
            <main className='d-flex p-3' style={{marginTop: "45px",backgroundColor: "#f6f9ff",width: "100%"}}>
              <Container>
                <Row className="dashboard-panel p-3">
                  <Col className='d-flex dashboard-panel-column'>
                    <div className='dashboard-panel-digit'>1256</div>
                    <div className='dashboard-panel-label'>Customer</div>
                  </Col>
                  <Col className='d-flex dashboard-panel-column'>
                    <div className='dashboard-panel-digit'>102</div>
                    <div className='dashboard-panel-label'>Vendor</div>
                  </Col>
                  <Col className='d-flex dashboard-panel-column'>
                    <div className='dashboard-panel-digit'>24</div>
                    <div className='dashboard-panel-label'>Request</div>
                  </Col>
                </Row>
                <Row className='mt-2 dashboard-map-panel'>
                  <div className='col-6'>
                    <Map />
                  </div>
                  <div className='col-6'>
                    <DoughnutChart />
                  </div>
                </Row>
              </Container>
          </main>
      </ProSidebarProvider>
    </div>
    
  )
}
