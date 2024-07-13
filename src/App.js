// src/App.js
import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ReferralFormModal from './components/ReferralFormModal.js';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div>
      <HeroSection openModal={handleOpenModal} />
      <ReferralFormModal open={modalOpen} handleClose={handleCloseModal} />
    </div>
  );
};

export default App;
