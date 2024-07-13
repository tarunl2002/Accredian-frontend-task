import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ReferralFormModal = ({ open, handleClose }) => {
  const [referrerName, setReferrerName] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [friendName, setFriendName] = useState('');
  const [friendEmail, setFriendEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const referralData = {
      referrerName,
      referrerEmail,
      friendName,
      friendEmail
    };

    try {
      const response = await axios.post('https://accredian-backend-task-or5a.onrender.com/api/referrals', referralData);
      console.log('Referral submitted successfully:', response.data);
      handleClose(); 
    } catch (error) {
      console.error('Error submitting referral:', error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Your Name"
            margin="normal"
            required
            value={referrerName}
            onChange={(e) => setReferrerName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Your Email"
            margin="normal"
            required
            value={referrerEmail}
            onChange={(e) => setReferrerEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Friend's Name"
            margin="normal"
            required
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Friend's Email"
            margin="normal"
            required
            value={friendEmail}
            onChange={(e) => setFriendEmail(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferralFormModal;
