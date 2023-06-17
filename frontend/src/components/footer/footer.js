import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/logo2.png';
import icon from '../../assets/icon.jpg';

const guestNavigation = [
  { name: 'Home', href: '/'},
  { name: 'Login/SignUp', href: '/login'},
  { name: 'Service Booking', href: '/booking'},
  { name: 'My Bookings', href: '/MyBookings'},
];

const userNavigation = [
  { name: 'Service Booking', href: '/booking'},
  { name: 'My Bookings', href: '/MyBookings'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header(props) {

  const { currentPage } = props;
  const { isLoggedIn } = props;

  const navigation = isLoggedIn ? userNavigation : guestNavigation;

  const updatedNavigation = navigation.map((item) => {
    if (item.href === currentPage) {
      return { ...item, current: true };
    }
    return { ...item, current: false };
  });
  
  return (    
    <footer class="bg-gray-200 absolute bottom-0 w-full">
        <div class="m-5">
            <div class="sm:flex sm:items-center sm:justify-between">
                <div class="flex items-center sm:mb-0">
                    <img src={logo} class="h-7 mr-3" alt="Logo" />
                    <span class="self-center text-lg font-semibold whitespace-nowrap text-gray-800">Urban Canada</span>
                </div>
                <ul class="flex absolute right-2 flex-wrap items-center mb-6 text-sm font-medium text-gray-800 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="mr-1 hover:bg-gray-800 hover:text-gray-100 py-2 px-4 rounded">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-1 hover:bg-gray-800 hover:text-gray-100 py-2 px-4 rounded">FAQ</a>
                    </li>
                    <li>
                        <a href="#" class="hover:bg-gray-800 hover:text-gray-100 py-2 px-4 rounded">Contact Us</a>
                    </li>
                </ul>
            </div>
 
        </div>
    </footer>
  )
}