// author: HARSH NARESHBHAI KATHIRIA

import React, { useState, useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MenuList, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Header from '../header/header';
import Footer from "../footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../mybookings/mybookings.css';
import axios from 'axios';

export default function MyBookings() {

  const user = localStorage.getItem("userData")
  const consumer_id = JSON.parse(user)._id
  const provider_id = JSON.parse(user)._id
  const [isOpen, setIsOpen] = useState(false);
  const [bookings, setBookings] = useState([])
  const [openEdit, setOpenEdit] = useState(false)
  const [openCancel, setOpenCancel] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState("")

  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const handleFeedback = (provider_id, booking_id) => {
    window.location.href = `/rating/${provider_id}/${booking_id}`;
  }

  const openModel = (booking) => {
    setSelectedBooking(booking)
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

  const [bookingAlert, setBookingAlert] = useState(localStorage.getItem("booking_alert"))
  setTimeout(() => {
    localStorage.removeItem("booking_alert")
    setBookingAlert(null);
  }, 3000);

  useEffect(() => {
    axios.get(`http://localhost:3001/booking/service-consumer/${consumer_id}`).then((res) => {
      var data = []
      if (res.data && res.data.length > 0) {
        res.data.forEach(element => {
          if (element.consumer_id && element.service_id && element.provider_id) {
            data.push(element)
          }
        });
      }
      setBookings(data)
    }).catch((e) => {
      alert(e)
    })
  }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [selectedPerson, setSelectedPerson] = useState("")
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, person) => {
    setSelectedPerson(person)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setSelectedPerson("")
    setAnchorEl(null);
  };

  const rescheduleBookingHandler = () => {
    if (date != "" && time != "") {
      const data = {
        date: date + " " + time
      }
      const booking_id = selectedBooking._id
      axios.put(`http://localhost:3001/booking/reschedule/${booking_id}`, data).then((res) => {
        if (res.data) {
          const notification = {
            booking_id: booking_id,
            recipient_id: selectedBooking.provider_id._id,
            message: "Booking has been recheduled",
            type: "Booking Reschedule"
          }
          axios.post("http://localhost:3001/notifications", notification).then((res) => {
            if (res) {
              localStorage.setItem("booking_alert", "Booking Rescheduled Successfully")
              window.location.href = "/consumer_bookings"
            }
          }).catch((e) => {
            alert(e)
          })
        }
      }).catch((e) => {
        alert(e)
      })
      closeModel()
    }

    else {
      alert("Date and Time are required.")
    }
  }

  const cancelBookingHandler = () => {
    const booking_id = selectedBooking._id
    axios.put(`http://localhost:3001/booking/cancel/${booking_id}`).then((res) => {
      const notification = {
        booking_id: booking_id,
        recipient_id: selectedBooking.provider_id._id,
        message: "Booking has been canceled",
        type: "Booking Canceled"
      }
      axios.post("http://localhost:3001/notifications", notification).then((res) => {
        if (res) {
          localStorage.setItem("booking_alert", "Booking Canceled Successfully")
          window.location.href = "/consumer_bookings"
        }
      }).catch((e) => {
        alert(e)
      })
    }).catch((e) => {
      alert(e)
    })
    closeModel()
  }

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return `${year}-${month}-${day}`;
  };

  const [minDate, setMinDate] = useState(getCurrentDate());

  return (
    <div>
      <Header currentPage="/consumer_bookings" />

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
                    {bookings.map((person, index) => {
                      if (person.consumer_id && person.service_id && person.provider_id) {
                        return (
                          <tr class="align-middle">
                            <td>{index + 1}</td>
                            <td class="h6 mb-0 lh-1">{person.service_id.vendorName}</td>
                            <td>{person.service_id.category}</td>
                            <td>{person.service_id.serviceName}</td>
                            <td>{person.address}</td>
                            <td>{person.note != "" ? person.note : "-"}</td>
                            <td>{person.date.split(" ")[0]}</td>
                            <td>{person.date.split(" ")[1]}</td>

                            <td>
                              {
                                person.isCanceled == true ?
                                  <div class="flex w-full rounded-md py-1 text-sm font-bold text-red-500">
                                    <span>Cancelled</span>
                                  </div> :
                                  person.status == 'Pending' ?
                                    <div class="flex w-full rounded-md py-1 text-sm font-bold text-gray">
                                      <span>{person.status}</span>
                                    </div> :
                                    person.status == 'Completed' ?
                                      <div class="flex w-full rounded-md py-1 text-sm font-bold text-success">
                                        <span>{person.status}</span>
                                      </div> :
                                      person.status == 'Approved' &&
                                      <div class="flex w-full rounded-md py-1 text-sm font-bold text-blue-500">
                                        <span>{person.status}</span>
                                      </div>
                              }
                            </td>

                            <td>
                              {person.isCanceled || person.status == "Approved" ?
                                <MoreVertIcon className='mybooking-action-btn' aria-controls={open ? 'basic-menu' : undefined}
                                  aria-haspopup="true"
                                  aria-expanded={open ? 'true' : undefined}
                                /> :
                                <MoreVertIcon className='mybooking-action-btn' aria-controls={open ? 'basic-menu' : undefined}
                                  aria-haspopup="true"
                                  aria-expanded={open ? 'true' : undefined}
                                  onClick={(e) => handleClick(e, person)}
                                />
                              }
                            </td>
                          </tr>
                        )
                      }
                    }
                    )}
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
        {
          selectedPerson.isCanceled == true ?
            <Paper></Paper> :
            selectedPerson.status == 'Pending' ?
              <Paper>
                <MenuList className='p-0 mybooking-action-menu'>
                  <MenuItem onClick={() => openModel(selectedPerson)} ><p className='m-0 text-gray-800 text-sm'>Reschedule</p></MenuItem>
                  <MenuItem onClick={() => openModelCancel(selectedPerson)}><p className='m-0 text-gray-800 text-sm'>Cancel</p></MenuItem>
                </MenuList>
              </Paper> :
              selectedPerson.status == 'Completed' ?
                <Paper>
                  <MenuList className='p-0 mybooking-action-menu'>
                    <MenuItem onClick={() => handleFeedback(selectedPerson.provider_id._id, selectedPerson._id)}>Feedback</MenuItem>
                  </MenuList>
                </Paper> :
                selectedPerson.status == 'Approved' &&
                <Paper></Paper>
        }
      </Menu>

      <Dialog
        open={openEdit}
        onClose={closeModel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <p className='m-0 p-0 text-gray-800 text-lg font-bold'>Reschedule</p>
        </DialogTitle>

        <DialogContent className='pb-2'>
          {
            selectedBooking != "" &&

            <DialogContentText id="alert-dialog-description">
              <p className='m-0 p-0 text-black text-sm'>
                <b>Vendor:</b> {selectedBooking.service_id.vendorName} <br />
                <b>Category:</b> {selectedBooking.service_id.category} <br />
                <b>Service:</b> {selectedBooking.service_id.serviceName} <br />
              </p>

              <div className="sm:col-span-2 sm:col-start-1 mt-3">
                <label
                  htmlFor="date"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Date
                </label>

                <div className="mt-2 flex rounded-md ring-1 ring-gray-300">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    min={minDate}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                    value={date}
                    onChange={(e) => { setDate(e.target.value) }}
                  />
                </div>
              </div>

              <div className="sm:col-span-2 mt-2">
                <label
                  htmlFor="time"
                  className="block text-sm font-bold leading-6 text-gray-900"
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
                    onChange={(e) => { setTime(e.target.value) }}
                  />
                </div>
              </div>
            </DialogContentText>
          }
        </DialogContent>

        <DialogActions className='py-3 px-5 self-center'>
          <a href="#" onClick={closeModel} className="mr-5 text-sm font-semibold leading-6 text-gray-900 no-underline">
            Cancel
          </a>

          <button
            type="submit"
            className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={rescheduleBookingHandler}
          >
            Confirm
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
          <p className='m-0 p-0 text-gray-800 text-lg font-bold'>Cancel Booking</p>
        </DialogTitle>

        <DialogContent className='pb-2'>
          {
            selectedBooking != "" &&

            <DialogContentText id="alert-dialog-description">
              <p className='m-0 p-0 text-black text-sm'>
                <b>Vendor:</b> {selectedBooking.service_id.vendorName} <br />
                <b>Category:</b> {selectedBooking.service_id.category} <br />
                <b>Service:</b> {selectedBooking.service_id.serviceName} <br />
                <b>Date:</b> {selectedBooking.date.split(" ")[0]} <br />
                <b>Time:</b> {selectedBooking.date.split(" ")[1]} <br />
              </p>
            </DialogContentText>
          }
        </DialogContent>

        <DialogActions className='pb-3 mx-4 pt-2 self-center'>
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
      <div className="fixed bottom-0 bg-gray-200 w-full">
        <Footer />
      </div>
      {
        bookingAlert != null &&
        <div className='booking-alerts p-3'>
          {bookingAlert}
        </div>
      }
    </div>
  )
}