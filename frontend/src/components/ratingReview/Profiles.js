import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, Button, TextField, Avatar } from "@mui/material";
import { useNavigate } from 'react-router-dom';


function Profiles ({ dataArray }){

    const navigate = useNavigate();

    const [userData, setUserData] = useState([]);
    const [filter, setFilter] = useState('');

    const whiteTextStyle = {
        color: 'white',
        borderColor: 'white',
        width: '320px'
      };


    useEffect(() => {

        const fetchData = async () => {
        try {
            const response = await axios.get('https://express-t4.onrender.com/api/users');
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
        };

        fetchData();

    }, []);

    const filteredUsers = userData.filter(user => {
        const name = user.name.toLowerCase();
        const filterValue = filter.toLowerCase();

        console.log(filterValue);
        console.log(userData);
      
        return name.includes(filterValue) || name.includes(filterValue);
      });

    return (
        <div className='cards-container'>
        
            <Typography variant="h5" component="div"  align="center" >
                <h1>Users Profiles</h1>
            </Typography>
            <TextField
            label="Search by firstname or lastname"
            value={filter}
            onChange={e => setFilter(e.target.value)}
            style={{ marginBottom: '20px'}}
            InputProps={{
                style: whiteTextStyle,
            }}
            InputLabelProps={{
                style: whiteTextStyle,
            }}
            />
            <Grid container columnSpacing={10} rowSpacing={5}>
            {filteredUsers.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user._id}>
                <Card className="list-card">
                <CardContent>
                    <Avatar alt={user.name} src={user.picture} />
                    <Typography variant="h5" component="div">
                    {user.name}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                    Age: {user.age}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                    Email: {user.email}
                    </Typography>
                    <Button onClick={()=>{
                        navigate("profileDetails?id="+user._id);
                    }}>View</Button>
                </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>
      </div>
    );

  };

export default Profiles;