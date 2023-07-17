import React, { useEffect, useRef, useState } from 'react';
import Star from './ratingSubComponent/Star';


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

//   const commentorsCount = 3;
  const starCount = 5;
  const commentorsName = ['Darshil Sozio', 'Jolly Psycho', 'Gippi Madie'];
  const comment = [
    'Awesome work!',
    'They Provide the best service Ever!!',
    'They cleaned my house very neatly!',
  ];
  const commentorsStar = [1, 2, 3];
  const userName = 'Robert Guilbert';
  const myArray = [5, 2, 4, 2, 1];

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    // You can handle the comment submission here and add it to the comments section
    console.log('New Comment:', newComment);
    setNewComment(''); // Clear the comment field after submission
  };

  const calculateChartData = () => {
    let totalValue = 0;
    let totalUsers = 0;
    let rectStarFill = new Array(5).fill(0);

    for (let i = 0; i < starCount; i++) {
      totalValue += (myArray[i] * (5 - i));
      totalUsers += myArray[i];
      rectStarFill[i] = ((myArray[i] / totalUsers) * 100).toFixed(2);
    }

    const average = totalUsers !== 0 ? (totalValue / totalUsers).toFixed(2) : 0.0;
    const avgText = `${average} average based on ${totalUsers} reviews.`;

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
                {newComment ? (
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
      {commentorsName.map((name, index) => (
        <Box key={index} p={1} bgcolor="rgb(75 85 99)" mt={1}>
          <Paper>
            <Box display="flex" alignItems="center" p={1}>
              <Box display="flex" alignItems="center" mr={1}>
                {/* <ImageSpecific src="./temp1.jpg" bradius="20" /> */}
                <Avatar alt={name} src={getRandomImage()} />
              </Box>
              <Box width="80%" py={1}>
                <Typography variant="body1" fontWeight="bold">
                  {name}
                </Typography>
                <Typography variant="body2">{comment[index]}</Typography>
              </Box>
              <Box>
                <Star sel_quan={commentorsStar[index]} editable={false} />
              </Box>
            </Box>
          </Paper>
        </Box>
      ))}
      <Footer/>
    </div>
  );
};

export default App;
