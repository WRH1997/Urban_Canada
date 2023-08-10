# Urban Canada

**This application is a modern service marketplace to empower vendors and satisfy clients. It serves as an online portal for vendors, tradesmen, service providers and other entrepreneurs or small business owners to market their services to a wider customer in one convenient location. For the persons or entities providing services (vendors), and for the persons purchasing or subscribing to these services (consumers) the application will provide a convenient interface. This service is important because it will seek to improve upon existing marketplaces to provide a more seamless interaction between vendors and consumers aggregating the pros and eradicating the cons associated with other popular platforms.**

* *Date Created*: 18 JUN 2023
* *Last Modification Date*: 10 AUG 2023
* *Project URL*: <https://main--brilliant-pixie-8bba9e.netlify.app/>
* *Git URL*: <https://git.cs.dal.ca/kathiria/csci-5709-grp-13/>

## Authors

* [Harsh Nareshbhai Kathiria](hr527292@dal.ca) - *(Full Stack Developer)*
* [Nandkumar Kadivar](nn521973@dal.ca) - *(Full Stack Developer)*
* [Darshil Patel](darshil.patel@dal.ca) - *(Full Stack Developer)*
* [Muskan Vazirani](muskan@dal.ca) - *(Full Stack Developer)*
* [Waleed Alhindi](wl392785@dal.ca) - *(Full Stack Developer)*
* [Edwin Adams](ed743899@dal.ca) - *(Full Stack Developer)*

## Testing

To test the web pages are correctly rendering and responding, the deployed application's landing page was navigated. It was observed that the first page the browser directed us towards was landing page, and it had been rendered as we expected. Further, we tested our Contact Us and FAQ pages by redirecting through the provided buttons on landing page and it works as expected. Then we tried to access the webpages of different user personas from cross user logins, where the access was restricted, which was supposed to be. Then we tested signup, login and sign out followed by password reset. Password reset sent an OTP to the right email and OTP validations, update password works correctly. Then we tested update profile using different user roles and deleting account which also work as expected. Furthermore, we tested service posting, filtering, booking, rescheduling, cancelling, approving, rejecting and completing the service. Rating feature and feedback option was tested and provided positive results. We tested responsivness by switching to tablet and mobile view respectively where it has user friedly display. Moreover, we went thorugh testing process for notifcations and wishlist feature, which also works as expected.

To test service provider and consumer modules, user can signup. Service provider cannot proceed without admin approval, so admin needs to approve request. To test admin panel, credentials are as follows:
* Email: admin@gmail.com
* Password: Nand@123

## Deployment

Initially, we imported existing project of backend environment on render from github as we had repository ready. We setup build settings and environment variables to deploy the app. Then it was deployed and a link was generated which we used to make api calls from frontend and make backend talk with each other. Then we imported existing project of front-end environment on netlify from github and setup build settings to deploy the app. Then we added a redirect file which helps in redirecting the page on the live system. Finally, it was deployed and live on the mentioned link, working as expected.

## Built With

