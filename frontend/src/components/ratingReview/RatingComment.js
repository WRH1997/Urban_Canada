// author: Darshil Patel

import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Star from './ratingSubComponent/Star';
import { Typography, Box, Button, Grid, Paper, Avatar, Card, CardContent } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import Header from '../header/header';
import Footer from "../footer/footer";
import axios from 'axios';

const App = () => {

  const { vendorId, bookingId } = useParams();
  const userData = JSON.parse(localStorage.getItem("userData"));

  const [newComment, setNewComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ratingReviewData, setRatingReviewData] = useState([]);
  const [selectedStar, setSelectedStar] = useState(0);
  const [isReviewed, setIsReviwed] = useState(false);
  const [providerName,setProviderName] = useState('');
  const [servicesName,setServicesName] = useState([]);
  const [serviceLocations,setServiceLocations] = useState([]);
  const [serviceImg,setServiceImg] = useState([]);

  const userName = '';

  useEffect(() => {
    const fetchRatingReviewData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/rating/getRating/${vendorId}`);
        setRatingReviewData(response.data);
      } catch (error) {
        console.error('Error fetching rating review data:', error);
      }
    };

    const checkIsReviewed = async () => {
      try {
        const response = await axios.post(`http://localhost:3001/rating/isReviewed/`, { bookingId });
        setIsSubmitted(response.data.isReviewed);
        setIsReviwed(response.data.isReviewed)
      } catch (error) {
        console.error('Error checking if reviewed:', error);
      }
    };

    const loadProviderDetails = async () => {
      try {
        const response = await axios.post(`http://localhost:3001/rating/getVendorInfo/`, { vendorId });

        const vendor = response.data.vendor.firstName +" "+ response.data.vendor.lastName;

        setProviderName(vendor);
        setServicesName(response.data.services);
        setServiceLocations(response.data.locations);
      } catch (error) {
        console.error('Error checking if reviewed:', error);
      }
    };
  
    fetchRatingReviewData();
    checkIsReviewed();
    loadProviderDetails();
    
  }, []);

  const handleStarChange = (value) => {
    setSelectedStar(value);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    const userName = userData.firstName + " " + userData.lastName
    try {

      await axios.post(`http://localhost:3001/rating/postRating`, {
        name: userName,
        comment: newComment,
        star: selectedStar,
        vendorId: vendorId,
        consumerId: userData._id,
        bookingId
      });

        setNewComment('');
        setIsSubmitted(true);
        const notification = {
          booking_id: bookingId,
          recipient_id: vendorId,
          message: "Consumer posted review",
          type: "Review Added"
        }
        axios.post("http://localhost:3001/notifications",notification).then((res)=>{
          if(res){
            window.location.href="/provider_bookings"
          }
        }).catch((e)=>{
          alert(e)
        })
      } catch (error) {
        console.error('Error submitting the comment:', error);
      }
      
      setNewComment('');
      setIsSubmitted(true);
      
  };

  const calculateChartData = () => {
    let starCount = [0, 0, 0, 0, 0];
    
    ratingReviewData.forEach((review) => {
      starCount[review.star - 1]++;
    });
    
    const rectStarFill = starCount.map((count) => ((count / ratingReviewData.length) * 100).toFixed(2));
    
    const average = ratingReviewData.length > 0 ? (starCount.reduce((acc, cur, index) => acc + (cur * (index + 1)), 0) / ratingReviewData.length).toFixed(2) : 0.0;
    const avgText = `${average} average based on ${ratingReviewData.length} reviews.`;
    
    return {
      average,
      avgText,
      rectStarFill,
    };
  };
  
  const getRandomImage = () => {
    const images = [
    "https://mui.com/static/images/avatar/1.jpg",
    "https://mui.com/static/images/avatar/2.jpg",
    "https://mui.com/static/images/avatar/3.jpg",
    "https://mui.com/static/images/avatar/4.jpg",
    "https://mui.com/static/images/avatar/5.jpg",
    "https://mui.com/static/images/avatar/6.jpg",
    "https://mui.com/static/images/avatar/7.jpg",
    "https://mui.com/static/images/avatar/8.jpg",
    "https://mui.com/static/images/avatar/9.jpg",
    "https://mui.com/static/images/avatar/10.jpg",
  ];
  
  const randomIndex = Math.floor(Math.random() * images.length);
  
  return images[randomIndex];
};

const chartData = {
  labels: ['5-Star', '4-Star', '3-Star', '2-Star', '1-Star'],
  datasets: [
    {
      label: 'Percentage of Stars',
      data: calculateChartData().rectStarFill.reverse(),
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 205, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(54, 162, 235, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
    ],
  };

  const chartRef = useRef(null);
  
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data = chartData;
      chartRef.current.update();
    }
  }, []);
  
  return (
    <div className="App">
      <Header/>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Paper>
              <Box p={2} display="flex" flexDirection="column" alignItems="center">
                <Avatar alt="User Avatar" src={serviceImg[0]} sx={{ width: 200, height: 200 }} />
                <Typography variant="h6" mt={2}>
                  {providerName}
                </Typography>

                <Typography variant="body1">Location: {serviceLocations}</Typography>
                <Typography variant="body1">Services: {servicesName}</Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper>
              <Box p={2} textAlign="left">
                <Typography variant="h6">User Rating</Typography>
                <Box display="flex" alignItems="center">
                  <Star sel_quan={parseFloat(calculateChartData().average)} editable={false} selSize={20} />
                  <Typography variant="body1">{calculateChartData().avgText}</Typography>
                </Box>
                <Bar height="200px"
                key={0}
                ref={chartRef}
                data={chartData}
                options={{
                  indexAxis: 'y',
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                  }}
                  />
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper width="100%">
              <Box p={2} textAlign="left" backgroundColor="rgba(100,150,255,0.5)">
              {isSubmitted || bookingId == undefined? (
                <Typography variant="body1" fontWeight="bold">
                  {bookingId == undefined?"No Services Booked":"Thank you for your comment!"}
              </Typography>
              ) : (
                <form onSubmit={handleCommentSubmit}>
                    <Typography variant="h6">Comment</Typography>
                    <textarea
                      rows={2}
                      value={newComment}
                      onChange={handleCommentChange}
                      sx={{
                        width: '100%',
                        resize: 'vertical',
                      }}
                      placeholder="Enter your comment..."
                      />
                    <Box display="flex" alignItems="center">
                    <Star sel_quan={selectedStar} editable={true} onStarChange={handleStarChange} />
                    </Box>
                    <Button type="submit" variant="contained" color="primary" size="small">
                      Submit
                    </Button>
                  </form>
                )}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <br/>

      {ratingReviewData.length === 0 ? (
       <Card>
       <CardContent>
         <Typography variant="body1" fontWeight="bold">
           No comments yet.
         </Typography>
       </CardContent>
     </Card>
      ) : (
      ratingReviewData.map((review, index) => (
        <Box key={index} p={1} bgcolor="rgb(75 85 99)" mt={1}>
          <Paper>
            <Box display="flex" alignItems="center" p={1}>
              <Box display="flex" alignItems="center" mr={1}>
                <Avatar alt={review.name} src={getRandomImage()} />
              </Box>
              <Box width="80%" py={1}>
                <Typography variant="body1" fontWeight="bold">
                  {review.name}
                </Typography>
                <Typography variant="body2">{review.comment}</Typography>
              </Box>
              <Box>
                <Star sel_quan={review.star} editable={false} />
              </Box>
            </Box>
          </Paper>
        </Box>
      ))
      )}
      <br />
      <br />
      <br />
      <Footer/>
    </div>
  );
};

export default App;