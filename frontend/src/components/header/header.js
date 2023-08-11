// author: HARSH NARESHBHAI KATHIRIA

import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/header_logo.png";
import icon from "../../assets/profile_icon.jpg";
import Button from '@mui/material/Button'
import ClearIcon from '@mui/icons-material/Clear';
import axios from "axios"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header(props) {

  const [hasNotifications, setHasNotifications] = useState(false);
  const [redDotClicked, setRedDotClicked] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")))
  const [notifications, setNotifications] = useState([])

  const guestNavigation = [
    { name: "Home", href: "/" },
    { name: "Login/SignUp", href: "/login" },
  ];

  var providerNavigation = [
    { name: "Home", href: "/" },
    { name: "Service Posting", href: "/ServicePosting" },
    { name: "My Bookings", href: "/consumer_bookings" },
    { name: "Ratings", href: `/rating` },
  ];

  if (JSON.parse(localStorage.getItem("userData")) != null) {
    providerNavigation = [
      { name: "Home", href: "/" },
      { name: "Service Posting", href: "/serviceposting" },
      { name: "My Bookings", href: "/provider_bookings" },
      { name: "My Ratings", href: `/rating/${userData._id}` },
    ];
  }

  const consumerNavigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/Services" },
    { name: "My Bookings", href: "/consumer_bookings" },
    {
      name: (
        <span className="flex items-center">
          <FavoriteIcon className="mr-1" />
          Favorites
        </span>
      ),
      href: "/favourites",
    },
  ];

  const fetchNotifications = () => {
    axios.get("http://localhost:3001/notifications/" + userData._id).then((res) => {
      if (res.data) {
        setNotifications(res.data.data.reverse());

        if (res.data.data.length > 0) {
          setHasNotifications(true);

          if (redDotClicked) {
            setRedDotClicked(false);
          }
        } else {
          setHasNotifications(false);
        }
      }
    });
  };

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");

    if (userDataString) {
      try {
        const userData = JSON.parse(userDataString);
        setUser(userData);
        setLoading(false);
      } catch (e) {
        console.error("Error parsing user data:", e);
      }

      fetchNotifications();

      const duration = setInterval(fetchNotifications, 2000);

      return () => {
        clearInterval(duration)
      };
    } else {
      console.error("No user data in local storage.");
    }
  }, []);

  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState("guest");
  const { currentPage } = props;

  useEffect(() => {
    const loggedin_user = localStorage.getItem("userData");

    if (loggedin_user) {
      const user_object = JSON.parse(loggedin_user);
      setLoggedInUser(user_object.role);
    }
  }, [])

  var navigation = guestNavigation;

  if (loggedInUser == "service-consumer") {
    navigation = consumerNavigation;
  }

  if (loggedInUser == "service-provider") {
    navigation = providerNavigation;
  }

  const updatedNavigation = navigation.map((item) => {
    if (item.href === currentPage) {
      return { ...item, current: true };
    }

    return { ...item, current: false };
  });

  const handleSignOut = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("authToken");
    window.location.href = "/";
  };

  const handleProfileNavigation = () => {
    window.location.href = "/profile";
  };

  const clearNotification = async (notification_id) => {
    await axios.delete(`http://localhost:3001/notifications/${notification_id}`)
  }

  const handleNotificationClick = () => {
    setRedDotClicked(true);
  };

  return (
    <div className="sticky top-0 bg-gray-800 z-50">
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-full">
              <div className="relative flex h-24 items-center justify-between mx-3">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>

                  {loggedInUser == "service-consumer" ||
                    loggedInUser == "service-provider" ? (
                    <div className="text-white font-medium text-base ml-2 mr-20">
                      Welcome {user.firstName} {user.lastName}!
                    </div>
                  ) : (
                    <div className="text-white font-medium text-base ml-2 mr-20">
                      Welcome to Urban Canada
                    </div>
                  )}
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img className="hidden h-12 w-18 lg:block" src={logo} />
                  </div>

                  <div className="hidden sm:ml-6 mt-2 sm:block">
                    <div className="flex space-x-1 ">
                      {updatedNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 no-underline text-white"
                              : "text-gray-300 no-underline hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {loggedInUser == "service-consumer" ||
                    loggedInUser == "service-provider" ? (
                    <div className="hidden sm:block text-white font-medium text-lg mr-3">
                      Welcome {user.firstName} {user.lastName}!
                    </div>
                  ) : (
                    <div className="hidden sm:block text-white font-medium text-lg mr-3">
                      Welcome to Urban Canada
                    </div>
                  )}

                  <Menu as="div">
                    <div>
                      <Menu.Button
                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        onClick={handleNotificationClick}
                        style={{ position: "relative" }}
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />

                        {!redDotClicked && hasNotifications && (
                          <span className="absolute top-0 right-0 block w-3 h-3 bg-red-500 rounded-full"></span>
                        )}
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
                      {
                        loggedInUser == "service-consumer" || loggedInUser == "service-provider" ?

                          <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" style={{ backgroundColor: "white" }}>
                            {notifications.length > 0 ? notifications.map((item, index) => (
                              <Menu.Item>
                                {/* <div className="d-flex flex-row justify-content-between align-items-center"> */}
                                <div key={index}
                                  className="d-flex flex-row justify-content-between align-items-center hover:bg-gray-200 block no-underline px-4 mx-2 my-1 rounded-md border-y-1 py-2 text-sm text-gray-700"
                                >
                                  <div>
                                    {item.message}
                                  </div>
                                  {/* <Button style={{color: "#45489a"}}>
                                  Clear
                                </Button> */}
                                  <ClearIcon className="notification-clear-icon" onClick={() => clearNotification(item._id)} />
                                </div>
                                {/* </div> */}
                              </Menu.Item>
                            ))
                              :
                              <div className="d-flex flex-row justify-content-center align-items-center">Notification box is empty!</div>
                            }
                          </Menu.Items>
                          :
                          <div></div>
                      }
                    </Transition>
                  </Menu>

                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-9 w-9 rounded-full"
                          src={icon}
                          alt=""
                        />
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
                      {loggedInUser == "service-consumer" ||
                        loggedInUser == "service-provider" ? (
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" style={{ backgroundColor: "white" }}>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                onClick={handleProfileNavigation}
                                className={classNames(
                                  active ? "bg-gray-200" : "",
                                  "block no-underline px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                onClick={handleSignOut}
                                className={classNames(
                                  active ? "bg-gray-200" : "",
                                  "block no-underline px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      ) : (
                        <div></div>
                      )}
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 no-underline text-white"
                        : "text-gray-300 no-underline hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
