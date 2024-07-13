import React from 'react';
import { Button, Container, Typography } from '@mui/material';

const HeroSection = ({ openModal }) => (
  <Container style={{ textAlign: 'center', padding: '50px 0' }}>
    <Typography variant="h2" gutterBottom>
      Refer & Earn
    </Typography>
    <Typography variant="h6" gutterBottom>
      Refer a course to your friends and earn rewards!
    </Typography>
    <Button variant="contained" color="primary" onClick={openModal}>
      Refer Now
    </Button>
  </Container>
);

export default HeroSection;
