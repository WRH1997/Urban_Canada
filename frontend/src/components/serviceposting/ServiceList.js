import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ServiceList({ services }) {
    console.log(services)
    if (!services || services.length === 0) {
        return <div>No services found.</div>;
    }
    
    return (
    <div>
        {services.map((service) => (
        <Card key={service._id} sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 140 }}
            image={service.serviceImg}
            title={service.serviceName}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Service: {service.serviceName}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                Category: {service.category}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                Hourly Rate: {service.pricePerHour}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {service.serviceDesc}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        ))}
    </div>
    );
};

