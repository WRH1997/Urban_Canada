import React from 'react';
import './ServicePosting.css';

export default function ServiceSearch ({ onSearch }) {
    return (
    <div>
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
