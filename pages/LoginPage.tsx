import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginFormClass } from '../models/LoginForm';

import '../styles/LoginPage.css';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    var forma = new LoginFormClass(username, password);
    const poruka = forma.login();
    alert(poruka);

    if (poruka == 'Uspešno ste se ulogovali!') {
      navigate('/');
    }
  };

  return (
    <div className='login'>
      <h2>Dobrodošli!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Korisičko ime'
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Lozinka'
        />
        <button type='submit'>Uloguj se</button>
      </form>
    </div>
  );
};

export default LoginPage;
