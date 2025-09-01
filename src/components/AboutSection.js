import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  position: relative;
  z-index: 2;
  background: white;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  color: #333;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: #1e3c72;
  margin-bottom: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #1e3c72 0%, #667eea 100%);
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled(motion.h3)`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: #2a5298;
  margin-bottom: 1.5rem;
`;

const Description = styled(motion.p)`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const YearsBadge = styled(motion.div)`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  box-shadow: 0 8px 25px rgba(30, 60, 114, 0.3);
`;

const FeaturesList = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
  border-left: 4px solid #1e3c72;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e3f2fd;
    transform: translateX(5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 1.5rem;
  color: #1e3c72;
`;

const FeatureText = styled.span`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`;

const AboutVisual = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const VisualCard = styled(motion.div)`
  background: linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(30, 60, 114, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #1e3c72 0%, #667eea 100%);
  }
`;

const VisualIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const VisualTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #1e3c72;
  margin-bottom: 0.5rem;
`;

const VisualDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const FloatingCard = styled(motion.div)`
  position: absolute;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 8px 25px rgba(30, 60, 114, 0.3);
  z-index: 10;
`;

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AboutContainer id="about-section">
      <AboutContent
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <AboutText>
          <SectionTitle variants={itemVariants}>
            About Us
          </SectionTitle>
          <SectionSubtitle variants={itemVariants}>
            Professional Boys Hostel Near UMT University
          </SectionSubtitle>
          
          <YearsBadge variants={itemVariants}>
            Premium Boys Hostel
          </YearsBadge>
          
          <Description variants={itemVariants}>
            "Your Premier Boys Accommodation in Johar Town, Lahore"
          </Description>
          
          <Description variants={itemVariants}>
            Welcome to Muhammadi Boys Hostel, strategically located in the heart of Johar Town, 
            just minutes away from UMT University. Our hostel provides professional, 
            comfortable, and affordable accommodation specifically designed for male students 
            who value quality, convenience, and a supportive learning environment.
          </Description>
          
          <Description variants={itemVariants}>
            Located at 13 A-1, Gulshane-e-mustafa, near UMT University, Block C2 Phase 1, 
            Johar Town, Lahore, we offer the perfect blend of academic proximity and 
            modern amenities. Our facilities are designed to support your educational 
            journey with quiet study areas, high-speed internet, and a community of 
            like-minded male students.
          </Description>
          
          <FeaturesList variants={itemVariants}>
            <FeatureItem variants={itemVariants}>
              <FeatureIcon>🎓</FeatureIcon>
              <FeatureText>Near UMT University</FeatureText>
            </FeatureItem>
            <FeatureItem variants={itemVariants}>
              <FeatureIcon>🏠</FeatureIcon>
              <FeatureText>Furnished Rooms</FeatureText>
            </FeatureItem>
            <FeatureItem variants={itemVariants}>
              <FeatureIcon>📶</FeatureIcon>
              <FeatureText>High-Speed WiFi</FeatureText>
            </FeatureItem>
            <FeatureItem variants={itemVariants}>
              <FeatureIcon>🍽️</FeatureIcon>
              <FeatureText>Quality Mess</FeatureText>
            </FeatureItem>
            <FeatureItem variants={itemVariants}>
              <FeatureIcon>📹</FeatureIcon>
              <FeatureText>24/7 CCTV Security</FeatureText>
            </FeatureItem>
            <FeatureItem variants={itemVariants}>
              <FeatureIcon>⚡</FeatureIcon>
              <FeatureText>24/7 Electricity</FeatureText>
            </FeatureItem>
            <FeatureItem variants={itemVariants}>
              <FeatureIcon>🚿</FeatureIcon>
              <FeatureText>Attached Bathrooms</FeatureText>
            </FeatureItem>
            <FeatureItem variants={itemVariants}>
              <FeatureIcon>📚</FeatureIcon>
              <FeatureText>Study Areas</FeatureText>
            </FeatureItem>
            <FeatureItem variants={itemVariants}>
              <FeatureIcon>👨‍🎓</FeatureIcon>
              <FeatureText>Boys Only Environment</FeatureText>
            </FeatureItem>
          </FeaturesList>
        </AboutText>
        
        <AboutVisual>
          <VisualCard variants={cardVariants} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
            <VisualIcon>👨‍🎓</VisualIcon>
            <VisualTitle>Boys-Friendly</VisualTitle>
            <VisualDescription>
              Perfect for male UMT University students with quiet study areas and academic support
            </VisualDescription>
          </VisualCard>
          
          <VisualCard variants={cardVariants} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
            <VisualIcon>📍</VisualIcon>
            <VisualTitle>Prime Location</VisualTitle>
            <VisualDescription>
              Located in Johar Town, Block C2 Phase 1, just minutes from UMT University
            </VisualDescription>
          </VisualCard>
          
          <VisualCard variants={cardVariants} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
            <VisualIcon>🏢</VisualIcon>
            <VisualTitle>Professional Setup</VisualTitle>
            <VisualDescription>
              Modern amenities with 24/7 security, CCTV cameras, and comfortable living spaces
            </VisualDescription>
          </VisualCard>
          
          <FloatingCard 
            variants={floatingVariants} 
            animate="animate"
            style={{ top: '10%', right: '10%' }}
          >
            Boys Only
          </FloatingCard>
          <FloatingCard 
            variants={floatingVariants} 
            animate="animate"
            style={{ bottom: '20%', left: '5%' }}
          >
            Near UMT
          </FloatingCard>
          <FloatingCard 
            variants={floatingVariants} 
            animate="animate"
            style={{ top: '50%', right: '5%' }}
          >
            Professional
          </FloatingCard>
        </AboutVisual>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;
