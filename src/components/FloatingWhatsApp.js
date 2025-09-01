import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FloatingWhatsAppContainer = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  cursor: pointer;
`;

const WhatsAppButton = styled.div`
  width: 60px;
  height: 60px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 35px rgba(37, 211, 102, 0.6);
  }
  
  &::before {
    content: '💬';
    font-size: 2rem;
    color: white;
  }
`;

const PulseRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border: 2px solid #25D366;
  border-radius: 50%;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0;
    }
  }
`;

const Tooltip = styled.div`
  position: absolute;
  right: 70px;
  top: 50%;
  transform: translateY(-50%);
  background: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.9rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    right: -5px;
    top: 50%;
    transform: translateY(-50%);
    border-left: 5px solid #333;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
`;

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I am interested in booking a room at Muhammadi Boys Hostel. Can you please provide more information?');
    window.open(`https://wa.me/923237222650?text=${message}`, '_blank');
  };

  const containerVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <FloatingWhatsAppContainer
      variants={containerVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onClick={handleWhatsAppClick}
      onMouseEnter={(e) => {
        e.currentTarget.querySelector('div[data-tooltip]').style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector('div[data-tooltip]').style.opacity = '0';
      }}
    >
      <PulseRing />
      <WhatsAppButton />
      <Tooltip data-tooltip>
        Chat on WhatsApp
      </Tooltip>
    </FloatingWhatsAppContainer>
  );
};

export default FloatingWhatsApp;
