import React, {useState} from 'react';
import Header from '../header/header';
import Footer from "../footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../mybookings_provider/mybookings_provider.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MenuList, Paper } from '@mui/material';

const people = [
  {
    no: '01',
    name: 'John Alexander',
    role: 'Electrician',
    date: '2023-01-23',
    time: '11:00',
    rate: '15',
    status: 'Pending',
    isCanceled: false,
  },
  {
    no: '02',
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    date: '2023-01-23',
    time: '11:00',
    rate: '15',
    status: 'Approved',
    isCanceled: false,
  },
  {
    no: '03',
    name: 'Dries Vincent',
    role: 'Business Relations',
    date: '2023-01-23',
    time: '11:00',
    rate: '15',
    status: 'Completed',
    isCanceled: false,
  },
  {
    no: '04',
    name: 'Lindsay Walton',
    role: 'Front-end Dev',
    date: '2023-01-23',
    time: '11:00',
    rate: '15',
    status: 'Pending',
    isCanceled: true,
  },
  {
    no: '05',
    name: 'Courtney Henry',
    role: 'Designer',
    date: '2023-01-23',
    time: '11:00',
    rate: '15',
    status: 'Approved',
    isCanceled: false,
  },
  {
    no: '06',
    name: 'Tom Cook',
    role: 'Director of Product',
    date: '2023-01-23',
    time: '11:00',
    rate: '15',
    status: 'Completed',
    isCanceled: false,
  },
  {
    no: '07',
    name: 'Nandkumar Kadivar',
    role: 'Managing Director',
    date: '2023-06-20',
    time: '15:00',
    rate: '39',
    status: 'Completed',
    isCanceled: false,
  },
  {
    no: '04',
    name: 'Lindsay Walton',
    role: 'Front-end Dev',
    date: '2023-01-23',
    time: '11:00',
    rate: '15',
    status: 'Pending',
    isCanceled: true,
  },
  {
    no: '05',
    name: 'Courtney Henry',
    role: 'Designer',
    date: '2023-01-23',
    time: '11:00',
    rate: '15',
    status: 'Approved',
    isCanceled: false,
  },
  {
    no: '06',
    name: 'Tom Cook',
    role: 'Director of Product',
    date: '2023-01-23',
    time: '11:00',
    rate: '15',
    status: 'Completed',
    isCanceled: false,
  },
  {
    no: '07',
    name: 'Nandkumar Kadivar',
    role: 'Managing Director',
    date: '2023-06-20',
    time: '15:00',
    rate: '39',
    status: 'Pending',
    isCanceled: false,
  },
]

export default function MyBookings() {

  const [isOpen, setIsOpen] = useState(false);

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
                      <th className='booking-th'>Address</th>
                      <th className='booking-th'>Date</th>
                      <th className='booking-th'>Time</th>
                      <th className='booking-th'>Status</th>
                      <th className='booking-th'>Manage</th>
                    </tr>
                  </thead>

                  <tbody>
                    {people.map((person,index) => (
                      <tr class="align-middle">
                        <td>{index+1}</td>
                        <td class="h6 mb-0 lh-1">{person.name}</td>
                        <td>{person.address}</td>
                        <td>{person.date}</td>
                        <td>{person.time}</td>
  
                        <td>
                          {person.isCanceled==true ?
                            <div class="flex w-full rounded-md py-1 text-sm font-bold text-red-500">
                              <span>Cancelled</span>
                            </div> :

                          person.status=='Pending' ?
                            <div class="flex w-full rounded-md py-1 text-sm font-bold text-gray">
                              <span>{person.status}</span>
                            </div> :
                            
                            person.status=='Approved' ?
                            <div class="flex w-full rounded-md py-1 text-sm font-bold text-blue-500">
                              <span>{person.status}</span>
                            </div> :

                            <div class="flex w-full rounded-md py-1 text-sm font-bold text-green-600">
                            <span>{person.status}</span>
                            </div>
                          }
                        </td>

                        <td>
                        <MoreVertIcon className='mybooking-action-btn' aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick} />
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

                          
                            {person.status=='Pending' ?
                            <Paper>
                            <MenuList className='mybooking-action-menu'>
                             <MenuItem onClick={handleClose}>Approve</MenuItem>
                             <MenuItem onClick={handleClose}>Reject</MenuItem>
                             </MenuList>
                          </Paper>                
                            :
                            person.status=='Approved' ?
                            <Paper>
                            <MenuList className='mybooking-action-menu'>
                             <MenuItem onClick={handleClose}>Complete</MenuItem>
                             </MenuList>
                          </Paper>                
                            :
                            <Paper>
                            <MenuList className='mybooking-action-menu'>
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
      
      
      <Footer/>
    </div>
  )
}