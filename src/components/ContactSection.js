import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContactContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  position: relative;
  z-index: 2;
  background: white;
`;

const ContactContent = styled.div`
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
  color: #333;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  background: #f8f9fa;
  border-radius: 15px;
  padding: 2.5rem;
  position: relative;
`;

const ContactTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: #667eea;
  min-width: 40px;
  text-align: center;
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.3rem;
`;

const ContactValue = styled.div`
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
`;

const FormInput = styled.input`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: white;
  color: #333;
  font-size: 1rem;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: white;
  color: #333;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
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
`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('Hi! I would like to get more information about Muhammadi Boys Hostel. Can you please help me?');
    window.open(`https://wa.me/923237222650?text=${message}`, '_blank');
  };

  return (
    <ContactContainer id="contact-section">
      <ContactContent>
        <SectionHeader>
          <SectionTitle>Contact Us</SectionTitle>
          <SectionSubtitle>
            Get in touch with us for any inquiries, bookings, or support.
            We're here to help you find your perfect accommodation near UMT University.
          </SectionSubtitle>
        </SectionHeader>

        <ContactGrid>
          <ContactInfo>
            <ContactTitle>Get In Touch</ContactTitle>

            <ContactItem>
              <ContactIcon>📞</ContactIcon>
              <ContactDetails>
                <ContactLabel>Phone Number</ContactLabel>
                <ContactValue>+92 323 7222650</ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <ContactIcon>💬</ContactIcon>
              <ContactDetails>
                <ContactLabel>WhatsApp</ContactLabel>
                <ContactValue>+92 323 7222650</ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <ContactIcon>📍</ContactIcon>
              <ContactDetails>
                <ContactLabel>Address</ContactLabel>
                <ContactValue>13 A-1, Gulshane-e-mustafa</ContactValue>
                <ContactValue>Near UMT University, Block C2 Phase 1</ContactValue>
                <ContactValue>Johar Town, Lahore, 54000</ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <ContactIcon>👨‍🎓</ContactIcon>
              <ContactDetails>
                <ContactLabel>Boys Hostel</ContactLabel>
                <ContactValue>UMT University (Walking Distance)</ContactValue>
                <ContactValue>Perfect for Male Students</ContactValue>
              </ContactDetails>
            </ContactItem>

            <motion.button
              onClick={handleWhatsAppContact}
              style={{
                background: '#25D366',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '25px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                width: '100%',
                marginTop: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: '0 8px 25px rgba(37, 211, 102, 0.3)',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 15px 35px rgba(37, 211, 102, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              💬 Chat on WhatsApp
            </motion.button>
          </ContactInfo>

          <ContactInfo>
            <ContactTitle>Send Us a Message</ContactTitle>

            <ContactForm onSubmit={handleSubmit}>
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
                  placeholder="Enter your email address"
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Phone Number</FormLabel>
                <FormInput
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Message *</FormLabel>
                <FormTextarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help you..."
                  required
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
              </SubmitButton>
            </ContactForm>
          </ContactInfo>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactSection;
