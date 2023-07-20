import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import '../services/services.css';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import {BrowserView, MobileView} from 'react-device-detect';
import {Link} from 'react-router-dom';
import { Rating } from "@material-tailwind/react";

export default function Services() {

  const [services, setServices] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [filters, setFilters] = React.useState([]);
  const [filtered, setFiltered] = React.useState(false);
  const [searched, setSearched] = React.useState(false);

  //cleaning, repair, moving, carpentry, landscaping, other
  //const [filters, setFilters] = React.useState([]);

  const fetchData = async () => {
    let data = await fetch('http://localhost:3001/allServices', {
      method: "GET",
      headers: {
        "Content-Type": 'application/json'
      }
    });
    let serviceJson = await data.json();
    let serviceList = serviceJson['services'];
    if(JSON.stringify(services)!=JSON.stringify(serviceList)){
      return setServices(serviceList);
    }
  }

  React.useEffect(() => {
    if(filtered){
      return;
    }
    if(searched){
      return;
    }
    fetchData();
  }, services)


  const searchServices = async (event) =>{
    event.preventDefault();
    setSearched(true);
    let searchTerm = event.target.value;
    if(searchTerm==""){
      setSearched(false);
      fetchData();
      return;
    }
    let data = await fetch('http://localhost:3001/searchServices', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({'searchTerm': searchTerm})
    });
    let serviceJson = await data.json();
    let serviceList = serviceJson['services'];
    if(JSON.stringify(services)!=JSON.stringify(serviceList)){
      return setServices(serviceList);
    }
  }

  const applyFilters = async (e) => {
    let newFilters = [];
    let elements = document.getElementsByClassName('fltrs');
    for(let x=0; x<elements.length; x++){
      if(elements[x].checked){
        newFilters.push(elements[x].value);
      }
    }
    if(newFilters.length==0){
      setFiltered(false);
      fetchData();
      return;
    }
    setFiltered(true);
    let data = await fetch('http://localhost:3001/filterServices', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({'filters': newFilters})
    });
    let serviceJson = await data.json();
    let serviceList = serviceJson['services'];
    if(JSON.stringify(services)!=JSON.stringify(serviceList)){
      return setServices(serviceList);
    }
  }

  return (
    <div>  
      <Header currentPage="/Services" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>

      <div className="bg-white">
        <center>
          <div className="flex mt-4 w-fit">
            <label className="block text-base font-medium leading-6 text-gray-900 m-2">
              Search:
            </label>

            <input
              id='search-bar'
              variant="outlined"
              onChange={searchServices}
              type="text"
              className="block flex-1 rounded-md ring-1 ring-gray-300 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-gray-300 sm:text-sm sm:leading-6"
            />
          </div>

          <BrowserView>
              <div className='filters-desktop'>
                <Accordion className='fltrs-dropdown'>
                  <AccordionItem header="Filters" className='accFltrs'>
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
            </MobileView>

        </center>

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
                <Rating unratedColor="amber" ratedColor="amber" value={4} readonly />
                <Link to="/ratings" className="text-gray-800 mx-2" state={service}>
                      View
                    </Link>
                </div>
                <p style={{color: "inherit"}} className="mb-2 text-lg font-medium text-gray-900">Rate: ${service.pricePerHour}/hr.</p>
                <div className="mb-2">
                  <button
                    type="submit"
                    variant="contained"
                    className="rounded-md bg-gray-800 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <Link to="/booking" className="text-white no-underline" state={service}>
                      Book
                    </Link>
                  </button>
                </div>
                <p className="mb-0 text-sm">{service.serviceDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    
      <Footer/>
    </div>
  );
}