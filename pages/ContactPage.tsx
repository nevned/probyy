import React, { useState } from 'react';
import InputField from '../components/InputField';
import '../styles/ContactPage.css';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const imageUrl = `${apiBaseUrl}/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80`;

  const handleSubmit = () => {
    console.log('Form submitted', { name, email, message });
    setName(''); setEmail(''); setMessage('');
  };

  return (
    <div className='contact-container'>
      <h1><b>KONTAKTIRAJTE NAS</b></h1>
      <p className='main-paragraph'>
        Tu smo da vam pomognemo sa svim pitanjima u vezi sa našim kursevima.
      </p>

      <div className='split'>
        <div className='forma'>
          <InputField label='Name' type='text' value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
          <InputField label='Email' type='email' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
          <InputField label='Message' type='text' value={message} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)} />
          <div className='button-container'>
            <button onClick={handleSubmit} className='dugmeKontakt'>Posalji</button>
          </div>
        </div>
        
        <div className='info'>
          <div className='image-side'>
            <img 
              src={imageUrl} 
              alt="IT Kurs Slika" 
              className="gallery-image"
              style={{ width: '100%', borderRadius: '8px', maxHeight: '350px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;