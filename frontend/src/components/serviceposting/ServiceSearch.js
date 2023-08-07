/*
Author(s): 
- Edwin Adams (B00917930)
*/


import React from 'react';
import './ServicePosting.css';

export default function ServiceSearch ({ onSearch }) {
    return (
    <div className = "search-bar-container">
        <center>
        <input
        className='search-bar'
        type="text"
        placeholder="Search services..."
        onChange={(event) => onSearch(event.target.value)}
        /></center>
    </div>
    );
};
