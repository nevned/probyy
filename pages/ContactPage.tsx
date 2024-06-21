import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import '../styles/ContactPage.css';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted', { name, email, message });
  };

  return (
    <div className="contact-container">
    <div>
      <h1>Kontaktirajte nas</h1>
      <p className="main-paragraph">Hvala što ste posetili našu stranicu! 
Tu smo da vam pomognemo sa svim pitanjima i nedoumicama u vezi sa našim kursevima.</p>
      <InputField label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputField label="Message" type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      
      

        <div className="image-sidee">
          <img src="../slike/kontaktslika.png" alt="Slika1" />
        </div>

    </div>
    <div className="button-container"> 
      <Button text="Posalji" onClick={handleSubmit}/>
    </div>
    </div>
  );
};

export default ContactPage;