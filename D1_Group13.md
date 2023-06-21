# Urban Canada

**[This application is a modern service marketplace to empower vendors and satisfy clients.It serves as an online portal for vendors, tradesmen, service providers and other entrepreneurs or small business owners to market their services to a wider customer in one convenient location. For the persons or entities providing services (vendors), and for the persons purchasing or subscribing to these services (consumers) the application will provide a convenient interface. This service is important because it will seek to improve upon existing marketplaces to provide a more seamless interaction between vendors and consumers aggregating the pros and eradicating the cons associated with other popular platforms.]**

* *Date Created*: 18 JUN 2023
* *Last Modification Date*: 20 JUN 2023
* *Project URL*: <https://main--brilliant-pixie-8bba9e.netlify.app/>
* *Git URL*: <https://git.cs.dal.ca/kathiria/csci-5709-grp-13/>

## Authors

* [Harsh Nareshbhai Kathiria](hr527292@dal.ca) - *(Full Stack Developer)*
* [Nandkumar Kadivar](nn521973@dal.ca) - *(Full Stack Developer)*
* [Darshil Patel](darshil.patel@dal.ca) - *(Full Stack Developer)*
* [Muskan Vazirani](muskan@dal.ca) - *(Full Stack Developer)*
* [Waleed Alhindi](wl392785@dal.ca) - *(Full Stack Developer)*
* [Edwin Adams](ed743899@dal.ca) - *(Full Stack Developer)*

## Deployment

