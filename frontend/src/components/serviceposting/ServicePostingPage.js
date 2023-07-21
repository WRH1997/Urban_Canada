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

  useEffect(() => {
    // Fetch all services on component mount
    axios
      .get('http://localhost:3001/allServices') // Replace this with your actual API endpoint
      .then((response) => setServices(response.data.services))
      .catch((error) => console.error('Error fetching services:', error));
  }, []);

  const handleSearch = (searchTerm) => {
    // Make a POST request to /searchServices with the search term in the JSON body
    axios
      .post('/searchServices', { searchTerm }) // Replace with your actual API endpoint
      .then((response) => setFilteredServices(response.data.services))
      .catch((error) => console.error('Error searching services:', error));
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredServices([]); // Reset to empty array if "All" is selected
    } else {
      // Make a POST request to /filterServices with the selected category in the JSON body
      axios
        .post('/filterServices', { filters: [category] }) // Pass the category as an array in the "filters" property
        .then((response) => setFilteredServices(response.data.services))
        .catch((error) => console.error('Error filtering services:', error));
    }
  };

  return (
    <div>
      <Header currentPage="/serviceposting"/>
      <h1>Services</h1>
      <ServiceSearch onSearch={handleSearch} />
      <ServiceFilter onFilter={handleFilter} />
      <ServiceList services={selectedCategory === 'All' ? services : filteredServices} /> 
    </div>
  );
};