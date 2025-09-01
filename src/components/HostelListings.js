import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HostelListingsContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  position: relative;
  z-index: 2;
  background: linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%);
`;

const HostelListingsContent = styled.div`
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
  color: #1e3c72;
  margin-bottom: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(135deg, #1e3c72 0%, #667eea 100%);
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const PackagesTitle = styled(motion.h3)`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #2a5298;
  text-align: center;
  margin: 3rem 0 2rem;
`;

const HostelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const HostelCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(30, 60, 114, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #1e3c72 0%, #667eea 100%);
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(30, 60, 114, 0.2);
  }
`;

const HostelImage = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #667eea 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.8);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(30, 60, 114, 0.3), rgba(42, 82, 152, 0.3));
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 2;
  }
`;

const HostelInfo = styled.div`
  padding: 2rem;
  color: #333;
`;

const HostelName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1e3c72;
`;

const HostelLocation = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '📍';
    font-size: 1.2rem;
  }
`;

const RoomTypes = styled.div`
  margin-bottom: 1.5rem;
`;

const RoomType = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 0.8rem;
  background: #f8f9fa;
  border-radius: 10px;
  border-left: 4px solid #1e3c72;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e3f2fd;
    transform: translateX(5px);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const RoomTypeName = styled.span`
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
`;

const RoomTypePrice = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e3c72;
`;

const HostelFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const FeatureTag = styled.span`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(30, 60, 114, 0.2);
`;

const ViewDetailsButton = styled(motion.button)`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(30, 60, 114, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(30, 60, 114, 0.4);
  }
`;

const WhatsAppBookingButton = styled(motion.button)`
  background: #25D366;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  margin-top: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(37, 211, 102, 0.4);
  }
  
  &::before {
    content: '💬';
    font-size: 1.2rem;
  }
`;

const HostelListings = () => {
  const hostels = [
    {
      id: 1,
      name: "Single Bedroom (Attached bathroom)",
      location: "All rooms feature comfortable beds, cupboards, and lockers",
      image: "./images/singal-bed.jpeg",
      fallbackEmoji: "🛏️",
      roomTypes: [
        { name: "Single Bed Room", price: "PKR 25,000/month" },
        { name: "With Free WiFi", price: "Included" },
        { name: "24/7 Security", price: "Included" }
      ],
      features: ["Free WiFi", "Attached Bathroom", "CCTV Cameras", "Bike Parking"]
    },
    {
      id: 2,
      name: "Double Bed Rooms (Attached bathroom)",
      location: "All rooms feature comfortable beds, cupboards, and lockers",
      image: "./images/double-bed.jpeg",
      fallbackEmoji: "🛏️🛏️",
      roomTypes: [
        { name: "Double Bed Room", price: "PKR 35,000/month" },
        { name: "With Free WiFi", price: "Included" },
        { name: "24/7 Security", price: "Included" }
      ],
      features: ["Free WiFi", "Attached Bathroom", "CCTV Cameras", "Bike Parking"]
    },
    {
      id: 3,
      name: "Triple Bed Rooms (Attached bathroom)",
      location: "All rooms feature comfortable beds, cupboards, and lockers",
      image: "./images/triple-bed.jpeg",
      fallbackEmoji: "🛏️🛏️🛏️",
      roomTypes: [
        { name: "Triple Bed Room", price: "PKR 45,000/month" },
        { name: "With Free WiFi", price: "Included" },
        { name: "24/7 Security", price: "Included" }
      ],
      features: ["Free WiFi", "Attached Bathroom", "CCTV Cameras", "Bike Parking"]
    }
  ];

  const handleWhatsAppBooking = (roomType) => {
    const message = encodeURIComponent(`Hi! I am interested in booking a ${roomType} at Muhammadi Boys Hostel. Can you please provide more information about availability and pricing?`);
    window.open(`https://wa.me/923237222650?text=${message}`, '_blank');
  };

  const handleImageError = (event, fallbackEmoji) => {
    event.target.style.display = 'none';
    event.target.nextSibling.style.display = 'block';
  };

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
    <HostelListingsContainer id="hostels-section">
      <HostelListingsContent>
        <SectionHeader
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle>Packages</SectionTitle>
          <SectionSubtitle>
            Choice Of Rooms - Luxurious rooms that you can afford with modern amenities 
            and comfortable bedding for a perfect stay.
          </SectionSubtitle>
        </SectionHeader>

        <PackagesTitle
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Choice Of Rooms
        </PackagesTitle>

        <HostelGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {hostels.map((hostel, index) => (
            <HostelCard
              key={hostel.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <HostelImage>
                <img 
                  src={hostel.image} 
                  alt={hostel.name}
                  onError={(e) => handleImageError(e, hostel.fallbackEmoji)}
                />
                <div style={{ display: 'none', position: 'absolute', zIndex: 3 }}>
                  {hostel.fallbackEmoji}
                </div>
              </HostelImage>
              
              <HostelInfo>
                <HostelName>{hostel.name}</HostelName>
                <HostelLocation>{hostel.location}</HostelLocation>
                
                <RoomTypes>
                  {hostel.roomTypes.map((room, roomIndex) => (
                    <RoomType key={roomIndex}>
                      <RoomTypeName>{room.name}</RoomTypeName>
                      <RoomTypePrice>{room.price}</RoomTypePrice>
                    </RoomType>
                  ))}
                </RoomTypes>
                
                <HostelFeatures>
                  {hostel.features.map((feature, featureIndex) => (
                    <FeatureTag key={featureIndex}>
                      {feature}
                    </FeatureTag>
                  ))}
                </HostelFeatures>
                
                <ViewDetailsButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </ViewDetailsButton>
                
                <WhatsAppBookingButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleWhatsAppBooking(hostel.name)}
                >
                  Book on WhatsApp
                </WhatsAppBookingButton>
              </HostelInfo>
            </HostelCard>
          ))}
        </HostelGrid>
      </HostelListingsContent>
    </HostelListingsContainer>
  );
};

export default HostelListings;
