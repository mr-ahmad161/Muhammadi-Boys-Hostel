import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FeaturesContainer = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.1);
`;

const FeaturesContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FeatureCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

const FeatureListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  
  &::before {
    content: '•';
    color: #4ecdc4;
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
  }
`;

const FeaturesSection = () => {
  const features = [
    {
      icon: '🏨',
      title: 'Smart Booking System',
      description: 'Easy and intuitive booking process with real-time availability.',
      features: [
        'Instant room availability check',
        'Secure online payment',
        'Flexible booking dates',
        'Booking confirmation emails'
      ]
    },
    {
      icon: '👥',
      title: 'User Management',
      description: 'Comprehensive user profiles and account management system.',
      features: [
        'Personal user profiles',
        'Booking history',
        'Preferences management',
        'Account settings'
      ]
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Powerful insights and reporting for hostel management.',
      features: [
        'Occupancy analytics',
        'Revenue reports',
        'Guest statistics',
        'Performance metrics'
      ]
    },
    {
      icon: '🔧',
      title: 'Facility Management',
      description: 'Complete control over hostel facilities and maintenance.',
      features: [
        'Room status tracking',
        'Maintenance requests',
        'Facility bookings',
        'Inventory management'
      ]
    },
    {
      icon: '📱',
      title: 'Mobile Responsive',
      description: 'Fully responsive design that works on all devices.',
      features: [
        'Mobile-optimized interface',
        'Touch-friendly controls',
        'Cross-platform compatibility',
        'Offline functionality'
      ]
    },
    {
      icon: '🔒',
      title: 'Security & Privacy',
      description: 'Enterprise-grade security to protect your data.',
      features: [
        'SSL encryption',
        'Data protection',
        'Secure authentication',
        'Privacy compliance'
      ]
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <FeaturesContainer>
      <FeaturesContent>
        <SectionHeader
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle>Web Application Features</SectionTitle>
          <SectionSubtitle>
            Discover the powerful features that make our hostel management system 
            the perfect solution for modern accommodation needs.
          </SectionSubtitle>
        </SectionHeader>

        <FeaturesGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <FeatureList>
                {feature.features.map((item, itemIndex) => (
                  <FeatureListItem key={itemIndex}>
                    {item}
                  </FeatureListItem>
                ))}
              </FeatureList>
              <CTAButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </CTAButton>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesContent>
    </FeaturesContainer>
  );
};

export default FeaturesSection;
