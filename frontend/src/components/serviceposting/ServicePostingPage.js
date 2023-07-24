// author: Edwin Adams

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
      .then((response) => setServices(response.data.services))
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