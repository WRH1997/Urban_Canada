// author: HARSH NARESHBHAI KATHIRIA

import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import Header from "../header/header";
import Footer from "../footer/footer";
import axios from "axios"

export default function Bookings(props) {

  const location = useLocation();
  const service = location.state;
  const user = localStorage.getItem("userData")
  const consumer_id = JSON.parse(user)._id
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [note, setNote] = useState("")
  const [address, setAddress] = useState("")

  const submitBookinghandler = (e) => {
    e.preventDefault()
    if (address != "" && date != "" && time != "") {
      if (consumer_id && service) {
        const booking = {
          consumer_id: consumer_id,
          provider_id: service.vendorID,
          service_id: service._id,
          address: address,
          date: date + " " + time,
          note: note
        }

        axios.post("http://localhost:3001/booking/create", booking).then((res) => {
          const notification = {
            booking_id: res.data.booking._id,
            recipient_id: service.vendorID,
            message: "New Booking Request",
            type: "Booking Created"
          }

          axios.post("http://localhost:3001/notifications", notification).then((res) => {
            if (res) {
              localStorage.setItem("booking_alert", "Booking Created Successfully")
              window.location.href = "/consumer_bookings"
            }
          }).catch((e) => {
            setBookingAlert(e)
          })
        }).catch((e) => {
          setBookingAlert(e)
        })
      }

      else {
        setBookingAlert(e)
      }
    }

    else {
      setBookingAlert("Address, Date and Time are required.")
    }
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

  const [bookingAlert, setBookingAlert] = useState(localStorage.getItem("booking_alert"))
  setTimeout(() => {
    setBookingAlert(null);
  }, 3000);

  const [minDate, setMinDate] = useState(getCurrentDate());

  return (
    <div>
      <Header currentPage="/booking" />

      <form
        className="max-w-sm bg-white pt-10 pb-24 m-auto"
      >
        <div class="mx-8">
          <h2 className="text-base font-semibold leading-7 text-xl text-gray-900">
            Service Booking
          </h2>

          <p className="mt-2 text-m leading-6 text-gray-600">{service.serviceName}</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 w-max">
            <div className="sm:col-span-4 ">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>

              <div className="mt-2 flex rounded-md ring-1 ring-gray-300">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  value={service.vendorName}
                  disabled
                />
              </div>
            </div>

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
                  min={minDate}
                  name="date"
                  id="date"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                  value={date}
                  onChange={(e) => { setDate(e.target.value) }}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
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
                  onChange={(e) => { setTime(e.target.value) }}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>

              <div className="mt-2">
                <div className="flex rounded-md ring-1 ring-gray-300">
                  <textarea
                    type="textarea"
                    name="address"
                    id="notes"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={address}
                    onChange={(e) => { setAddress(e.target.value) }}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Notes
              </label>

              <div className="mt-2">
                <div className="flex rounded-md ring-1 ring-gray-300">
                  <textarea
                    type="textarea"
                    name="notes"
                    id="notes"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={note}
                    onChange={(e) => { setNote(e.target.value) }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <a href="/services" className="text-sm font-semibold leading-6 text-gray-900 no-underline">
              Cancel
            </a>

            <button
              type="submit"
              className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={submitBookinghandler}
            >
              Book
            </button>
          </div>
        </div>
        {
          bookingAlert != null &&
          <div className='booking-alerts p-3'>
            {bookingAlert}
          </div>
        }
      </form>
      <div className="fixed bottom-0 bg-gray-200 w-full">
        <Footer />
      </div>
    </div>
  );
}