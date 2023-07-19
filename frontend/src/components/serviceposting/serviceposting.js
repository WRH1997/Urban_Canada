import React, { useState, useEffect } from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export default function ServicePostingPage() {
  return (
    <div>
      <Header currentPage="/serviceposting"/>
      <h1>Service Posting</h1>
      
    </div>
  );
}