* [React](https://legacy.reactjs.org/docs/getting-started.html/) - The Web framework used.
* [npm](https://docs.npmjs.com) - Dependency Management.
* [Node](https://nodejs.org/en/docs) - Enviorment Support.
* [Express](https://expressjs.com) - The web framework used.
* [MongoDB](https://www.mongodb.com/docs) - The database used.

## Sources Used

### header.js

*Lines 20 - 271*

```
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

if(JSON.parse(localStorage.getItem("userData")) != null){
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
];

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
  } else {
    console.error("No user data in local storage.");
  }
}, []);

const navigate = useNavigate();
const [loggedInUser,setLoggedInUser] = useState("guest")
const { currentPage } = props;

useEffect(()=>{
  const loggedin_user = localStorage.getItem("userData")

  if(loggedin_user){
    const user_object = JSON.parse(loggedin_user)
    setLoggedInUser(user_object.role)
  }
},[])

console.log(loggedInUser)

var navigation = guestNavigation;

if(loggedInUser == "service-consumer"){
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

                {
                  loggedInUser == "service-consumer" || loggedInUser == "service-provider" ?

                  <div className="text-white font-medium text-base ml-2 mr-20">
                    Welcome {user.firstName} {user.lastName}!
                  </div> :

                  <div className="text-white font-medium text-base ml-2 mr-20">
                    Welcome to Urban Canada
                  </div>
                }
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
                {
                  loggedInUser == "service-consumer" || loggedInUser == "service-provider" ?

                  <div className="hidden sm:block text-white font-medium text-lg mr-3">
                    Welcome {user.firstName} {user.lastName}!
                  </div> :

                  <div className="hidden sm:block text-white font-medium text-lg mr-3">
                    Welcome to Urban Canada
                  </div>
                }
                
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

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
                    {
                  loggedInUser == "service-consumer" || loggedInUser == "service-provider" ?

                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                    :

                    <div></div>
                  }
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
```

The code above was created by adapting the code in [Navbars - Official Tailwind CSS UI Components](https://tailwindui.com/components/application-ui/navigation/navbars) as shown below: 

```
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
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
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
```

- The code in [Navbars - Official Tailwind CSS UI Components](https://tailwindui.com/components/application-ui/navigation/navbars) was implemented by thoroughly studying the original source and understanding its functionality and logic. Then, I adapted the code to suit the requirements of my assignment.
- [Navbars - Official Tailwind CSS UI Components](https://tailwindui.com/components/application-ui/navigation/navbars)'s Code was used because I believed it would be a helpful reference for the starting point for my assignment. The original code served as a valuable resource in understanding the problem domain, exploring different approaches, and learning specific techniques. I aimed to gain insights into specific techniques, algorithms, and design patterns that could be relevant to the assignment. It was my belief that incorporating well-implemented code from external sources would expedite the development process and help me achieve the desired functionality and efficiency.
- [Navbars - Official Tailwind CSS UI Components](https://tailwindui.com/components/application-ui/navigation/navbars)'s Code was modified by altering it according to the need of component with major changes in code like adjusting variable names and integrating it with other components. Also the content was modified based on requirement of the module.

### footer.js

*Lines 9 - 30*

```
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
```

The code above was created by adapting the code in [Tailwind CSS Footer - Flowbite](https://flowbite.com/docs/components/footer/) as shown below: 

```
<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
  <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
      </a>
      <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
        </li>
        <li>
          <a href="#" class="hover:underline">Contact</a>
        </li>
      </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
  </div>
</footer>
```

- The code in [Tailwind CSS Footer - Flowbite](https://flowbite.com/docs/components/footer/) was implemented by thoroughly studying the original source and understanding its functionality and logic. Then, I adapted the code to suit the requirements of my assignment.
- [Tailwind CSS Footer - Flowbite](https://flowbite.com/docs/components/footer/)'s code was used because I believed it would be a helpful reference for the starting point for my assignment. The original code served as a valuable resource in understanding the problem domain, exploring different approaches, and learning specific techniques. I aimed to gain insights into specific techniques, algorithms, and design patterns that could be relevant to the assignment. It was my belief that incorporating well-implemented code from external sources would expedite the development process and help me achieve the desired functionality and efficiency.
- [Tailwind CSS Footer - Flowbite](https://flowbite.com/docs/components/footer/)'s code was modified by altering it according to the need of component with major changes in code like adjusting variable names and integrating it with other components. Also the content was modified based on requirement of the module.

### landing.js

*Lines 22 - 68*

```
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
```
The code above was created by adapting the code in [Header Sections - Official Tailwind CSS UI Components](https://tailwindui.com/components/marketing/sections/header) as shown below: 

```
const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
```

- The code in [Header Sections - Official Tailwind CSS UI Components](https://tailwindui.com/components/marketing/sections/header) was implemented by thoroughly studying the original source and understanding its functionality and logic. Then, I adapted the code to suit the requirements of my assignment.
- [Header Sections - Official Tailwind CSS UI Components](https://tailwindui.com/components/marketing/sections/header)'s code was used because I believed it would be a helpful reference for the starting point for my assignment. The original code served as a valuable resource in understanding the problem domain, exploring different approaches, and learning specific techniques. I aimed to gain insights into specific techniques, algorithms, and design patterns that could be relevant to the assignment. It was my belief that incorporating well-implemented code from external sources would expedite the development process and help me achieve the desired functionality and efficiency.
- [Header Sections - Official Tailwind CSS UI Components](https://tailwindui.com/components/marketing/sections/header)'s code was modified by altering it according to the need of component with major changes in code like adjusting variable names and integrating it with other components. Also the content was modified based on requirement of the module.

### contact.js

*Lines 37 - 38, 84 - 95*

```
var emailValidRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

if (!inputEmailValue.match(emailValidRegex)) {
  if (!inputEmailValue.match(emailValidRegex)) {
    flag = true;
    setEmailError("Email is invalid");
  } else if (
    !inputEmailValue.match(emailValidRegex) &&
    inputEmailValue != ""
  ) {
    flag = true;
    setEmailError("Email is invalid");
  }
}
```

The code above was created by adapting the code in [How can I validate an email address in JavaScript? - Stack Overflow](https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript) as shown below: 

```
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

```

- The code in [Stackoverflow](https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript) was implemented by using a regex.
- [Stackoverflow](https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript)'s code was used as I required a regex to identify if the email was in valid format. It helped me in validation
- [Stackoverflow](https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript)'s code was modified by comapring the constant variable from the code to the email address and creating a method that takes help of this regex and by testing this given regex with the user input.

### contact.js

*Lines 173 - 188*

```
<FormLabel>What can we do for you?</FormLabel>
  <TextField
    multiline
    rows={3}
    fullWidth
    color="grey"
    error={queryError && queryError.length ? true : false}
    required
    placeholder="Enter your query here"
    // minRows={3}
    helperText={queryError}
    onChange={handleQueryChange}
  />
  <FormHelperText>
    Please specify the details in the above box.
  </FormHelperText>
```

The code above was created by adapting the code in [MaterialUI](https://mui.com/material-ui/react-text-field/) as shown below: 

```
<TextField id="outlined-basic" label="Outlined" variant="outlined" />

```

- The code in [MaterialUI](https://mui.com/material-ui/react-text-field/) was implemented by using various other tags along with the basic tags of MUI.
- [MaterialUI](https://mui.com/material-ui/react-text-field/)'s Code was used because Material UI helped me with faster development and in having a consistent look for the application.
- [MaterialUI](https://mui.com/material-ui/react-text-field/)'s Code was modified by introducing various other elements in the tag as required.

### booking.js

*Lines 69 - 204*

```
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
            onChange={(e)=>{setDate(e.target.value)}}
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
            onChange={(e)=>{setTime(e.target.value)}}
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
              onChange={(e)=>{setAddress(e.target.value)}}
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
              onChange={(e)=>{setNote(e.target.value)}}
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
</form>
```

The code above was created by adapting the code in [Form Layouts - Official Tailwind CSS UI Components](https://tailwindui.com/components/application-ui/forms/form-layouts) as shown below: 

```
<!--
  This example requires some changes to your config:
  
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
-->
<form>
  <div class="space-y-12">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-4">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div class="mt-2">
            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
              <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith">
            </div>
          </div>
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">About</label>
          <div class="mt-2">
            <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
          <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
        </div>

        <div class="col-span-full">
          <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo</label>
          <div class="mt-2 flex items-center gap-x-3">
            <svg class="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
            </svg>
            <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
          </div>
        </div>

        <div class="col-span-full">
          <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only">
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <div class="mt-2">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
          <div class="mt-2">
            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
          <div class="mt-2">
            <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>

        <div class="col-span-full">
          <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
          <div class="mt-2">
            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-2 sm:col-start-1">
          <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
          <div class="mt-2">
            <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
          <div class="mt-2">
            <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
          <div class="mt-2">
            <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
      </div>
    </div>

    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>

      <div class="mt-10 space-y-10">
        <fieldset>
          <legend class="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
          <div class="mt-6 space-y-6">
            <div class="relative flex gap-x-3">
              <div class="flex h-6 items-center">
                <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
              </div>
              <div class="text-sm leading-6">
                <label for="comments" class="font-medium text-gray-900">Comments</label>
                <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
              </div>
            </div>
            <div class="relative flex gap-x-3">
              <div class="flex h-6 items-center">
                <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
              </div>
              <div class="text-sm leading-6">
                <label for="candidates" class="font-medium text-gray-900">Candidates</label>
                <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
              </div>
            </div>
            <div class="relative flex gap-x-3">
              <div class="flex h-6 items-center">
                <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
              </div>
              <div class="text-sm leading-6">
                <label for="offers" class="font-medium text-gray-900">Offers</label>
                <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend class="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
          <p class="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
          <div class="mt-6 space-y-6">
            <div class="flex items-center gap-x-3">
              <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
              <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Everything</label>
            </div>
            <div class="flex items-center gap-x-3">
              <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
              <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Same as email</label>
            </div>
            <div class="flex items-center gap-x-3">
              <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
              <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">No push notifications</label>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </div>

  <div class="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div>
</form>
```

- The code in [Form Layouts - Official Tailwind CSS UI Components](https://tailwindui.com/components/application-ui/forms/form-layouts) was implemented by thoroughly studying the original source and understanding its functionality and logic. Then, I adapted the code to suit the requirements of my assignment.
- [Form Layouts - Official Tailwind CSS UI Components](https://tailwindui.com/components/application-ui/forms/form-layouts)'s Code was used because I believed it would be a helpful reference for the starting point for my assignment. The original code served as a valuable resource in understanding the problem domain, exploring different approaches, and learning specific techniques. I aimed to gain insights into specific techniques, algorithms, and design patterns that could be relevant to the assignment. It was my belief that incorporating well-implemented code from external sources would expedite the development process and help me achieve the desired functionality and efficiency.
- [Form Layouts - Official Tailwind CSS UI Components](https://tailwindui.com/components/application-ui/forms/form-layouts)'s Code was modified by altering it according to the need of component with major changes in code like adjusting variable names and integrating it with other components. Also the content was modified based on requirement of the module.

### mybookings_consumer.js

*Lines 139 - 226*

```
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
              {bookings.map((person,index) => 
                {
                  if(person.consumer_id && person.service_id && person.provider_id){
                    return (
                    <tr class="align-middle">
                      <td>{index+1}</td>
                      <td class="h6 mb-0 lh-1">{person.service_id.vendorName}</td>
                      <td>{person.service_id.category}</td>
                      <td>{person.service_id.serviceName}</td>
                      <td>{person.address}</td>
                      <td>{person.note != "" ? person.note : "-"}</td>
                      <td>{person.date.split(" ")[0]}</td>
                      <td>{person.date.split(" ")[1]}</td>

                      <td>
                        {
                          person.isCanceled==true ?
                            <div class="flex w-full rounded-md py-1 text-sm font-bold text-red-500">
                              <span>Cancelled</span>
                            </div> : 
                          person.status=='Pending' ?
                            <div class="flex w-full rounded-md py-1 text-sm font-bold text-gray">
                              <span>{person.status}</span>
                            </div> :
                          person.status=='Completed' ?
                            <div class="flex w-full rounded-md py-1 text-sm font-bold text-success">
                              <span>{person.status}</span>
                            </div> :
                          person.status=='Approved' &&
                            <div class="flex w-full rounded-md py-1 text-sm font-bold text-blue-500">
                              <span>{person.status}</span>
                            </div>
                        }
                      </td>

                      <td>
                        {person.isCanceled || person.status=="Approved" ? 
                          <MoreVertIcon className='mybooking-action-btn' aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                          /> :  
                          <MoreVertIcon className='mybooking-action-btn' aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={(e) => handleClick(e,person)}
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
```

The code above was created by adapting the code in [Bootstrap snippet. new customer list](https://www.bootdey.com/snippets/view/new-customer-list) as shown below: 

```
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

<div class="container">
    <div class="row">
        <div class="col-12 mb-3 mb-lg-5">
            <div class="overflow-hidden card table-nowrap table-card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">New customers</h5>
                    <a href="#!" class="btn btn-light btn-sm">View All</a>
                </div>
                <div class="table-responsive">
                    <table class="table mb-0">
                        <thead class="small text-uppercase bg-body text-muted">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th>Payment method</th>
                                <th>Created Date</th>
                                <th class="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="align-middle">
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="avatar sm rounded-pill me-3 flex-shrink-0" alt="Customer">
                                        <div>
                                            <div class="h6 mb-0 lh-1">Mark Voldov</div>
                                        </div>
                                    </div>
                                </td>
                                <td>mvoges@email.com</td>
                                <td> <span class="d-inline-block align-middle">Russia</span></td>
                                <td><span>****6231</span></td>
                                <td>21 Sep, 2021</td>
                                <td class="text-end">
                                    <div class="drodown">
                                        <a data-bs-toggle="dropdown" href="#" class="btn p-1" aria-expanded="false">
                                  <i class="fa fa-bars" aria-hidden="true"></i>
                                </a>
                                        <div class="dropdown-menu dropdown-menu-end" style="">
                                            <a href="#!" class="dropdown-item">View Details</a>
                                            <a href="#!" class="dropdown-item">Delete user</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="align-middle">
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="avatar sm rounded-pill me-3 flex-shrink-0" alt="Customer">
                                        <div>
                                            <div class="h6 mb-0 lh-1">Topias Kantola</div>
                                        </div>
                                    </div>
                                </td>
                                <td>topiaskantola@email.com</td>
                                <td> <span class="d-inline-block align-middle">Brazil</span></td>
                                <td><span>****@mail.com</span></td>
                                <td>21 Sep, 2021</td>
                                <td class="text-end">
                                    <div class="drodown">
                                        <a data-bs-toggle="dropdown" href="#" class="btn p-1">
                                  <i class="fa fa-bars" aria-hidden="true"></i>
                                </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">View Details</a>
                                            <a href="#!" class="dropdown-item">Delete user</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="align-middle">
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="avatar sm rounded-pill me-3 flex-shrink-0" alt="Customer">
                                        <div>
                                            <div class="h6 mb-0 lh-1">Anaiah Whitten</div>
                                        </div>
                                    </div>
                                </td>
                                <td>anaiahwhitten@email.com</td>
                                <td>
                                    <span class="d-inline-block align-middle">Poland</span>
                                </td>
                                <td><span>****0014</span></td>
                                <td>12 June, 2021</td>
                                <td class="text-end">
                                    <div class="drodown">
                                        <a data-bs-toggle="dropdown" href="#" class="btn p-1">
                                  <i class="fa fa-bars" aria-hidden="true"></i>
                                </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">View Details</a>
                                            <a href="#!" class="dropdown-item">Delete user</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="align-middle">
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" class="avatar sm rounded-pill me-3 flex-shrink-0" alt="Customer">
                                        <div>
                                            <div class="h6 mb-0 lh-1">Wyatt Morris</div>
                                        </div>
                                    </div>
                                </td>
                                <td>wyattmorris@email.com</td>
                                <td>
                                    <span class="d-inline-block align-middle">Kenya</span>
                                </td>
                                <td><span>****8715</span></td>
                                <td>04 June, 2021</td>
                                <td class="text-end">
                                    <div class="drodown">
                                        <a data-bs-toggle="dropdown" href="#" class="btn p-1">
                                 <i class="fa fa-bars" aria-hidden="true"></i>
                                </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">View Details</a>
                                            <a href="#!" class="dropdown-item">Delete user</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="align-middle">
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" class="avatar sm rounded-pill me-3 flex-shrink-0" alt="Customer">
                                        <div>
                                            <div class="h6 mb-0 lh-1">Eliana Stout</div>
                                        </div>
                                    </div>
                                </td>
                                <td>elianastout@email.com</td>
                                <td>
                                    <span class="d-inline-block align-middle">Usa</span>
                                </td>
                                <td><span>****1010</span></td>
                                <td>01 June, 2021</td>
                                <td class="text-end">
                                    <div class="drodown">
                                        <a data-bs-toggle="dropdown" href="#" class="btn p-1">
                                  <i class="fa fa-bars" aria-hidden="true"></i>
                                </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">View Details</a>
                                            <a href="#!" class="dropdown-item">Delete user</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
```

- The code in [Bootstrap snippet. new customer list](https://www.bootdey.com/snippets/view/new-customer-list) was implemented by thoroughly studying the original source and understanding its functionality and logic. Then, I adapted the code to suit the requirements of my assignment.
- [Bootstrap snippet. new customer list](https://www.bootdey.com/snippets/view/new-customer-list)'s Code was used because I believed it would be a helpful reference for the starting point for my assignment. The original code served as a valuable resource in understanding the problem domain, exploring different approaches, and learning specific techniques. I aimed to gain insights into specific techniques, algorithms, and design patterns that could be relevant to the assignment. It was my belief that incorporating well-implemented code from external sources would expedite the development process and help me achieve the desired functionality and efficiency.
- [Bootstrap snippet. new customer list](https://www.bootdey.com/snippets/view/new-customer-list)'s Code was modified by altering it according to the need of component with major changes in code like adjusting variable names and integrating it with other components. Also the content was modified based on requirement of the module.

### mybookings.css

*Lines 3 - 21*

```
.card {
    box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
}
.avatar.sm {
    width: 2.25rem;
    height: 2.25rem;
    font-size: .818125rem;
}
.table-nowrap .table td, .table-nowrap .table th {
    white-space: nowrap;
}
.table>:not(caption)>*>* {
    padding: 0.75rem 1.25rem;
    border-bottom-width: 1px;
}
.booking-th {
    font-weight: 600;
    background-color: #eeecfd !important;
}
```

The code above was created by adapting the code in [Bootstrap snippet. new customer list](https://www.bootdey.com/snippets/view/new-customer-list) as shown below: 

```
body{margin-top:20px;
background:#eee;
}
.card {
    box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
}
.avatar.sm {
    width: 2.25rem;
    height: 2.25rem;
    font-size: .818125rem;
}
.table-nowrap .table td, .table-nowrap .table th {
    white-space: nowrap;
}
.table>:not(caption)>*>* {
    padding: 0.75rem 1.25rem;
    border-bottom-width: 1px;
}
table th {
    font-weight: 600;
    background-color: #eeecfd !important;
}
```

- The code in [Bootstrap snippet. new customer list](https://www.bootdey.com/snippets/view/new-customer-list) was implemented by thoroughly studying the original source and understanding its functionality and logic. Then, I adapted the code to suit the requirements of my assignment.
- [Bootstrap snippet. new customer list](https://www.bootdey.com/snippets/view/new-customer-list)'s Code was used because I believed it would be a helpful reference for the starting point for my assignment. The original code served as a valuable resource in understanding the problem domain, exploring different approaches, and learning specific techniques. I aimed to gain insights into specific techniques, algorithms, and design patterns that could be relevant to the assignment. It was my belief that incorporating well-implemented code from external sources would expedite the development process and help me achieve the desired functionality and efficiency.
- [Bootstrap snippet. new customer list](https://www.bootdey.com/snippets/view/new-customer-list)'s Code was modified by altering it according to the need of component with major changes in code like adjusting variable names and integrating it with other components. Also the content was modified based on requirement of the module.

### services.js

*Lines 184 - 230*

```
<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {services?.map((service) => (
      <div className="service_card group p-2 decoration-white no-underline">
        <p style={{color: "inherit"}} className="mt-1 text-l font-medium text-gray-900">{service.serviceName}</p>

        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            style={{color: "inherit"}}
            src={service.serviceImg}
            alt={service.serviceName}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>

        <h3 style={{color: "inherit"}} className="mt-4 text-sm text-gray-700">Vendor: {service.vendorName}</h3>
        <h3 style={{color: "inherit"}} className="text-sm text-gray-700">Location: {service.vendorLocation}</h3>
        <h3 style={{color: "inherit"}} className="text-sm text-gray-700">Category: {service.category}</h3>

        <div className="flex">

          <Rating unratedColor="amber" ratedColor="amber" value={service.rating} readonly />

          <Link to={{pathname: `/rating/${service.vendorID}`}} className="text-gray-800 font-medium text-sm mx-2" state={service}>
            View
          </Link>
        </div>

        <p style={{color: "inherit"}} className="mb-2 text-lg font-medium text-gray-900">Rate: ${service.pricePerHour}/hr.</p>
        
        <div className="mb-2">
          <Link to="/booking" className="text-white no-underline" state={service}>
            <button
              type="submit"
              variant="contained"
              className="rounded-md bg-gray-800 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Book
            </button>
          </Link>
        </div>
        
        <p className="mb-0 text-sm">{service.serviceDesc}</p>
      </div>
    ))}
  </div>
</div>
```

The code above was created by adapting the code in [Product Lists - Official Tailwind CSS UI Components](https://tailwindui.com/components/ecommerce/components/product-lists) as shown below: 

```
const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
```

- The code in [Product Lists - Official Tailwind CSS UI Components](https://tailwindui.com/components/ecommerce/components/product-lists) was implemented by thoroughly studying the original source and understanding its functionality and logic. Then, I adapted the code to suit the requirements of my assignment.
- [Product Lists - Official Tailwind CSS UI Components](https://tailwindui.com/components/ecommerce/components/product-lists)'s Code was used because I believed it would be a helpful reference for the starting point for my assignment. The original code served as a valuable resource in understanding the problem domain, exploring different approaches, and learning specific techniques. I aimed to gain insights into specific techniques, algorithms, and design patterns that could be relevant to the assignment. It was my belief that incorporating well-implemented code from external sources would expedite the development process and help me achieve the desired functionality and efficiency.
- [Product Lists - Official Tailwind CSS UI Components](https://tailwindui.com/components/ecommerce/components/product-lists)'s Code was modified by altering it according to the need of component with major changes in code like adjusting variable names and integrating it with other components. Also the content was modified based on requirement of the module.

### services.js

*Lines 137 - 184*

```
<BrowserView>
  <div className='filters-desktop'>
    <Accordion className='fltrs-dropdown'>
      <AccordionItem header="Category" className='accFltrs text-base'>
        <input type='checkbox' id='cleaning' value='Cleaning' className='fltrs' onClick={applyFilters}></input> Cleaning 
        <br></br>
        <input type='checkbox' id='repair' value='Repair' className='fltrs' onClick={applyFilters}></input> Repair
        <br></br>
        <input type='checkbox' id='moving' value='Moving' className='fltrs' onClick={applyFilters}></input> Moving
        <br></br>
        <input type='checkbox' id='carpentry' value='Carpentry' className='fltrs' onClick={applyFilters}></input> Carpentry
        <br></br>
        <input type='checkbox' id='landscaping' value='Landscaping' className='fltrs' onClick={applyFilters}></input> Landscaping
        <br></br>
        <input type='checkbox' id='other' value='Other' className='fltrs' onClick={applyFilters}></input> Other
        <br></br><br></br>
      </AccordionItem>
    </Accordion>
  </div>
</BrowserView>
<MobileView>
  <div className='filters-mobile'>
    <Accordion className='fltrs-dropdown'>
      <AccordionItem header="Filters" className='accFltrs'>
      <div className='floatFix'>
      <div className='l-div'>
        <input type='checkbox' id='cleaning' value='Cleaning' className='fltrs' onClick={applyFilters}></input> Cleaning 
        <br></br>
        <input type='checkbox' id='repair' value='Repair' className='fltrs' onClick={applyFilters}></input> Repair
        <br></br>
        <input type='checkbox' id='moving' value='Moving' className='fltrs' onClick={applyFilters}></input> Moving
        <br></br>
      </div>
        <div className='r-div'>
        <input type='checkbox' id='carpentry' value='Carpentry' className='fltrs' onClick={applyFilters}></input> Carpentry
        <br></br>
        <input type='checkbox' id='landscaping' value='Landscaping' className='fltrs' onClick={applyFilters}></input> Landscaping
        <br></br>
        <input type='checkbox' id='other' value='Other' className='fltrs' onClick={applyFilters}></input> Other
        <br></br>
      </div>
      </div>
      </AccordionItem>
    </Accordion>
  </div>
</MobileView>
```

The code above was created by adapting the code in [szhsin.github.io/react-accordion](https://github.com/szhsin/react-accordion) as shown below: 

```
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

export default function Example() {
  return (
    <Accordion>
      <AccordionItem header="What is Lorem Ipsum?">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </AccordionItem>

      <AccordionItem header="Where does it come from?">
        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
        vitae, accumsan auctor mi.
      </AccordionItem>

      <AccordionItem header="Why do we use it?">
        Suspendisse massa risus, pretium id interdum in, dictum sit
        amet ante. Fusce vulputate purus sed tempus feugiat.
      </AccordionItem>
    </Accordion>
  );
}
```

- The code in [szhsin.github.io/react-accordion](https://github.com/szhsin/react-accordion) was implemented by Zheng Song (Github Handle: @ szhsin).
- [szhsin.github.io/react-accordion](https://github.com/szhsin/react-accordion)'s Code was used for the filter drop down menu in the services dashboard page. This accordion package was used specifically because it is un-stylized; allowing us full customization over its design.
- [szhsin.github.io/react-accordion](https://github.com/szhsin/react-accordion)'s Code was modified to display our filter checkboxes once expanded.

### user.js

*Lines 3 - 50*

```
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: ["service-provider", "service-consumer"],
  },
  isValidated: {
    type: Boolean,
    default: function () {
      return this.userType === "service-consumer";
    },
  },
  isBlocked: {
    type: Boolean,
    required: true,
    default: false,
  },
  bio: { type: String, required: false },
  phoneNumber: {
    type: String,
    required: false,
    validate: {
      validator: function (v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  resetPasswordToken: { type: String, required: false },
  resetPasswordExpires: { type: Date, required: false },
});

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model("User", UserSchema);
```

The code above was created by adapting the code in [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application) as shown below: 

```
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});
```

- The code in [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application) was implemented by creating a user schema.
- [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application)'s Code was used to refer on how to create and store a sensetive user information in mongodb using express and node.
- [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application)'s Code was modified according to my user schema and was referred to get insight on handling sensitive information.

### userController.js

*Lines 20 - 28*

```
jwt.sign(
  payload,
  process.env.JWT_SECRET,
  { expiresIn: "1h" },
  (err, token) => {
    if (err) throw err;
    res.status(200).json({ token });
  }
);
```

The code above was created by adapting the code in [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application) as shown below: 

```
module.exports.createSecretToken = (id) => {
return jwt.sign({ id }, process.env.TOKEN*KEY, {
expiresIn: 3 * 24 \_ 60 \* 60,
});
};
```

- The code in [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application) was implemented by signing the jwt token with the secret key.
- [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application)'s Code was used because it helped me in understanding how to sign the jwt token and to understand how to set the validity of the jwt token.
- [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application)'s Code was modified by setting the expiry time as one hour and also error handling was introduced.

### userController.js

*Lines 35 - 84*

```
exports.login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    if (user.isBlocked || !user.isValidated) {
      return res
        .status(403)
        .json({ message: "Access restricted, contact admin." });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const payload = { userId: user.id };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;

        // Create a copy of user object
        // let userResponse = user.toObject();
        const userResponse = {
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          gender: user.gender,
          role: user.role,
          isValidated: user.isValidated,
          isBlocked: user.isBlocked,
          bio: user.bio,
          phoneNumber: user.phoneNumber,
        };
        console.log(userResponse);
        // Delete the password from the response
        // delete userResponse.password;

        res.status(200).json({ token, user: userResponse });
      }
    );
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
```

The code above was created by adapting the code in [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application) as shown below: 

```
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
    return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
    return res.json({message:'Incorrect password or email' })
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
    return res.json({message:'Incorrect password or email' })
    }
    const token = createSecretToken(user.\_id);
    res.cookie("token", token, {
    withCredentials: true,
    httpOnly: false,
    });
    res.status(201).json({ message: "User logged in successfully", success: true });
    next()
  } catch (error) {
    console.error(error);
  }
}
```

- The code in [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/) was implemented by finding the user with email id and the comparing the password and authenticating the user as well as creating the secret token.
- [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/)'s Code was used because it helped in validating the user and creating the user.
- [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/)'s Code was modified by searching from the id and then storing only the required information and removing the insensitive information.

### Signup.js

*Lines 170 - 201*

```
if (!flag) {
let gender = document.querySelector('input[name="gender"]:checked').value;
console.log(gender);
try {
const response = await axios.post("http://localhost:3001/signup", {
firstName: inputFirstNameValue,
lastName: inputLastNameValue,
email: inputEmailValue,
password: inputPasswordValue,
gender: gender,
role: userRole,
isValidated: isValidated,
isBlocked: false,
});
console.log("User signed up successfully");
window.location.href = "/login";
} catch (error) {
if (error.response) {
console.log(error.response.data.msg);
console.log(error.response.status);
if (error.response.status === 400) {
alert("User already exists");
}
} else if (error.request) {
// The request was made but no response was received

      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
  }
}
```

The code above was created by adapting the code in [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/) as shown below:

```
const handleSubmit = async (e) => {
e.preventDefault();
try {
const { data } = await axios.post(
"http://localhost:4000/signup",
{
...inputValue,
},
{ withCredentials: true }
);
const { success, message } = data;
if (success) {
handleSuccess(message);
setTimeout(() => {
navigate("/");
}, 1000);
} else {
handleError(message);
}
} catch (error) {
console.log(error);
}
setInputValue({
...inputValue,
email: "",
password: "",
username: "",
});
};
```

- The code in [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/) was implemented using axios post to store the user details on sign up.
- [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/)'s Code was used because it helped in sending the user data from frontend to the backend.
- [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/)'s Code was modified by storing the relevant details and fetching the data from the frontend as per the project's requirement.

### Login.js

*Lines 46 - 84*

```
const userData = {
  email: inputEmailValue,
  password: inputPasswordValue,
};
axios
  .post("http://localhost:3001/login", userData)
  .then((response) => {
    if (response.status === 200) {
      const { token, user } = response.data;
      delete userData.password;
      localStorage.setItem("authToken", token);
      localStorage.setItem("userData", JSON.stringify(user));
      Promise.all([
        new Promise((resolve) =>
          resolve(localStorage.getItem("authToken"))
        ),
        new Promise((resolve) =>
          resolve(localStorage.getItem("userData"))
        ),
      ])
        .then(([authToken, userData]) => {
          if (authToken && userData) {
            setInputEmailValue("");
            setInputPasswordValue("");
            const loggedin_user = JSON.parse(localStorage.getItem("userData"))
            if(loggedin_user != null && loggedin_user.role == "admin"){
              navigate("/admin/dashboard")
            }else{
              navigate("/")
            }
          } else {
            console.log("Error storing data in local storage");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  })
```

The code above was created by adapting the code in [Stackoverflow](https://stackoverflow.com/questions/61137054/using-localstorage-to-store-login-info) as shown below:

```
function setUser() {
localStorage.setItem('user', JSON.stringify(user));
}

function getUser() {
user = JSON.parse(localStorage.getItem('user'))
}
```

- The code in [Stackoverflow](https://stackoverflow.com/questions/61137054/using-localstorage-to-store-login-info) was implemented using axios post to store the user details in localstorage on login.
- [Stackoverflow](https://stackoverflow.com/questions/61137054/using-localstorage-to-store-login-info)'s Code was used because it helped in accessing user data from localstorage when the user was logged in.
- [Stackoverflow](https://stackoverflow.com/questions/61137054/using-localstorage-to-store-login-info)'s Code was modified by storing the relevant details and fetching and validating the data from the frontend as per the project's requirement.

### userController.js

*Lines 164 - 212*

```
const mailOptions = {
from: "urbancanada.company@gmail.com",
to: `${user.email}`,
subject: "Reset Password",
text:
"You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
"Please use the following code to reset your password:\n\n" +
resetPasswordToken +
"\n\n" +
"If you did not request this, please ignore this email and your password will remain unchanged.\n",
};

// Send email
transporter.sendMail(mailOptions, (err, response) => {
if (err) {
console.error("There was an error: ", err);
} else {
res.status(200).json({ message: "Recovery email sent." });
}
});
};
exports.resetPasswordConfirm = async (req, res) => {
const { email, resetPasswordToken } = req.body;

const user = await User.findOne({
email,
// resetPasswordExpires: { $gt: Date.now() },
});

if (!user) {
return res
.status(404)
.json({ message: "Invalid or expired reset password token" });
}

const isMatch = await bcrypt.compare(
resetPasswordToken,
user.resetPasswordToken
);

if (!isMatch) {
return res.status(404).json({ message: "Invalid reset password token" });
}

res.status(200).json({
message: "Valid reset password token",
resetPasswordToken,
});
};
```

The code above was created by adapting the code in [DEV.TO](https://dev.to/documatic/send-email-in-nodejs-with-nodemailer-using-gmail-account-2gd1) as shown below:

```
import nodemailer from "nodemailer";

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
service: "gmail",
host: "smtp.gmail.com",
port: 587,
secure: false,
auth: {
user: "MAILID@gmail.com",
pass: "YOUR PASSWORD",
},
});
const SENDMAIL = async (mailDetails, callback) => {
try {
const info = await transporter.sendMail(mailDetails)
callback(info);
} catch (error) {
console.log(error);
}
};
```
- The code in [DEV.TO](https://dev.to/documatic/send-email-in-nodejs-with-nodemailer-using-gmail-account-2gd1) was implemented using nodemailer to send email to users.
- [DEV.TO](https://dev.to/documatic/send-email-in-nodejs-with-nodemailer-using-gmail-account-2gd1)'s Code was used because it helped in sending the verification code to the user for the reset password request.
- [DEV.TO](https://dev.to/documatic/send-email-in-nodejs-with-nodemailer-using-gmail-account-2gd1)'s Code was modified by generating a 6 digit verification code and sending that to the user and storing the code in the database by setting it's validity.

### LoginRedirect.js

*Lines 3 - 17*

```
import { Navigate, Outlet, useLocation } from "react-router-dom";

const LoginRedirect = () => {
const location = useLocation();
const token = localStorage.getItem("authToken");
const isAuthenticated = token != null;

return isAuthenticated ? (
<Outlet />
) : (
<Navigate to="/login" state={{ from: location }} />
);
};

export default LoginRedirect;
```

The code above was created by adapting the code in [Stackoverflow](https://stackoverflow.com/questions/71090051/trying-to-return-true-or-false-from-an-authentification-function-with-node) as shown below:

```
app.get('/test', async (req, res) => {
const isAuthenticated = await authentification(req.query.login, req.query.pass)
if (isAuthenticated === true) {

    res.send("authorized");

} else {
res.send("not authorized");-
}

})
```
- The code in [Stackoverflow](https://stackoverflow.com/questions/71090051/trying-to-return-true-or-false-from-an-authentification-function-with-node) was implemented to check if the user is validated.
- [Stackoverflow](https://stackoverflow.com/questions/71090051/trying-to-return-true-or-false-from-an-authentification-function-with-node)'s Code was used because it helped in identifying if the user is validated or not.
- [Stackoverflow](https://stackoverflow.com/questions/71090051/trying-to-return-true-or-false-from-an-authentification-function-with-node)'s Code was modified by checking the validity of the user authentication token and redirecting the user to the home page if the user is not authenticated and it helps in protected routing.

### RatingComment.js

*Lines 146 - 169*

```
const chartData = {
  labels: ['5-Star', '4-Star', '3-Star', '2-Star', '1-Star'],
  datasets: [
  {
    label: 'Percentage of Stars',
    data: calculateChartData().rectStarFill.reverse(),
    backgroundColor: [
      'rgba(255, 99, 132, 0.6)',
      'rgba(255, 159, 64, 0.6)',
      'rgba(255, 205, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)',
      'rgba(54, 162, 235, 0.6)',
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(255, 205, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(54, 162, 235, 1)',
    ],
    borderWidth: 1,
  },
  ],
};
```

The code above was created by adapting the code in [Bar Chart | Chart.js](https://www.chartjs.org/docs/latest/charts/bar.html) as shown below: 

```
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};
```

- The code in [Bar Chart | Chart.js](https://www.chartjs.org/docs/latest/charts/bar.html) was implemented to develop graph feature in rating review part, it's not individual person's code rather its a open source library that anyone can use for charting purpose.
- [Bar Chart | Chart.js](https://www.chartjs.org/docs/latest/charts/bar.html)'s Code was used because it has some great visual effects for showin statistics.
- [Bar Chart | Chart.js](https://www.chartjs.org/docs/latest/charts/bar.html)'s Code was modified by updating properties according to the need of the feature.

### ServiceList.js

*Lines 179 - 280*

```
  <div >
    <div>
      <div className="button-container">
        <Button variant="contained" onClick={handleClickOpen} classname= "create-service-button">
            Create Service
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? "Edit Service" : "Create Service"}</DialogTitle>
          <DialogContent>
          <DialogContentText>
              Please fill in the details of your service
          </DialogContentText>
          <TextField
              name = "serviceName"
              autoFocus
              margin="dense"
              id="serviceName"
              label="Service Name"
              type="text"
              fullWidth
              variant="standard"
              value={selectedService.serviceName}
              onChange={handleChange}
              error={!!formErrors.serviceName} 
              helperText={formErrors.serviceName}
          />

          <TextField
                name = "serviceDesc"
              autoFocus
              margin="dense"
              id="serviceDesc"
              label="Service Description"
              type="text"
              fullWidth
              variant="standard"
              value={selectedService.serviceDesc}
              onChange={handleChange}
              error={!!formErrors.serviceDesc}
              helperText={formErrors.serviceDesc}
          />

          <TextField
              name = "pricePerHour"
              autoFocus
              margin="dense"
              id="pricePerHour"
              label="Price per hour"
              type="text"
              value={selectedService.pricePerHour}
              fullWidth
              variant="standard"
              onChange={handleChange}
              error={!!formErrors.pricePerHour}
              helperText={formErrors.pricePerHour}
          />
          

      <br></br><br></br>
      <InputLabel id="category">Service Type</InputLabel>
          <Select
          name = "category"
          labelId="category"
          id="category"
          value={selectedService.category}
          label="Service Type"
          fullWidth
          onChange={handleChange}
          error={!!formErrors.category}
          >
          <MenuItem value="Cleaning">Cleaning</MenuItem>
          <MenuItem value="Repair">Repair</MenuItem>
          <MenuItem value="Moving">Moving</MenuItem>
          <MenuItem value="Carpentry">Carpentry</MenuItem>
          <MenuItem value="Landscaping">Landscaping</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
          </Select>

          <TextField
              name = "serviceImg"
              autoFocus
              margin="dense"
              id="serviceImg"
              label="Image link"
              type="text"
              value={selectedService.serviceImg}
              fullWidth
              variant="standard"
              onChange={handleChange}
              error={!!formErrors.serviceImg}
              helperText={formErrors.serviceImg}
          />


          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error">Cancel</Button>
          <Button onClick={handleCreateService} variant="contained">{isEditing ? "Save" : "Create"}</Button>
          </DialogActions>
      </Dialog>
  </div>
```
The code above was created by adapting the code in [material-ui/react-dialog/Form dialogs](https://mui.com/material-ui/react-dialog/) as shown below: 

```
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
```

### ServiceList.js

*Lines 282 - 325*

```
   return (
  <div >
    <div>
      <div className="button-container">
        <Button variant="contained" onClick={handleClickOpen} classname= "create-service-button">
            Create Service
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? "Edit Service" : "Create Service"}</DialogTitle>
          <DialogContent>
          <DialogContentText>
              Please fill in the details of your service
          </DialogContentText>
          <TextField
              name = "serviceName"
              autoFocus
              margin="dense"
              id="serviceName"
              label="Service Name"
              type="text"
              fullWidth
              variant="standard"
              value={selectedService.serviceName}
              onChange={handleChange}
              error={!!formErrors.serviceName} 
              helperText={formErrors.serviceName}
          />

          <TextField
                name = "serviceDesc"
              autoFocus
              margin="dense"
              id="serviceDesc"
              label="Service Description"
              type="text"
              fullWidth
              variant="standard"
              value={selectedService.serviceDesc}
              onChange={handleChange}
              error={!!formErrors.serviceDesc}
              helperText={formErrors.serviceDesc}
          />

          <TextField
              name = "pricePerHour"
              autoFocus
              margin="dense"
              id="pricePerHour"
              label="Price per hour"
              type="text"
              value={selectedService.pricePerHour}
              fullWidth
              variant="standard"
              onChange={handleChange}
              error={!!formErrors.pricePerHour}
              helperText={formErrors.pricePerHour}
          />
          

      <br></br><br></br>
      <InputLabel id="category">Service Type</InputLabel>
          <Select
          name = "category"
          labelId="category"
          id="category"
          value={selectedService.category}
          label="Service Type"
          fullWidth
          onChange={handleChange}
          error={!!formErrors.category}
          >
          <MenuItem value="Cleaning">Cleaning</MenuItem>
          <MenuItem value="Repair">Repair</MenuItem>
          <MenuItem value="Moving">Moving</MenuItem>
          <MenuItem value="Carpentry">Carpentry</MenuItem>
          <MenuItem value="Landscaping">Landscaping</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
          </Select>

          <TextField
              name = "serviceImg"
              autoFocus
              margin="dense"
              id="serviceImg"
              label="Image link"
              type="text"
              value={selectedService.serviceImg}
              fullWidth
              variant="standard"
              onChange={handleChange}
              error={!!formErrors.serviceImg}
              helperText={formErrors.serviceImg}
          />


          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error">Cancel</Button>
          <Button onClick={handleCreateService} variant="contained">{isEditing ? "Save" : "Create"}</Button>
          </DialogActions>
      </Dialog>
  </div>

  <div>
        {/* render services if they exist */}
        {services.length > 0 ? (
          <div className="service-cards-container">
            {services.map((service) => (
              <Card key={service._id} sx={{ maxWidth: 345 }} className="service-card">
                <CardMedia sx={{ height: 140 }} image={service.serviceImg} title={service.serviceName} />
                <CardContent className="card-content">
                  <Typography gutterBottom variant="h5" component="div">
                    Service: {service.serviceName}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Category: {service.category}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Hourly Rate: ${service.pricePerHour.toFixed(2)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.serviceDesc}
                  </Typography>
                </CardContent>
                <CardActions className="card-actions">
                  <Button size="small" variant="contained" onClick={() => handleClickOpen(service)}>
                    Edit
                  </Button>
                  <Button size="small" variant="contained" color="error" onClick={() => onDelete(service._id)}>
                    Delete
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        ) : (
          <div className="no-services-found">
            <h2>No services found</h2>
          </div>
        )}
      </div>
    </div>
  );
```
The code above was created by adapting the code in [material-ui/react-card/media](https://mui.com/material-ui/react-card/) as shown below: 

```
export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
```
### ServiceFilter.js

*Lines 17 - 38*

```
  return (
    <div className="filters" >
      <Accordion>
        <AccordionSummary  expandIcon={<ExpandMoreIcon />} className="fltrs-dropdown">
          <Typography>Filter Services</Typography>
        </AccordionSummary>
        <AccordionDetails className='accFltrs'>
          <div className="fltrs-dropdown">
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="All">All Categories</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Repair">Repair</option>
              <option value="Moving">Moving</option>
              <option value="Carpentry">Carpentry</option>
              <option value="Landscaping">Landscaping</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
```
The code above was created by adapting the code in [material-ui/Accordion/Basic Accordion](https://mui.com/material-ui/react-accordion/) as shown below: 

```
export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
```

## Acknowledgments

* The code provided valuable insights and served as a foundation for understanding and learning it's functionality and logic. I am grateful for their work and dedication.
* It provided valuable insights and influenced my approach in understanding and learning the approaches and specific techniques. Their contribution is highly appreciated.