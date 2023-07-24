
/*
Author(s): 
- Edwin Adams (B00917930)
*/

import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './ServicePosting.css';

export default function ServiceFilter({ onFilter }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    onFilter(event.target.value);
  };

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
};