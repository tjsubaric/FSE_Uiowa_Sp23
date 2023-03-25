import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Heading} from './Components/Heading';
import { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, CardActionArea, CardMedia, CardActions, Button} from '@mui/material';
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Find_Doctor() {
  const [doctors, setDoctors] = React.useState([]);


  useEffect(() => {
    axios.get("http://localhost:3000/findadoc")
      .then(response => {
        console.log(response.data.doctors)
        setDoctors(response.data.doctors);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
/*
  useEffect(() => {
    fetch('/findadoc')
      .then(response => response.json())
      .then(data => setDoctors(data));
  }, []);
*/
  return (
    <div> 
      <Heading/>
      <Grid container my = {1} columnSpacing = {2} rowSpacing = {15} marginLeft = {14}>
        {doctors.map(doctor => (
          <Grid item md = {4}>
              <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      src = {doctor.profilepicture}
                      alt= {doctor.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {doctor.name} 
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {doctor.specialty}  
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="medium" color="primary">
                      Schedule Appointment
                    </Button>
                    <Button size = 'medium' color = 'primary'>
                      Learn More
                    </Button>
                  </CardActions>
              </Card> 
          </Grid>
        ))}
      </Grid>
    </div>
  );
}