import React from 'react';

export default function ServiceSearch ({ onSearch }) {
    return (
    <div>
        <input
        type="text"
        placeholder="Search services..."
        onChange={(event) => onSearch(event.target.value)}
        />
    </div>
    );
};
