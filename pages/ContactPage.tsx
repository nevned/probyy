import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted', { name, email, message });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <InputField label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputField label="Message" type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <Button text="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default ContactPage;