Initially, we imported existing project of front-end environment on netlify from github as we had repository ready. We setup build settings to deploy the app. Finally, it was deployed and live on the mentioned link.

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [React](https://legacy.reactjs.org/docs/getting-started.html/) - The web framework used
* [npm](https://docs.npmjs.com//) - Dependency Management
- [Node](https://nodejs.org/en/docs) - Enviorment Support
**

## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implement, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

### contact.js

_Lines 35 - 36 and 82-93_

```
My code:

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

The code above was created by adapting the code in [Stackoverflow](https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript) as shown below:

```
Code that I am referencing:
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

```

- <!---How---> The code in [Stackoverflow](https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript) was implemented by using a regex.
- <!---Why---> [Stackoverflow](https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript)'s Code was used as I required a regex to identify if the email was in valid format. It helped me in validation
- <!---How---> [Stackoverflow](https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript)'s Code was modified by comapring the constant variable from the code to the email address and creating a method that takes help of this regex and by testing this given regex with the user input.

### contact.js

_Lines 38 and 48-64_

```
My code:

    var containsNumbersRegex = /^[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;

      if (!inputFirstNameValue || !inputFirstNameValue.length) {
      setFirstNameError("First Name is required");
      flag = true;
    } else {
      if (inputFirstNameValue.match(containsNumbersRegex)) {
        setFirstNameError("First Name must have letters only");
        flag = true;
      } else {
        setFirstNameError("");
      }
    }

    if (!inputLastNameValue || !inputLastNameValue.length) {
      setLastNameError("Last Name is required");
      flag = true;
    } else {
      if (inputLastNameValue.match(containsNumbersRegex)) {
        setLastNameError("Last Name must have letters only");
        flag = true;
      } else {
        setLastNameError("");
      }
    }


```

The code above was created by adapting the code in [<Source>](Link) as shown below:

<Enter Code you are referencing>

```
Code that I am referencing:
//Enter code that you are refrencing here

```

- <!---How---> The code in [<Source>](<Link>)  was implemented along with various other things, however, my motive was to just get some insights of the regular expression.
- <!---Why---> [<Source>](<Link>)'s because it helped me in validating if the text feild had only characters and helped me in restricting the user from entering numbers and special characters in first name and last name columns.
- <!---How---> [<Source>](<Link>)'s Code was modified by removing the unwanted stuff from the referenced code and by only understanding regex.

### contact.js

_Lines 166 - 182_

```
Copy and paste your code on lines mentioned
<FormLabel>What can we do for you?</FormLabel>
          <TextField
            multiline
            rows={3}
            fullwidth
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
        </FormControl>
      </Box>

```

The code above was created by adapting the code in [MaterialUI](https://mui.com/material-ui/react-text-field/) as shown below:

```
Code that I refered:
<TextField id="outlined-basic" label="Outlined" variant="outlined" />

```

- <!---How---> The code in [MaterialUI](https://mui.com/material-ui/react-text-field/) was implemented by using various other tags along with the basic tags of MUI.
- <!---Why---> [MaterialUI](https://mui.com/material-ui/react-text-field/)'s Code was used because Material UI helped me with faster development and in having a consistent look for the application.
- <!---How---> [MaterialUI](https://mui.com/material-ui/react-text-field/)'s Code was modified by introducing various other elements in the tag as required.

### booking.js

*Lines 156 - 247*

```
<form className="max-w-sm bg-white py-10 m-auto" action="/MyBookings" method="GET">
  <div class="mx-8">
    <h2 className="text-base font-semibold leading-7 text-xl text-gray-900">Service Booking</h2>
    <p className="mt-2 text-m leading-6 text-gray-600">
      Electrician
    </p>

    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 w-max">
      <div className="sm:col-span-4 ">
        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
          Name
        </label>

        <div className="mt-2">
          <div className="flex rounded-md ring-1 ring-gray-300">
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              value={"John Anderson"}
              disabled
            />
          </div>
        </div>
      </div>

      <div className="sm:col-span-2 sm:col-start-1">
        <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
          Date
        </label>

        <div className="mt-2">
          <input
            type="date"
            name="date"
            id="date"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="time" className="block text-sm font-medium leading-6 text-gray-900">
          Time
        </label>

        <div className="mt-2">
          <input
            type="time"
            name="time"
            id="time"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
          Notes
        </label>

        <div className="mt-2">
          <div className="flex rounded-md ring-1 ring-gray-300">
            <textarea
              type="textarea"
              name="notes"
              id="notes"                   
              className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="mt-6 flex items-center justify-center gap-x-6">
      <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
        Cancel
      </button>

      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Confirm
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

### header.js

*Lines 7 - 160*

```
<Disclosure as="nav" className="bg-gray-800">
  {({ open }) => (
    <>
      <div className="mx-auto max-w-7xl">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

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
                className="hidden h-8 w-auto lg:block"
                src={logo}
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

### mybookings.js

*Lines 7 - 147*

```
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
                <th>Name</th>
                <th>Service</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Cancel</th>
              </tr>
            </thead>

            <tbody>
              <tr class="align-middle">
                <td>
                  <div class="d-flex align-items-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="avatar sm rounded-pill me-3 flex-shrink-0" alt="Customer"/>
                    <div>
                      <div class="h6 mb-0 lh-1">Alen John</div>
                    </div>
                  </div>
                </td>
                <td>Painter</td>
                <td>09 Jul, 2023</td>
                <td>15:30</td>
                <td>
                  <button class="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-500 py-1 w-24 text-sm font-medium text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/> <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/> </svg>
                    <span>Pending</span>
                  </button>
                </td>
                <td class="text-end">
                  <button 
                    type="submit"           
                    class="flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 py-1 w-24 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Cancel
                  </button>
                </td>
              </tr>
              
              <tr class="align-middle">
                <td>
                  <div class="d-flex align-items-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="avatar sm rounded-pill me-3 flex-shrink-0" alt="Customer"/>
                    <div>
                      <div class="h6 mb-0 lh-1">Topias Kantola</div>
                    </div>
                  </div>
                </td>         
                <td>Mechanic</td>
                <td>21 Sep, 2023</td>
                <td>11:00</td>
                <td>
                  <button class="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 py-1 w-24 text-sm font-medium text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/> </svg>
                    <span>Approved</span>
                  </button>
                </td>
                <td class="text-end">
                  <button 
                    type="submit"           
                    class="flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 py-1 w-24 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Cancel
                  </button>
                </td>
              </tr>

              <tr class="align-middle">
                <td>
                  <div class="d-flex align-items-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="avatar sm rounded-pill me-3 flex-shrink-0" alt="Customer"/>
                    <div>
                      <div class="h6 mb-0 lh-1">Alen John</div>
                    </div>
                  </div>
                </td>
                <td>Electrician</td>
                <td>31 May, 2023</td>
                <td>11:30</td>
                <td>
                  <button class="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-500 py-1 w-24 text-sm font-medium text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/> <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/> </svg>
                    <span>Pending</span>
                  </button>
                </td>
                <td class="text-end">
                  <button 
                    type="submit"           
                    class="flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 py-1 w-24 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Cancel
                  </button>
                </td>
              </tr>

              <tr class="align-middle">
                <td>
                  <div class="d-flex align-items-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" class="avatar sm rounded-pill me-3 flex-shrink-0" alt="Customer"/>
                    <div>
                      <div class="h6 mb-0 lh-1">Wyatt Morris</div>
                    </div>
                  </div>
                </td>
                <td>Plumber</td>
                <td>20 Aug, 2023</td>
                <td>12:45</td>
                <td>
                  <button class="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 py-1 w-24 text-sm font-medium text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/> </svg>
                    <span>Approved</span>
                  </button>
                </td>
                <td class="text-end">
                  <button 
                    type="submit"           
                    class="flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 py-1 w-24 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Cancel
                  </button>
                </td>
              </tr>

              <tr class="align-middle">
                <td>
                  <div class="d-flex align-items-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar5.png" class="avatar sm rounded-pill me-3 flex-shrink-0" alt="Customer"/>
                    <div>
                      <div class="h6 mb-0 lh-1">Eliana Stout</div>
                    </div>
                  </div>
                </td>
                <td>Electrician</td>
                <td>25 Sep, 2023</td>
                <td>13:15</td>
                <td>
                  <button class="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 py-1 w-24 text-sm font-medium text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/> </svg>
                    <span>Approved</span>
                  </button>
                </td>
                <td class="text-end">
                  <button 
                    type="submit"           
                    class="flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 py-1 w-24 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Cancel
                  </button>
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

*Lines 1 - 19*

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
table th {
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

[1]   “Getting Started – React,” Reactjs.org, 2021. [Online]. Available: https://legacy.reactjs.org/docs/getting-started.html. [Accessed: June 18, 2023]
[2]   “MUI: The React component library you always wanted,” Mui.com, 2023. [Online]. Available: https://mui.com/. [Accessed: June 18, 2023]
[3]   “react-pro-sidebar,” npm, May 20, 2023. [Online]. Available: https://www.npmjs.com/package/react-pro-sidebar. [Accessed: June 18, 2023]
[4]   “React Simple Maps,” React-simple-maps.io, 2020. [Online]. Available: https://www.react-simple-maps.io/. [Accessed: June 18, 2023]
[5]   "Tailwind Documentation" tailwindcss.com, 2023. [Online]. Available: https://v2.tailwindcss.com/docs/. [Accessed: June 18, 2023]

## Acknowledgments

* The code provided valuable insights and served as a foundation for understanding and learning it's functionality and logic. I am grateful for their work and dedication.
* It provided valuable insights and influenced my approach in understanding and learning the approaches and specific techniques. Their contribution is highly appreciated.