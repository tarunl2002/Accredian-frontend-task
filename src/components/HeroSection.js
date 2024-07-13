import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import heroimage from "../Asset/Heroimg.png"

const HeroSection = ({ openModal }) => (
  <Container style={{ textAlign: 'center', padding: '50px 0' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={heroimage} alt="Heroimg"/>
    <Typography variant="h2" gutterBottom>
      Refer & Earn
    </Typography>
    <Typography variant="h6" gutterBottom>
      Refer a course to your friends and earn rewards!
    </Typography>
    <Button variant="contained" color="primary" onClick={openModal}>
      Refer Now
    </Button>
    </Box>
  </Container>
);

export default HeroSection;
