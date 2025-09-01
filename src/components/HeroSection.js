import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #667eea 100%);
  padding: 6rem 2rem 4rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  color: white;
  position: relative;
  z-index: 2;
`;

const MainTitle = styled(motion.h1)`
  font-size: clamp(3.5rem, 8vw, 6rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #ffffff, #e3f2fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.h2)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 600;
  margin-bottom: 2rem;
  color: #e3f2fd;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const Description = styled(motion.p)`
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.8;
  color: #e3f2fd;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
`;

const PhoneNumber = styled(motion.div)`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 2rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    text-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  }
  
  &::before {
    content: '📞';
    font-size: 1.5rem;
  }
`;

const WhatsAppButton = styled(motion.button)`
  background: #25D366;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto 2rem;
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(37, 211, 102, 0.4);
  }
  
  &::before {
    content: '💬';
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const Button = styled(motion.button)`
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const PrimaryButton = styled(Button)`
  background: linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%);
  color: #1e3c72;
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(255, 255, 255, 0.4);
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: white;
  border: 3px solid white;
  
  &:hover {
    background: white;
    color: #1e3c72;
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(255, 255, 255, 0.3);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9);
`;

const ScrollText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;

const ScrollArrow = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-right: 3px solid rgba(255, 255, 255, 0.8);
  border-bottom: 3px solid rgba(255, 255, 255, 0.8);
  transform: rotate(45deg);
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
`;

const AnimatedStar = styled(motion.div)`
  position: absolute;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.5rem;
  pointer-events: none;
`;

const GlowingDot = styled(motion.div)`
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
`;

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToHostels = () => {
    document.getElementById('hostels-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handlePhoneClick = () => {
    window.open('tel:+923237222650', '_self');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I am interested in booking a room at Muhammadi Boys Hostel. Can you please provide more information?');
    window.open(`https://wa.me/923237222650?text=${message}`, '_blank');
  };

  const handleMakeEnquiry = () => {
    const message = encodeURIComponent('Hi! I would like to make an enquiry about Muhammadi Boys Hostel. Can you please provide more information about your rooms and pricing?');
    window.open(`https://wa.me/923237222650?text=${message}`, '_blank');
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 1, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.6, ease: "easeOut" }
    }
  };

  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.9, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 1.2, ease: "easeOut" }
    }
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 1.5, ease: "easeOut" }
    }
  };

  const arrowVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const starVariants = {
    animate: {
      rotate: [0, 360],
      scale: [1, 1.2, 1],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.8, 0.3, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <HeroContainer id="home-section">
      <FloatingElements>
        <FloatingElement
          style={{ top: '10%', left: '10%', width: '60px', height: '60px' }}
          variants={floatingVariants}
          animate="animate"
        />
        <FloatingElement
          style={{ top: '20%', right: '15%', width: '40px', height: '40px' }}
          variants={floatingVariants}
          animate="animate"
        />
        <FloatingElement
          style={{ bottom: '30%', left: '20%', width: '50px', height: '50px' }}
          variants={floatingVariants}
          animate="animate"
        />
        
        {/* Animated Stars */}
        <AnimatedStar
          style={{ top: '15%', left: '20%' }}
          variants={starVariants}
          animate="animate"
        >
          ⭐
        </AnimatedStar>
        <AnimatedStar
          style={{ top: '25%', right: '25%' }}
          variants={starVariants}
          animate="animate"
        >
          ⭐
        </AnimatedStar>
        <AnimatedStar
          style={{ bottom: '25%', right: '10%' }}
          variants={starVariants}
          animate="animate"
        >
          ⭐
        </AnimatedStar>
        
        {/* Glowing Dots */}
        <GlowingDot
          style={{ top: '35%', left: '5%' }}
          variants={glowVariants}
          animate="animate"
        />
        <GlowingDot
          style={{ top: '45%', right: '8%' }}
          variants={glowVariants}
          animate="animate"
        />
        <GlowingDot
          style={{ bottom: '40%', left: '15%' }}
          variants={glowVariants}
          animate="animate"
        />
      </FloatingElements>
      
      <HeroContent>
        <MainTitle variants={titleVariants} initial="hidden" animate="visible">
          Best Boys Hostel
        </MainTitle>
        <Subtitle variants={subtitleVariants} initial="hidden" animate="visible">
          Muhammadi Boys Hostel
        </Subtitle>
        <Description variants={descriptionVariants} initial="hidden" animate="visible">
          Welcome to Muhammadi Boys Hostel, where comfort meets convenience. 
          Your premier destination for comfortable and affordable accommodation 
          with modern amenities and outstanding service.
        </Description>
        
        <PhoneNumber 
          variants={phoneVariants} 
          initial="hidden" 
          animate="visible"
          onClick={handlePhoneClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          +92 323 7222650
        </PhoneNumber>

        <WhatsAppButton
          variants={phoneVariants}
          initial="hidden"
          animate="visible"
          onClick={handleWhatsAppClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Chat on WhatsApp
        </WhatsAppButton>
        
        <ButtonGroup variants={buttonVariants} initial="hidden" animate="visible">
          <PrimaryButton 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            onClick={handleMakeEnquiry}
          >
            Make An Enquiry
          </PrimaryButton>
          <SecondaryButton 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            onClick={scrollToHostels}
          >
            View Rooms
          </SecondaryButton>
        </ButtonGroup>
      </HeroContent>
      
      <ScrollIndicator 
        variants={scrollVariants} 
        initial="hidden" 
        animate="visible" 
        onClick={scrollToAbout} 
        whileHover={{ scale: 1.1 }}
      >
        <ScrollText>Scroll to explore</ScrollText>
        <ScrollArrow variants={arrowVariants} animate="animate" />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;
