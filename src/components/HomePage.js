import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import HostelListings from './HostelListings';
import ContactSection from './ContactSection';
import FloatingWhatsApp from './FloatingWhatsApp';

const HomePageContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: #f8f9fa;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const LoadingScreen = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  color: white;
`;

const LoadingText = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
`;

const LoadingSubtext = styled(motion.p)`
  font-size: 1.2rem;
  opacity: 0.8;
  margin-bottom: 2rem;
`;

const LoadingSpinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
`;

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const loadingVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.2 }
    }
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: { duration: 1, repeat: Infinity, ease: "linear" }
    }
  };

  return (
    <HomePageContainer>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen
            variants={loadingVariants}
            initial="initial"
            exit="exit"
          >
            <LoadingText
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              Muhammadi Hostels
            </LoadingText>
            <LoadingSubtext
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              Your Home Away From Home
            </LoadingSubtext>
            <LoadingSpinner
              variants={spinnerVariants}
              animate="animate"
            />
          </LoadingScreen>
        )}
      </AnimatePresence>

      <ContentWrapper>
        <Navigation />
        <HeroSection />
        <AboutSection />
        <HostelListings />
        <ContactSection />
      </ContentWrapper>
      
      <FloatingWhatsApp />
    </HomePageContainer>
  );
};

export default HomePage;
