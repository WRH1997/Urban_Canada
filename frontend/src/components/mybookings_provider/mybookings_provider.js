import React, {useState, useEffect} from 'react';
import Header from '../header/header';
import Footer from "../footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../mybookings/mybookings.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MenuList, Paper } from '@mui/material';
import axios from 'axios';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export default function MyBookings() {

  const user = localStorage.getItem("userData")
  const consumer_id = JSON.parse(user)._id
  const [isOpen, setIsOpen] = useState(false);
  const [bookings,setBookings] = useState([])

  const [openEdit, setOpenEdit] = useState(false)
  const [openCancel, setOpenCancel] = useState(false)
  const [openComplete, setOpenComplete] = useState(false)
  const [selectedBooking,setSelectedBooking] = useState("")

  const [date,setDate] = useState("")
  const [time,setTime] = useState("")

  const openModel = (booking) => {
    setSelectedBooking(booking)
    console.log(booking)
    setDate(booking.date.split(" ")[0])
    setTime(booking.date.split(" ")[1])
    handleClose()
    setOpenEdit(true)
  };

  const closeModel = () => {
      setOpenEdit(false)
      setSelectedBooking("")
      setDate("")
      setTime("")
  };

  const openModelCancel = (booking) => {
    setSelectedBooking(booking)
    handleClose()
    setOpenCancel(true)
  };

  const closeModelCancel = () => {
      setOpenCancel(false)
      setSelectedBooking("")
  };

  const openModelComplete = (booking) => {
    setSelectedBooking(booking)
    handleClose()
    setOpenComplete(true)
  };

  const closeModelComplete = () => {
      setOpenComplete(false)
      setSelectedBooking("")
  };

  useEffect(()=>{
    axios.get(`http://localhost:3001/booking/service-provider/${consumer_id}`).then((res)=>{
      setBookings(res.data)
    }).catch((e)=>{
      alert(e)
    })
  },[])

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const approveBookingHandler = () => {
    const booking_id = selectedBooking._id
    axios.put(`http://localhost:3001/booking/approve/${booking_id}`).then((res)=>{
      window.location.href="/vendor_bookings"
    }).catch((e)=>{
      alert(e)
    })
    closeModel()
  }

  const cancelBookingHandler = () => {
    const booking_id = selectedBooking._id
    axios.put(`http://localhost:3001/booking/cancel/${booking_id}`).then((res)=>{
      window.location.href="/MyBookings"
    }).catch((e)=>{
      alert(e)
    })
    closeModel()
  }

  return (
    <div>
      <Header currentPage="/MyBookings" />
      <div class="container">
        <h5 class="my-4">My Bookings</h5>

        <div class="row">
          <div class="col-12 mb-3 mb-lg-5">
            <div class="mb-32 overflow-hidden card table-nowrap table-card">
              <div class="card-header d-flex align-items-center">
                <h6 class="mb-0" className="items-start">{JSON.parse(user).firstName} {JSON.parse(user).lastName}</h6>
              </div>

              <div class="table-responsive">
                <table class="table mb-0">
                  <thead class="small text-uppercase bg-body text-muted">
                    <tr>
                      <th className='booking-th'>No.</th>
                      <th className='booking-th'>Name</th>
                      <th className='booking-th'>Category</th>
                      <th className='booking-th'>Service</th>
                      <th className='booking-th'>Address</th>
                      <th className='booking-th'>Note</th>
                      <th className='booking-th'>Date</th>
                      <th className='booking-th'>Time</th>
                      <th className='booking-th'>Status</th>
                      <th className='booking-th'>Manage</th>
                    </tr>
                  </thead>

                  <tbody>
                    {bookings.map((person,index) => (
                      <tr class="align-middle">
                        <td>{index+1}</td>
                        <td class="h6 mb-0 lh-1">{person.consumer_id.firstName} {person.consumer_id.lastName}</td>
                        <td>{person.service_id.category}</td>
                        <td>{person.service_id.serviceName}</td>
                        <td>{person.address}</td>
                        <td>{person.note != "" ? person.note : "-"}</td>
                        <td>{person.date.split(" ")[0]}</td>
                        <td>{person.date.split(" ")[1]}</td>
  
                        <td>
                          {
                            person.isCanceled==true ?
                            <div class="flex w-full rounded-md py-1 text-sm font-bold text-red-500">
                              <span>Cancelled</span>
                            </div> : 
                              person.status=='Pending' ?
                                <div class="flex w-full rounded-md py-1 text-sm font-bold text-gray">
                                  <span>{person.status}</span>
                                </div> 
                              :
                                person.status=='Completed' ?
                                  <div class="flex w-full rounded-md py-1 text-sm font-bold text-success">
                                    <span>{person.status}</span>
                                  </div> 
                                  :
                                  person.status=='Approved' &&
                                  <div class="flex w-full rounded-md py-1 text-sm font-bold text-blue-500">
                                    <span>{person.status}</span>
                                  </div> 
                          }
                        </td>

                        <td>
                          {person.isCanceled || person.status=="Completed" ? 
                            <MoreVertIcon className='mybooking-action-btn' aria-controls={open ? 'basic-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                            />
                          :  
                          <MoreVertIcon className='mybooking-action-btn' aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick} />
                        }
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                          className='mybooking-action-menu'
                        >
                          {
                            
                              person.status=='Pending' &&
                                <Paper>
                                  <MenuList className='mybooking-action-menu'>
                                    <MenuItem onClick={()=>openModel(person)}>Approve</MenuItem>
                                    <MenuItem onClick={()=>openModelCancel(person)}>Reject</MenuItem>
                                  </MenuList>
                                </Paper>
                          }
                          {
                            person.status=='Approved' &&
                              <Paper>
                                <MenuList className='mybooking-action-menu'>
                                  <MenuItem onClick={()=>openModelComplete(person)}>Complete</MenuItem>
                                </MenuList>
                              </Paper>
                          }
                        </Menu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>       
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Dialog
          open={openEdit}
          onClose={closeModel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
      >
          <DialogTitle id="alert-dialog-title">
            Approve Booking
          </DialogTitle>
          <DialogContent>
            {
              selectedBooking != "" && 
              <DialogContentText id="alert-dialog-description">
                Booking id: {selectedBooking._id} <br/>
                Customer: {selectedBooking.consumer_id.firstName} {selectedBooking.consumer_id.lastName}<br/>
                Category: {selectedBooking.service_id.category} <br/>
                Service: {selectedBooking.service_id.serviceName} <br/>
              </DialogContentText>
            }
            
          </DialogContent>
          <DialogActions>
          <Button className='admin-cancel-btn' onClick={closeModel}>Cancel</Button>
          <Button className='admin-confirm-btn' variant='contained' onClick={approveBookingHandler} autoFocus>
            Approve
          </Button>
          </DialogActions>
      </Dialog>
      <Dialog
            open={openCancel}
            onClose={closeModelCancel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Cancelation confirmation
          </DialogTitle>
          <DialogContent>
            {
              selectedBooking != "" && 
              <DialogContentText id="alert-dialog-description">
                Booking id: {selectedBooking._id} <br/>
                Vendor: {selectedBooking.service_id.vendorName} <br/>
                Category: {selectedBooking.service_id.category} <br/>
                Service: {selectedBooking.service_id.serviceName} <br/>
              </DialogContentText>
            }
            </DialogContent>
            <DialogActions>
              <Button className='admin-cancel-btn' onClick={closeModelCancel}>Cancel</Button>
              <Button className='admin-confirm-btn' variant='contained' onClick={cancelBookingHandler} autoFocus>
                Confirm
              </Button>
            </DialogActions>
        </Dialog>
      <Footer/>
    </div>
  )
}