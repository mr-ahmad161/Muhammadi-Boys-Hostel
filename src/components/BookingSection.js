import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const BookingContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.1);
`;

const BookingContent = styled.div`
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

const BookingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const BookingMethod = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
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
`;

const MethodIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #4ecdc4;
`;

const MethodTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
`;

const MethodDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ContactInfo = styled.div`
  background: rgba(102, 126, 234, 0.2);
  border-radius: 15px;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: white;
  font-weight: 500;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
`;

const FormInput = styled.input`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  backdrop-filter: blur(10px);
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:focus {
    outline: none;
    border-color: #4ecdc4;
    box-shadow: 0 0 0 2px rgba(78, 205, 196, 0.3);
  }
`;

const FormSelect = styled.select`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  backdrop-filter: blur(10px);
  
  &:focus {
    outline: none;
    border-color: #4ecdc4;
    box-shadow: 0 0 0 2px rgba(78, 205, 196, 0.3);
  }
  
  option {
    background: #333;
    color: white;
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  backdrop-filter: blur(10px);
  min-height: 100px;
  resize: vertical;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:focus {
    outline: none;
    border-color: #4ecdc4;
    box-shadow: 0 0 0 2px rgba(78, 205, 196, 0.3);
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: rgba(78, 205, 196, 0.2);
  border: 1px solid #4ecdc4;
  border-radius: 10px;
  padding: 1rem;
  color: #4ecdc4;
  text-align: center;
  margin-top: 1rem;
`;

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hostel: '',
    roomType: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        hostel: '',
        roomType: '',
        checkIn: '',
        checkOut: '',
        guests: '',
        message: ''
      });
    }, 1000);
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
    <BookingContainer id="booking-section">
      <BookingContent>
        <SectionHeader
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle>Book Your Stay</SectionTitle>
          <SectionSubtitle>
            Choose your preferred booking method. We offer multiple ways to reserve 
            your room for a comfortable and convenient experience.
          </SectionSubtitle>
        </SectionHeader>

        <BookingGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <BookingMethod variants={itemVariants}>
            <MethodIcon>📞</MethodIcon>
            <MethodTitle>Book by Phone</MethodTitle>
            <MethodDescription>
              Call us directly to speak with our friendly staff and make your reservation. 
              We're available 24/7 to assist you with your booking needs.
            </MethodDescription>
            <ContactInfo>
              <ContactItem>
                <span>📱</span>
                <span>+92 300 123 4567</span>
              </ContactItem>
              <ContactItem>
                <span>📱</span>
                <span>+92 301 987 6543</span>
              </ContactItem>
            </ContactInfo>
          </BookingMethod>

          <BookingMethod variants={itemVariants}>
            <MethodIcon>📧</MethodIcon>
            <MethodTitle>Book by Email</MethodTitle>
            <MethodDescription>
              Send us an email with your requirements and we'll get back to you 
              within 2 hours with confirmation and details.
            </MethodDescription>
            <ContactInfo>
              <ContactItem>
                <span>📧</span>
                <span>booking@muhammadihostels.com</span>
              </ContactItem>
              <ContactItem>
                <span>📧</span>
                <span>info@muhammadihostels.com</span>
              </ContactItem>
            </ContactInfo>
          </BookingMethod>

          <BookingMethod variants={itemVariants} style={{ gridColumn: '1 / -1' }}>
            <MethodIcon>📝</MethodIcon>
            <MethodTitle>Online Booking Form</MethodTitle>
            <MethodDescription>
              Fill out our booking form below and we'll contact you within 24 hours 
              to confirm your reservation and provide payment details.
            </MethodDescription>
            
            <BookingForm onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <FormGroup>
                  <FormLabel>Full Name *</FormLabel>
                  <FormInput
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Email Address *</FormLabel>
                  <FormInput
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </FormGroup>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <FormGroup>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormInput
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Preferred Hostel *</FormLabel>
                  <FormSelect
                    name="hostel"
                    value={formData.hostel}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a hostel</option>
                    <option value="downtown">Muhammadi Hostel - Downtown</option>
                    <option value="university">Muhammadi Hostel - University</option>
                    <option value="riverside">Muhammadi Hostel - Riverside</option>
                    <option value="business">Muhammadi Hostel - Business</option>
                    <option value="family">Muhammadi Hostel - Family</option>
                    <option value="budget">Muhammadi Hostel - Budget</option>
                  </FormSelect>
                </FormGroup>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <FormGroup>
                  <FormLabel>Room Type *</FormLabel>
                  <FormSelect
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select room type</option>
                    <option value="single">Single Bed Room</option>
                    <option value="double">Double Bed Room</option>
                    <option value="triple">Triple Bed Room</option>
                  </FormSelect>
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Number of Guests *</FormLabel>
                  <FormInput
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    placeholder="Number of guests"
                    min="1"
                    max="6"
                    required
                  />
                </FormGroup>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <FormGroup>
                  <FormLabel>Check-in Date *</FormLabel>
                  <FormInput
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Check-out Date *</FormLabel>
                  <FormInput
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
              </div>
              
              <FormGroup>
                <FormLabel>Additional Message</FormLabel>
                <FormTextarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any special requirements or questions..."
                />
              </FormGroup>
              
              <SubmitButton
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? 'Booking Request Sent!' : 'Submit Booking Request'}
              </SubmitButton>
              
              {isSubmitted && (
                <SuccessMessage
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! We've received your booking request. We'll contact you within 24 hours to confirm your reservation.
                </SuccessMessage>
              )}
            </BookingForm>
          </BookingMethod>
        </BookingGrid>
      </BookingContent>
    </BookingContainer>
  );
};

export default BookingSection;
