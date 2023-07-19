import React from 'react';
import Header from '../header/header';
import Footer from "../footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
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
  {
    no: '07',
    name: 'Nandkumar Kadivar',
    role: 'Managing Director',
    date: '2023-06-20',
    time: '15:00',
    rate: '39',
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
  {
    no: '07',
    name: 'Nandkumar Kadivar',
    role: 'Managing Director',
    date: '2023-06-20',
    time: '15:00',
    rate: '39',
    status: true,
  },
]

export default function MyBookings() {

  return (
    <div>
      <Header currentPage="/MyBookings" />
      <div class="container">
        <h5 class="mb-4">My Bookings</h5>

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
                      <th>No.</th>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Status</th>
                      <th>Reschedule</th>
                      <th>Cancel</th>
                      <th>Review</th>
                      <th>Manage</th>
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
                            <div class="flex w-full rounded-md py-1 text-sm font-bold text-gray">
                              <span>Pending</span>
                            </div> :
                            
                            person.status=='in_progress' ?
                            <div class="flex w-full rounded-md py-1 text-sm font-bold text-blue-500">
                              <span>In Progress</span>
                            </div> :

                            <div class="flex w-full rounded-md py-1 text-sm font-bold text-green-600">
                            <span>Completed</span>
                            </div>
                          }
                        </td>

                        <td>
                          {person.status==false || person.status=='in_progress' ?
                            <button class="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-500 py-1 text-sm font-medium text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                              </svg>
                              <span>Reschedule</span>
                            </button> :

                            <button class="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-500 py-1 text-sm font-medium text-white" disabled>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                              </svg>
                              <span>Reschedule</span>
                            </button>
                          }
                        </td>

                        <td class="text-end">
                          {person.status==true ?
                            <button class="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-500 py-1 text-sm font-medium text-white" disabled>
                              <span>Cancel</span>
                            </button> :

                            <button 
                            type="submit"           
                            class="flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 py-1 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Cancel
                            </button>
                          }
                        </td>

                        <td class="text-end">
                          {person.status==true ?
                            <button class="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 py-1 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                              <span>Review</span>
                            </button> :

                            <button 
                            type="submit"
                            class="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-500 py-1 text-sm font-medium text-white" disabled>
                            Review
                            </button>
                          }
                        </td>

                        <td>
                          
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>
                        <select
                labelId="demple-select"
                label="Usero-simple-select-label"
                id="demo-sim Role"
                class="block flex-1 border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
                  <option selected disabled value="manage">

    
                  

                  </option>
                  <option value="service-provider">.</option>
                  <option value="service-provider">.</option>
                </select>
                
                          {person.status==false ?
                            <div class="flex w-full rounded-md py-1 text-sm font-bold text-gray">
                             
                            </div> :
                            
                            person.status=='in_progress' ?
                            <div class="flex w-full rounded-md py-1 text-sm font-bold text-blue-500">
                              
                            </div> :

                            <div class="flex w-full rounded-md py-1 text-sm font-bold text-green-600">
                      
                            </div>
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
      
      
      <Footer/>
    </div>
  )
}