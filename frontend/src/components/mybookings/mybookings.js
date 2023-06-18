import React from 'react';
import Header from '../header/header';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../mybookings/mybookings.css';

const people = [
  {
    no: '01',
    name: 'John Alexander',
    role: 'Electrician',
    date: '2023-01-23',
    time: '11:00',
    rate: '15',
    status: false,
  },
  {
    no: '02',
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    date: '2023-01-23',
    time: '11:00',
    rate: '15',
    status: 'in_progress',
  },
  {
    no: '03',
    name: 'Dries Vincent',
    role: 'Business Relations',
    date: '2023-01-23',
    time: '11:00',
    rate: '15',
    status: true,
  },
  {
    no: '04',
    name: 'Lindsay Walton',
    role: 'Front-end Dev',
    date: '2023-01-23',
    time: '11:00',
    rate: '15',
    status: false,
  },
  {
    no: '05',
    name: 'Courtney Henry',
    role: 'Designer',
    date: '2023-01-23',
    time: '11:00',
    rate: '15',
    status: 'in_progress',
  },
  {
    no: '06',
    name: 'Tom Cook',
    role: 'Director of Product',
    date: '2023-01-23',
    time: '11:00',
    rate: '15',
    status: true,
  },
]

export default function MyBookings() {

  return (
    <div>
      <Header currentPage="/MyBookings" />
      <div class="container">
        <h5 class="mt-5 mb-4">My Bookings</h5>

        <div class="row">
          <div class="col-12 mb-3 mb-lg-5">
            <div class="overflow-hidden card table-nowrap table-card">
              <div class="card-header d-flex align-items-center">
                <h6 class="mb-0" className="items-start">Jimmy Anderson</h6>
              </div>

              <div class="table-responsive">
                <table class="table mb-0">
                  <thead class="small text-uppercase bg-body text-muted">
                    <tr>
                      <th>No.</th>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Status</th>
                      <th>Cancel</th>
                    </tr>
                  </thead>

                  <tbody>
                    {people.map((person) => (
                      <tr class="align-middle">
                        <td>{person.no}</td>
                        <td class="h6 mb-0 lh-1">{person.name}</td>
                        <td>{person.role}</td>
                        <td>{person.date}</td>
                        <td>{person.time}</td>
                        <td>
                          {person.status==false ?
                          <button class="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-500 py-1 text-sm font-medium text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                            </svg>
                            <span>Pending</span>
                          </button> :
                          
                          person.status=='in_progress' ?
                          <button class="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 py-1 text-sm font-medium text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                            </svg>
                            <span>In Progress</span>
                          </button> :

                          <button class="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 py-1 text-sm font-medium text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                            </svg>
                            <span>Completed</span>
                          </button>}
                        </td>
                        <td class="text-end">
                          <button 
                          type="submit"           
                          class="flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 py-1 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          Cancel
                          </button>
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
    </div>
  )
}