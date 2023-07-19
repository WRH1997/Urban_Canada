import React, { useEffect, useRef, useState } from 'react';
import Star from './ratingSubComponent/Star';

import axios from 'axios';
import { Typography, Box, Button, Grid, Paper, Avatar } from '@mui/material';
import { Rating } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import Header from '../header/header';
import Footer from "../footer/footer";

// import ImageSpecific from './ratingSubComponent/ImageSpecific';
// import Comment from './ratingSubComponent/Comment';


const App = () => {

  const [newComment, setNewComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ratingReviewData, setRatingReviewData] = useState([]);

  const commentorsStar = [1, 2, 3];
  const userName = 'Robert Guilbert';

  useEffect(() => {
    const fetchRatingReviewData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/rating/getRating');
        setRatingReviewData(response.data); // Extract the data from the response object
        console.log(response.data); // Log the data to verify if it's correct
      } catch (error) {
        console.error('Error fetching rating review data:', error);
      }
    };
  
    fetchRatingReviewData();
  }, []);


  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    // You can handle the comment submission here and add it to the comments section
    console.log('New Comment:', newComment);
    setNewComment(''); // Clear the comment field after submission
    setIsSubmitted(true); // Set isSubmitted to true after the form is submitted

  };

  const calculateChartData = () => {
    let starCount = [0, 0, 0, 0, 0];
  
    ratingReviewData.forEach((review) => {
      starCount[review.star - 1]++;
    });
    
    starCount.reverse();
  
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
        data: calculateChartData().rectStarFill,
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
                  <Rating name="average-rating" value={parseFloat(calculateChartData().average)} readOnly />
                  <Typography variant="body1">{calculateChartData().avgText}</Typography>
                </Box>
                <Bar
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
            <Paper>
              <Box p={2} textAlign="left">
              {isSubmitted ? (
              <Typography variant="body1" fontWeight="bold">
                Thank you for your comment!
              </Typography>
              ) : (
                  <form onSubmit={handleCommentSubmit}>
                    <Typography variant="h6">Comment</Typography>
                    <textarea
                      rows={4}
                      cols={30}
                      value={newComment}
                      onChange={handleCommentChange}
                      placeholder="Enter your comment..."
                    />
                    <Box display="flex" alignItems="center">
                      <Star sel_quan={commentorsStar[0]} editable={true} />
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
      {ratingReviewData.map((review, index) => (
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
      ))}
      <br />
      <br />
      <br />
      <Footer/>
    </div>
  );
};

export default App;
