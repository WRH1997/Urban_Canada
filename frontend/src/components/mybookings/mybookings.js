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

  useEffect(()=>{
    axios.get(`http://localhost:3001/booking/service-consumer/${consumer_id}`).then((res)=>{
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

  const rescheduleBookingHandler = () => {
    const data = {
      date: date+" "+time
    }
    const booking_id = selectedBooking._id
    axios.put(`http://localhost:3001/booking/reschedule/${booking_id}`,data).then((res)=>{
      window.location.href="/MyBookings"
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
                <h6 class="mb-0" className="items-start">Jimmy Anderson</h6>
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
                        <td class="h6 mb-0 lh-1">{person.service_id.vendorName}</td>
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
                          {person.isCanceled || person.status=="Approved" ? 
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
                            person.isCanceled==true ?
                              <Paper>
                                
                              </Paper>
                            : 
                              person.status=='Pending' ?
                                <Paper>
                                  <MenuList className='mybooking-action-menu'>
                                    <MenuItem onClick={()=>openModel(person)}>Reschedule</MenuItem>
                                    <MenuItem onClick={()=>openModelCancel(person)}>Cancel Booking</MenuItem>
                                  </MenuList>
                                </Paper>
                              :
                                person.status=='Completed' ?
                                  <Paper>
                                    <MenuList className='mybooking-action-menu'>
                                      <MenuItem onClick={handleClose}>Feedback</MenuItem>
                                    </MenuList>
                                  </Paper>
                                  :
                                  person.status=='Approved' &&
                                    <Paper>
                                
                                    </Paper>
                          }
                            {/* {person.status=='Completed' ?
                              <Paper>
                              <MenuList className='mybooking-action-menu'>
                              <MenuItem onClick={handleClose}>Feedback</MenuItem>
                              </MenuList>
                            </Paper>                
                            :
                            <Paper>
                            <MenuList className='mybooking-action-menu'>
                              <MenuItem onClick={handleClose}>Reschedule</MenuItem>
                              <MenuItem onClick={handleClose}>Cancel</MenuItem>
                             </MenuList>
                          </Paper>
                          } */}
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
            Reschedule Booking
          </DialogTitle>
          <DialogContent>
            {
              selectedBooking != "" && 
              <DialogContentText id="alert-dialog-description">
                Booking id: {selectedBooking._id} <br/>
                Vendor: {selectedBooking.service_id.vendorName} <br/>
                Category: {selectedBooking.service_id.category} <br/>
                Service: {selectedBooking.service_id.serviceName} <br/>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Date
                  </label>
                  <div className="mt-2 flex rounded-md ring-1 ring-gray-300">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      value={date}
                      onChange={(e)=>{setDate(e.target.value)}}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 mt-2">
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Time
                  </label>
                  <div className="mt-2 flex rounded-md ring-1 ring-gray-300">
                    <input
                      type="time"
                      name="time"
                      id="time"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={time}
                      onChange={(e)=>{setTime(e.target.value)}}
                    />
                  </div>
                </div>

              </DialogContentText>
            }
            
          </DialogContent>
          <DialogActions>
          <Button className='admin-cancel-btn' onClick={closeModel}>Cancel</Button>
          <Button className='admin-confirm-btn' variant='contained' onClick={rescheduleBookingHandler} autoFocus>
            Reschedule
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