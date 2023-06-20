import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { display } from "@mui/system";
import logo from '../../assets/logo2.png';
import illustration from '../../assets/landingpage_illustration.svg'
import './landing.css'

const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const stats = [
    { name: 'Service Provides', value: '200+' },
    { name: 'Satisfied Customers', value: '1300+' },
    { name: 'Cities', value: '40' },
    { name: 'Services', value: '15' },
  ]

export default function Landing() {

  return (
    <div>
      <Header currentPage="/"/>
      <div className="relative isolate overflow-hidden bg-gray-900 sm:py-32">
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 d-flex flex-column justify-content-center align-items-center">
          <div className="col-9 mx-auto lg:mx-0 md:py-4">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Urban Canada</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            A modern service marketplace to empower vendors and satisfy clients
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none justify-content-center col-9">
            {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div> */}
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4" style={{backgroundColor: "#fff",  padding: "2rem", opacity: 0.7, borderRadius: "5px"}}>
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse justify-content-center align-items-center">
                  <dt className="text-base leading-7 text-gray-800">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-gray" style={{alignContent: "center"}}>{stat.value}</dd>
                </div>
              ))}
            </dl> 
          </div>
        </div>
      </div>
      <section className="col-12 p-4 flex-wrap" style={{display: "flex", justifyContent: "center", backgroundColor: "#f7f7f7"}}>
        <div className="col-lg-6 col-12 p-3" style={{display: "flex", justifyContent: "center"}}>
          <img src={illustration} atl="Who are we?" />
        </div>
        <div className="col-lg-6 col-12 p-3" style={{fontSize: "24px"}}>
            Urban Canada is your portal to a modern service marketplace. Whether you're someone trying to find a service near you or a service vendor looking to attract clients, our platform expedites and simplifies the process of connecting the right clients to the right service vendors!
        </div>
      </section>

      <section className="col-12 p-4 d-flex flex-wrap " style={{backgroundColor: "#fff"}}>
        <div className="col-12 d-flex align-items-center justify-content-center" style={{fontSize: "32px"}}>Features</div>
        <div className="col-12 d-flex flex-wrap flex-row align-items-start">
          <div className="col-lg-6 col-12 p-3 features-card">
            <div className="p-3">Clients</div>
            <ul className="feature-list">
              <li className="feature-list-li">Browse Hundreds of Verified Service Postings</li>
              <li className="feature-list-li">Find the Services Your Looking For Using Our Robust Service Filtering and Searching Features</li>
              <li className="feature-list-li">Quickly Book Your Next Service Within Minutes</li>
              <li className="feature-list-li">Easily Contact Vendors and Site Admins to Resolve Issues and Disputes</li>
              <li className="feature-list-li">View What Others Are Saying About a Service or Leave Your Own Feedback About A Service</li>
            </ul>
          </div>
          <div className="col-lg-6 col-12 p-3 features-card">
            <div className="p-3">Providers</div>
            <ul className="feature-list">
              <li className="feature-list-li">Have Your Service Listings Viewed by A Large and Established User Base</li>
              <li className="feature-list-li">Manage Multiple Listings and Bookings From a Centralized Dashboard</li>
              <li className="feature-list-li">Approve, Decline, or Cancel Services Clients Have Booked Through a Dedicated Management Dashboard</li>
              <li className="feature-list-li">Tag and Categorize Your Service Listings to Increase its Exposure to Your Target Audience"</li>
            </ul>
          </div>
        </div>
      </section>

      <footer class="bg-gray-200 w-full">
        <div class="p-4">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex items-center sm:mb-0">
              <img src={logo} class="h-7 mr-3" alt="Logo" />
              <span class="self-center text-lg font-semibold whitespace-nowrap text-gray-800">Urban Canada</span>
            </div>
            <ul class="flex absolute right-2 flex-wrap items-center mb-6 text-sm font-medium text-gray-800 sm:mb-0 dark:text-gray-400">
              <li>
                  <a href="#" class="mr-1 no-underline text-gray-800 hover:bg-gray-800 hover:text-gray-100 py-2 px-4 rounded">About</a>
              </li>
              <li>
                  <a href="/faq" class="mr-1 no-underline text-gray-800 hover:bg-gray-800 hover:text-gray-100 py-2 px-4 rounded">FAQ</a>
              </li>
              <li>
                  <a href="/contact" class="no-underline text-gray-800 hover:bg-gray-800 hover:text-gray-100 py-2 px-4 rounded">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}