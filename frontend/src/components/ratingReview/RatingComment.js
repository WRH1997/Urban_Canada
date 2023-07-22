import React, { useEffect, useRef, useState } from 'react';
import Star from './ratingSubComponent/Star';

import axios from 'axios';
import { Typography, Box, Button, Grid, Paper, Avatar, Card, CardContent } from '@mui/material';
import { Rating } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import Header from '../header/header';
import Footer from "../footer/footer";

import { useParams } from 'react-router-dom';
import { display, flexbox } from '@mui/system';

// import ImageSpecific from './ratingSubComponent/ImageSpecific';
// import Comment from './ratingSubComponent/Comment';


const App = () => {

  // const location = useLocation();
  // const service = location.state;

  const { vendorId, bookingId } = useParams();
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);

  const [newComment, setNewComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ratingReviewData, setRatingReviewData] = useState([]);
  const [selectedStar, setSelectedStar] = useState(0);
  const [isReviewed, setIsReviwed] = useState(false);



  const commentorsStar = [1, 2, 3];
  const userName = 'Robert Guilbert';

  useEffect(() => {
    const fetchRatingReviewData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/rating/getRating/${vendorId}`);
        console.log(response.data)
        setRatingReviewData(response.data); // Extract the data from the response object
        console.log(response.data); // Log the data to verify if it's correct
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
        const response = await axios.post(`http://localhost:3001/rating/getVendorInfo/`, { vendorId});
        setIsSubmitted(response.data.isReviewed);
        setIsReviwed(response.data.isReviewed)
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
    // console.log(se);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    // You can handle the comment submission here and add it to the comments section
    const userName = userData.firstName + " " + userData.lastName
    console.log(userName);
    try {
      // Make a POST request to store the new comment in the database
      await axios.post(`http://localhost:3001/rating/postRating`, {
        name: userName,
        comment: newComment,
        star: selectedStar,
        vendorId: vendorId,
        consumerId: userData._id,
        bookingId
      });

      // Adjust this value according to your logic
        

        // Reset the comment field and set isSubmitted to true after the form is submitted
        setNewComment('');
        setIsSubmitted(true);
      } catch (error) {
        console.error('Error submitting the comment:', error);
      }
      
      console.log(selectedStar);
      console.log('New Comment:', newComment);
      setNewComment(''); // Clear the comment field after submission
      setIsSubmitted(true); // Set isSubmitted to true after the form is submitted
      
  };

  const calculateChartData = () => {
    let starCount = [0, 0, 0, 0, 0];
    
    ratingReviewData.forEach((review) => {
      starCount[review.star - 1]++;
    });
    
    // starCount.reverse();
    
    const rectStarFill = starCount.map((count) => ((count / ratingReviewData.length) * 100).toFixed(2));
    
    const average = ratingReviewData.length > 0 ? (starCount.reduce((acc, cur, index) => acc + (cur * (index + 1)), 0) / ratingReviewData.length).toFixed(2) : 0.0;
    const avgText = `${average} average based on ${ratingReviewData.length} reviews.`;
    
    return {
      average,
      avgText,
      rectStarFill,
    };
  };
  
  
  // Function to generate a random image URL
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
  
  // Generate a random index to select a random image from the array
  const randomIndex = Math.floor(Math.random() * images.length);
  
  return images[randomIndex];
};

// eslint-disable-next-line
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
  
  //   const [chartKey, setChartKey] = useState(0);
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
          {/* Profile Images */}
          <Grid item xs={12} md={4}>
            <Paper>
              <Box p={2} display="flex" flexDirection="column" alignItems="center">
                <Avatar alt="User Avatar" src={getRandomImage()} sx={{ width: 200, height: 200 }} />
                <Typography variant="h6" mt={2}>
                  {userName}
                </Typography>
                <Typography variant="body1" mt={1}>
                  Age: 30
                </Typography>
                <Typography variant="body1">Location: New York</Typography>
                <Typography variant="body1">Occupation: Engineer</Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Average rating and star info values */}
          <Grid item xs={12} md={4}>
            <Paper>
              <Box p={2} textAlign="left">
                <Typography variant="h6">User Rating</Typography>
                <Box display="flex" alignItems="center">
                  {/* <Rating name="average-rating" value={parseFloat(calculateChartData().average)} readOnly /> */}
                  <Star sel_quan={parseFloat(calculateChartData().average)} editable={false} selSize={20} />
                  <Typography variant="body1">{calculateChartData().avgText}</Typography>
                </Box>
                <Bar height="300px"
                //   key={chartKey}
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
                  height={200}
                  />
              </Box>
            </Paper>
          </Grid>

          {/* Comments Section */}
          <Grid item xs={12} md={4}>
            <Paper width="100%">
              <Box p={2} textAlign="left" backgroundColor="rgba(100,150,255,0.5)">
              {isSubmitted || bookingId == undefined? (
                <Typography variant="body1" fontWeight="bold">
                  {bookingId == undefined?"No Services Booked":"Thank you for your comment!"}
                {/* Thank you for your comment! */}
              </Typography>
              ) : (
                <form onSubmit={handleCommentSubmit}>
                    <Typography variant="h6">Comment</Typography>
                    <textarea
                      rows={2}
                      // cols={}
                      value={newComment}
                      onChange={handleCommentChange}
                      sx={{
                        width: '100%', // Occupy the full width of the container
                        resize: 'vertical', // Allow vertical resizing
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

      {/* Comments */}
      <br/>
      {/* {commentorsName.map((name, index) => ( */}
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
                {/* <ImageSpecific src="./temp1.jpg" bradius="20" /> */}
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

