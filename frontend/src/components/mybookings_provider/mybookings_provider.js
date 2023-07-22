import React, {useState, useEffect} from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MenuList, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Header from '../header/header';
import Footer from "../footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../mybookings/mybookings.css';
import axios from 'axios';

// function of my bookings for service provider.
export default function MyBookings() {

  // variables
  const user = localStorage.getItem("userData")
  const consumer_id = JSON.parse(user)._id
  const [isOpen, setIsOpen] = useState(false);
  const [bookings,setBookings] = useState([])
  const [openEdit, setOpenEdit] = useState(false)
  const [openCancel, setOpenCancel] = useState(false)
  const [openComplete, setOpenComplete] = useState(false)
  const [selectedBooking,setSelectedBooking] = useState("")

  // set date and time
  const [date,setDate] = useState("")
  const [time,setTime] = useState("")

  // open model function
  const openModel = (booking) => {
    setSelectedBooking(booking)
    console.log(booking)
    setDate(booking.date.split(" ")[0])
    setTime(booking.date.split(" ")[1])
    handleClose()
    setOpenEdit(true)
  };

  // close model function
  const closeModel = () => {
      setOpenEdit(false)
      setSelectedBooking("")
      setDate("")
      setTime("")
  };

  // open model to reject
  const openModelCancel = (booking) => {
    setSelectedBooking(booking)
    handleClose()
    setOpenCancel(true)
  };

  // close model to reject
  const closeModelCancel = () => {
      setOpenCancel(false)
      setSelectedBooking("")
  };

  // close model to complete
  const openModelComplete = (booking) => {
    setSelectedBooking(booking)
    handleClose()
    setOpenComplete(true)
  };
  // close model to complete
  const closeModelComplete = () => {
      setOpenComplete(false)
      setSelectedBooking("")
  };

  // api call to get data
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

  const [selectedPerson,setSelectedPerson] = useState("")
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event,person) => {
    setSelectedPerson(person)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setSelectedPerson("")
    setAnchorEl(null);
  };

  // function to approve booking request
  const approveBookingHandler = () => {
    const booking_id = selectedBooking._id
    axios.put(`http://localhost:3001/booking/approve/${booking_id}`).then((res)=>{
      window.location.href="/vendor_bookings"
    }).catch((e)=>{
      alert(e)
    })
    closeModel()
  }

  // function to reject booking request
  const cancelBookingHandler = () => {
    const booking_id = selectedBooking._id
    axios.put(`http://localhost:3001/booking/cancel/${booking_id}`).then((res)=>{
      window.location.href="/vendor_bookings"
    }).catch((e)=>{
      alert(e)
    })
    closeModel()
  }

  // complete booking function
  const completeBookingHandler = () => {
    const booking_id = selectedBooking._id
    console.log(booking_id)
    axios.put(`http://localhost:3001/booking/complete/${booking_id}`).then((res)=>{
      window.location.href="/vendor_bookings"
    }).catch((e)=>{
      alert(e)
    })
    closeModel()
  }

  return (
    <div>
      <Header currentPage="/vendor_bookings" />

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
                          {person.isCanceled==true ?
                            <div class="flex w-full rounded-md py-1 text-sm font-bold text-red-500">
                              <span>Cancelled</span>
                            </div> : 
                          person.status=='Pending' ?
                            <div class="flex w-full rounded-md py-1 text-sm font-bold text-gray">
                              <span>{person.status}</span>
                            </div> :
                          person.status=='Completed' ?
                            <div class="flex w-full rounded-md py-1 text-sm font-bold text-success">
                              <span>{person.status}</span>
                            </div> :
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
                            /> :

                            <MoreVertIcon className='mybooking-action-btn' aria-controls={open ? 'basic-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              onClick={(e)=>handleClick(e,person)}
                            />
                          }
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
        {selectedPerson.status=='Pending' &&
          <Paper>
            <MenuList className='p-0 mybooking-action-menu'>
              <MenuItem onClick={()=>openModel(selectedPerson)}><p className='m-0 text-gray-800 text-sm'>Approve</p></MenuItem>
              <MenuItem onClick={()=>openModelCancel(selectedPerson)}><p className='m-0 text-gray-800 text-sm'>Reject</p></MenuItem>
            </MenuList>
          </Paper>
        }
        {selectedPerson.status=='Approved' &&
          <Paper>
            <MenuList className='p-0 mybooking-action-menu'>
              <MenuItem onClick={()=>openModelComplete(selectedPerson)}><p className='m-0 text-gray-800 text-sm'>Complete</p></MenuItem>
            </MenuList>
          </Paper>
        }
      </Menu>

      <Dialog
        open={openEdit}
        onClose={closeModel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <p className='m-0 p-0 text-gray-800 text-lg font-bold'>Booking Approval</p>
        </DialogTitle>

        <DialogContent className='pb-2'>
          {selectedBooking != "" && 
            <DialogContentText id="alert-dialog-description">
              <p className='m-0 p-0 text-black text-sm'>
                <b>Customer:</b> {selectedBooking.consumer_id.firstName} {selectedBooking.consumer_id.lastName}<br/>
                <b>Category:</b> {selectedBooking.service_id.category} <br/>
                <b>Service:</b> {selectedBooking.service_id.serviceName} <br/>
                <b>Date:</b> {selectedBooking.date.split(" ")[0]} <br/>
                <b>Time:</b> {selectedBooking.date.split(" ")[1]} <br/>
              </p>
            </DialogContentText>
          }
        </DialogContent>

        <DialogActions className='pt-0 pb-3 self-center'>
          <a href="#" onClick={closeModel} className="mr-5 text-sm font-semibold leading-6 text-gray-900 no-underline">
            Cancel
          </a>

          <button
            type="submit"
            className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={approveBookingHandler}
          >
            Approve
          </button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openCancel}
        onClose={closeModelCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <p className='m-0 p-0 text-gray-800 text-lg font-bold'>Reject Booking</p>
        </DialogTitle>

        <DialogContent className='pb-2'>
          {selectedBooking != "" && 
            <DialogContentText id="alert-dialog-description">
              <p className='m-0 p-0 text-black text-sm'>
                <b>Customer:</b> {selectedBooking.consumer_id.firstName} {selectedBooking.consumer_id.lastName}<br/>
                <b>Category:</b> {selectedBooking.service_id.category} <br/>
                <b>Service:</b> {selectedBooking.service_id.serviceName} <br/>
                <b>Date:</b> {selectedBooking.date.split(" ")[0]} <br/>
                <b>Time:</b> {selectedBooking.date.split(" ")[1]} <br/>
              </p>
            </DialogContentText>
          }
        </DialogContent>

        <DialogActions className='pt-0 pb-3 self-center'>
          <a href="#" onClick={closeModelCancel} className="mr-5 text-sm font-semibold leading-6 text-gray-900 no-underline">
            Cancel
          </a>

          <button
            type="submit"
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={cancelBookingHandler}
          >
            Confirm
          </button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openComplete}
        onClose={closeModelComplete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <p className='m-0 p-0 text-gray-800 text-lg font-bold'>Service Complete</p>
        </DialogTitle>

        <DialogContent className='pb-2'>
          {selectedBooking != "" && 
            <DialogContentText id="alert-dialog-description">
              <p className='m-0 p-0 text-black text-sm'>
                <b>Customer:</b> {selectedBooking.consumer_id.firstName} {selectedBooking.consumer_id.lastName}<br/>
                <b>Category:</b> {selectedBooking.service_id.category} <br/>
                <b>Service:</b> {selectedBooking.service_id.serviceName} <br/>
                <b>Date:</b> {selectedBooking.date.split(" ")[0]} <br/>
                <b>Time:</b> {selectedBooking.date.split(" ")[1]} <br/>
              </p>
            </DialogContentText>
          }
        </DialogContent>

        <DialogActions className='pt-0 pb-3 self-center'>
          <a href="#" onClick={closeModelComplete} className="mr-5 text-sm font-semibold leading-6 text-gray-900 no-underline">
            Cancel
          </a>

          <button
            type="submit"
            className="rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={completeBookingHandler}
          >
            Complete
          </button>
        </DialogActions>
      </Dialog>

      <div className="fixed bottom-0 bg-gray-200 w-full">
        <Footer />
      </div>
    </div>
  )
}