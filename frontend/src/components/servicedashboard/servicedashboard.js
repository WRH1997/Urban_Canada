import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './servicedashboard.css';
import logo from '../../assets/logo.png';
import prof from './assets/prof.png'
import down from './assets/down.png';
import down2 from './assets/down2.png';
import servImg from './assets/service.jpeg';
import Header from '../header/header';
import Footer from "../footer/footer";




import * as React from "react";
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export const ServiceDashboardPage = () => (
  <body class='servicedashbod'>
  <Header currentPage='/ServiceDashboardPage'/>

  <div className="bg-white w-full h-screen pt-4">

      <div className="buying_nav">

        <div class="relative inline-block text-left">

          <Menu as="div" className="relative inline-block text-left">
            <div className="pt-4 pr-4">
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Categories
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Books
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Electronics
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Furniture
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Musical Instruments
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Sports Equipments
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Others
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        All
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      
      <div className="pl-5">
        <p className="font-bold text-2xl pb-1 text-black mt-2">
          Buy Stuff!
        </p>
        <p className="font-medium text-base text-gray-500">
          Products on Sale
        </p>
      </div>

      <section class="bg-white">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
           
              <Link class="group p-2" to={'/Product_Details'}

              style={{             
              color: "#242424",
              backgroundColor: "#ffd711",
              borderRadius: "5px",
              transform: "1.2"
            }}
              
              
              
>
                <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img src={logo} alt={`Product`} class="h-full w-full object-cover object-center group-hover:opacity-75"/>
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Product Title</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">$123</p>
              </Link>
        
          </div>
        </div>
      </section>
     
    </div>

  {/* <div class='cont'>
      <div class='filter-box'>
        <label class='filter-lbl'>Filters</label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <img src={down2} class="down2" alt="X" />
        <hr></hr>
        <form class='filter-form'>
          <input type="checkbox" id="cat1" name="cat1" class='serverdashinput'></input>
          <label for="cat1">Category 1</label>
          <br></br>
          <input type="checkbox" id="cat2" name="cat2" class='serverdashinput'></input>
          <label for="cat2">Category 2</label>
          <br></br>
          <input type="checkbox" id="cat3" name="cat3" class='serverdashinput'></input>
          <label for="cat1">Category 3</label>
          <br></br>
          <input type="checkbox" id="cat4" name="cat4" class='serverdashinput'></input>
          <label for="cat1">Category 4</label>
          <br></br>
          <input type="checkbox" id="cat5" name="cat5" class='serverdashinput'></input>
          <label for="cat5">Category 5</label>
          <br></br>
          <input type="checkbox" id="cat6" name="cat6" class='serverdashinput'></input>
          <label for="cat6">Category 6</label>
          <br></br>
          <button class='filter-btn-sd'>
            <Link to="/ServiceDashErr1" class='filter-link'>Apply Filter</Link>
          </button>
        </form>
      </div>
      <div class='serv-dash'>
        <div class='service1'>
          <center><label class='serv-lbl'>Service Name</label></center>
          <center><img src={servImg} class="serv-img" alt="X" /></center>
          <div class='serv-info'>
            <b>Vendor Name</b>
            <br></br>
            <i>Vendor Location</i>
            <br></br>
            <u>Price Per Hour</u>
            <hr class='serv-sep'></hr>
            <div class='serv-desc'>
            (Service Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui...
            </div>
            <center>
            <button class='book-serv' type='button'>
              <Link to="/ServiceDashErr2" class="book-link">Book Service</Link>
            </button>
            <button class='view-vendor' type='button'>
              <Link to="/ServiceDashErr3" class="vend-link">Vendor Profile</Link>
            </button>
            </center>
          </div>
        </div>
        <div class='service1x'>
          <center><label class='serv-lbl'>Service Name</label></center>
          <center><img src={servImg} class="serv-img" alt="X" /></center>
          <div class='serv-info'>
            <b>Vendor Name</b>
            <br></br>
            <i>Vendor Location</i>
            <br></br>
            <u>Price Per Hour</u>
            <hr class='serv-sep'></hr>
            <div class='serv-desc'>
            (Service Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui...
            </div>
            <center>
            <button class='book-serv' type='button'>
              <Link to="/ServiceDashErr2" class="book-link">Book Service</Link>
            </button>
            <button class='view-vendor' type='button'>
              <Link to="/ServiceDashErr3" class="vend-link">Vendor Profile</Link>
            </button>
            </center>
          </div>
        </div>
        <div class='service1x'>
          <center><label class='serv-lbl'>Service Name</label></center>
          <center><img src={servImg} class="serv-img" alt="X" /></center>
          <div class='serv-info'>
            <b>Vendor Name</b>
            <br></br>
            <i>Vendor Location</i>
            <br></br>
            <u>Price Per Hour</u>
            <hr class='serv-sep'></hr>
            <div class='serv-desc'>
            (Service Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui...
            </div>
            <center>
            <button class='book-serv' type='button'>
              <Link to="/ServiceDashErr2" class="book-link">Book Service</Link>
            </button>
            <button class='view-vendor' type='button'>
              <Link to="/ServiceDashErr3" class="vend-link">Vendor Profile</Link>
            </button>
            </center>
          </div>
        </div>
        <div class='service1'>
          <center><label class='serv-lbl'>Service Name</label></center>
          <center><img src={servImg} class="serv-img" alt="X" /></center>
          <div class='serv-info'>
            <b>Vendor Name</b>
            <br></br>
            <i>Vendor Location</i>
            <br></br>
            <u>Price Per Hour</u>
            <hr class='serv-sep'></hr>
            <div class='serv-desc'>
            (Service Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui...
            </div>
            <center>
            <button class='book-serv' type='button'>
              <Link to="/ServiceDashErr2" class="book-link">Book Service</Link>
            </button>
            <button class='view-vendor' type='button'>
              <Link to="/ServiceDashErr3" class="vend-link">Vendor Profile</Link>
            </button>
            </center>
          </div>
        </div>
        <div class='service1x'>
          <center><label class='serv-lbl'>Service Name</label></center>
          <center><img src={servImg} class="serv-img" alt="X" /></center>
          <div class='serv-info'>
            <b>Vendor Name</b>
            <br></br>
            <i>Vendor Location</i>
            <br></br>
            <u>Price Per Hour</u>
            <hr class='serv-sep'></hr>
            <div class='serv-desc'>
            (Service Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui...
            </div>
            <center>
            <button class='book-serv' type='button'>
              <Link to="/ServiceDashErr2" class="book-link">Book Service</Link>
            </button>
            <button class='view-vendor' type='button'>
              <Link to="/ServiceDashErr3" class="vend-link">Vendor Profile</Link>
            </button>
            </center>
          </div>
        </div>
        <div class='service1x'>
          <center><label class='serv-lbl'>Service Name</label></center>
          <center><img src={servImg} class="serv-img" alt="X" /></center>
          <div class='serv-info'>
            <b>Vendor Name</b>
            <br></br>
            <i>Vendor Location</i>
            <br></br>
            <u>Price Per Hour</u>
            <hr class='serv-sep'></hr>
            <div class='serv-desc'>
            (Service Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui...
            </div>
            <center>
            <button class='book-serv' type='button'>
              <Link to="/ServiceDashErr2" class="book-link">Book Service</Link>
            </button>
            <button class='view-vendor' type='button'>
              <Link to="/ServiceDashErr3" class="vend-link">Vendor Profile</Link>
            </button>
            </center>
          </div>
        </div>
        <center>
          <div class='page-nav'>
          <a class='back'>Back</a>
          &nbsp;&nbsp;&nbsp;
          <a class='p1'>1</a>
          &nbsp;&nbsp;
          <Link to="/ServiceDashboardPage2" class='p2'>2</Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/ServiceDashboardPage2" class='next'>Next</Link>
        </div></center>
      </div>
  </div>
  <Footer/>
</body>
);

export const ServiceDashboardPage2 = () => (
    <body class='servicedashbod'>
     <Header/>
    <div class='cont'>
        <div class='filter-box'>
          <label class='filter-lbl'>Filters</label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <img src={down2} class="down2" alt="X" />
          <hr></hr>
          <form class='filter-form'>
            <input type="checkbox" id="cat1" name="cat1" class='serverdashinput'></input>
            <label for="cat1">Category 1</label>
            <br></br>
            <input type="checkbox" id="cat2" name="cat2" class='serverdashinput'></input>
            <label for="cat2">Category 2</label>
            <br></br>
            <input type="checkbox" id="cat3" name="cat3" class='serverdashinput'></input>
            <label for="cat1">Category 3</label>
            <br></br>
            <input type="checkbox" id="cat4" name="cat4" class='serverdashinput'></input>
            <label for="cat1">Category 4</label>
            <br></br>
            <input type="checkbox" id="cat5" name="cat5" class='serverdashinput'></input>
            <label for="cat5">Category 5</label>
            <br></br>
            <input type="checkbox" id="cat6" name="cat6" class='serverdashinput'></input>
            <label for="cat6">Category 6</label>
            <br></br>
            <button class='filter-btn-sd'>
              <Link to="/ServiceDashErr1" class='filter-link'>Apply Filter</Link>
            </button>
          </form>
        </div>
        <div class='serv-dash'>
          <div class='service1'>
            <center><label class='serv-lbl'>Service Name</label></center>
            <center><img src={servImg} class="serv-img" alt="X" /></center>
            <div class='serv-info'>
              <b>Vendor Name</b>
              <br></br>
              <i>Vendor Location</i>
              <br></br>
              <u>Price Per Hour</u>
              <hr class='serv-sep'></hr>
              <div class='serv-desc'>
              (Service Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui...
              </div>
              <center>
              <button class='book-serv' type='button'>
                <Link to="/ServiceDashErr2" class="book-link">Book Service</Link>
              </button>
              <button class='view-vendor' type='button'>
                <Link to="/ServiceDashErr3" class="vend-link">Vendor Profile</Link>
              </button>
              </center>
            </div>
          </div>
          <div class='service1x'>
            <center><label class='serv-lbl'>Service Name</label></center>
            <center><img src={servImg} class="serv-img" alt="X" /></center>
            <div class='serv-info'>
              <b>Vendor Name</b>
              <br></br>
              <i>Vendor Location</i>
              <br></br>
              <u>Price Per Hour</u>
              <hr class='serv-sep'></hr>
              <div class='serv-desc'>
              (Service Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui...
              </div>
              <center>
              <button class='book-serv' type='button'>
                <Link to="/ServiceDashErr2" class="book-link">Book Service</Link>
              </button>
              <button class='view-vendor' type='button'>
                <Link to="/ServiceDashErr3" class="vend-link">Vendor Profile</Link>
              </button>
              </center>
            </div>
          </div>
          <center><div class='page-nav'>
            <Link to="/ServiceDashboardPage" class='back1'>Back</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/ServiceDashboardPage" class='p11'>1</Link>
            &nbsp;&nbsp;
            <a class='p21'>2</a>
            &nbsp;&nbsp;&nbsp;
            <a class='next1'>Next</a>
          </div></center>
        </div>
    </div> */}






    <Footer/>
  </body>
  );