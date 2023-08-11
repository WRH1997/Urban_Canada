// author: HARSH NARESHBHAI KATHIRIA

import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import illustration from '../../assets/who_are_we.svg';
import './landing.css';

const stats = [
  { name: 'Service Provides', value: '256+' },
  { name: 'Satisfied Customers', value: '1372+' },
  { name: 'Cities', value: '37' },
  { name: 'Services', value: '23' },
]

export default function Landing() {

  return (
    <div>
      <Header currentPage="/" />

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
          <div className="col-9 mx-auto lg:mx-0">
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">Urban Canada</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              A modern service marketplace to empower vendors and satisfy clients.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none justify-content-center col-9">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: "#fff", padding: "2rem", opacity: 0.7, borderRadius: "5px" }}>
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse justify-content-center align-items-center">
                  <dt className="text-base leading-7 text-gray-800">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-gray" style={{ alignContent: "center" }}>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <section className="col-12 p-4 flex-wrap" style={{ display: "flex", justifyContent: "center", backgroundColor: "#f7f7f7" }}>
        <div className="col-lg-6 col-12 p-3" style={{ display: "flex", justifyContent: "center" }}>
          <img src={illustration} atl="Who are we?" />
        </div>

        <div className="col-lg-6 col-12 p-3 my-4" style={{ fontSize: "22px" }}>
          Urban Canada is your portal to a modern service marketplace. Whether you're someone trying to find a service near you or a service vendor looking to attract clients, our platform expedites and simplifies the process of connecting the right clients to the right service vendors!
        </div>
      </section>

      <section className="col-12 p-4 d-flex flex-wrap " style={{ backgroundColor: "#fff" }}>
        <div className="col-12 d-flex align-items-center justify-content-center" style={{ fontSize: "30px" }}>
          Features
        </div>
        <div className="col-12 d-flex flex-wrap flex-row align-items-start">
          <div className="col-lg-6 col-12 p-3 features-card">
            <div className="p-3">Clients</div>
            <ul className="feature-list">
              <li className="feature-list-li">Browse hundreds of verified service postings.</li>
              <li className="feature-list-li">Find the services you are looking for, using our robust service filtering and searching features.</li>
              <li className="feature-list-li">Easily contact vendors and site admins to resolve issues and disputes.</li>
              <li className="feature-list-li">View what others say about a service or leave your feedback about a service.</li>
            </ul>
          </div>
          <div className="col-lg-6 col-12 p-3 features-card">
            <div className="p-3">Providers</div>
            <ul className="feature-list">
              <li className="feature-list-li">Have your service listings viewed by a large and established user base.</li>
              <li className="feature-list-li">Manage multiple listings and bookings from a centralized dashboard.</li>
              <li className="feature-list-li">Approve, Decline, or Cancel services booked by clients through management dashboard.</li>
              <li className="feature-list-li">Tag and categorize your services to increase its exposure to your target audience.</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}