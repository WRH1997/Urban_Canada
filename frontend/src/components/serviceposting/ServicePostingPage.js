/*
Author(s): 
- Edwin Adams (B00917930)
*/


import React, { useState, useEffect } from 'react';
import ServiceList from './ServiceList';
import ServiceSearch from './ServiceSearch';
import ServiceFilter from './ServiceFilter';
import Header from "../header/header";

import axios from 'axios';



export default function ServicePostingPage() {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
  axios
    .get('http://localhost:3001/allServices')
    .then((response) => {
      const userDataString = localStorage.getItem("userData");
      console.log(userDataString);
      let vendorID = "";
      try {
        const userData = JSON.parse(userDataString);
        vendorID = userData._id;
      } catch (e) {
        console.error("Error parsing user data:", e);
      }

      const filteredServices = response.data.services.filter((service) => service.vendorID === vendorID);
      setServices(filteredServices);
    })
    .catch((error) => console.error('Error fetching services:', error));
}, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm)
    const searchTermLowerCase = searchTerm.toLowerCase()
    let searchResult = services.filter(service => 
      service.serviceName.toLowerCase().includes(searchTermLowerCase) || service.serviceDesc.toLowerCase().includes(searchTermLowerCase)
      );
    console.log("search result", searchResult)
    setFilteredServices(searchResult);
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredServices([]); // Reset to empty array if "All" is selected
    } else {
      setFilteredServices(
        services.filter(service => service.category == category)
        );
    }
  };

  return (
    <div>
      <Header currentPage="/serviceposting"/>

      <ServiceSearch onSearch={handleSearch} />
      <ServiceFilter onFilter={handleFilter} />
      <ServiceList services={ (selectedCategory === 'All' && searchTerm == "" ) ? services : filteredServices} /> 
    </div>
  );
};