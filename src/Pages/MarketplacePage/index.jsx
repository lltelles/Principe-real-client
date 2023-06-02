/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './index.css'

const API_URL = 'http://localhost:5005'


export default function MarketplacePage() {


  const [services, setServices] = useState([]);

  // function that gets services via axios
  const getAllServices = () => {
    axios
      .get(`${API_URL}/api/services`)
      .then((response) => setServices(response.data))
      .catch((error) => console.log(error))
  };

  useEffect(() => {
    getAllServices()
  }, [])

  return (
    <div id='services-wrap'>
      {services.map((service) => {
        return (
          <div key={service._id}>
            <Box>
              <Card sx={{
                maxWidth: 345,
                mt: 4,
                borderRadius: 3,

              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="public/Images/img1.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    See more
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </div>
        )
      })}
    </div>
  )
}
