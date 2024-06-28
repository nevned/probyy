import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginFormClass } from '../models/LoginForm';
import ProfilePage from '../pages/ProfilePage';
import '../styles/LoginPage.css';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
    var form = new LoginFormClass(username, password);
    const message = form.login(); 
    alert(message);

    if (message === 'Uspešno ste se ulogovali!') {
      localStorage.setItem('loggedInUser', JSON.stringify({ username }));
      setLoggedIn(true); 
      navigate('/'); 
    }
  };

 
  useEffect(() => {
    const loggedInUserString = localStorage.getItem('loggedInUser');
    if (loggedInUserString) {
      const loggedInUser = JSON.parse(loggedInUserString);
      setUsername(loggedInUser.username);
      setLoggedIn(true);
    }
  }, []); 

  if (loggedIn) {
    return <ProfilePage username={username} />;
  }

 
  return (
    <div className='login'>
      <div className='glavniDivLogin'>
        <div className='levaStrana'>
          <img src='../slike/loginLogo.png' className='loginLogo'/>
        </div>
        <div className='desnaStranaLogin'>
          <p className='prijaviSe'>PRIJAVI SE</p>
          <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Korisničko ime'
          className='inputUsername'
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Lozinka'
          className='inputSifra'
        />
        <button type='submit'>Uloguj se</button>
      </form>
        </div>
      </div>
     

      
    </div>
  );
};

export default LoginPage;