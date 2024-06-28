import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginFormClass } from '../models/LoginForm';
import ProfilePage from '../pages/ProfilePage';
import '../styles/LoginPage.css';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // State to track logged in status
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate login logic with LoginFormClass
    var form = new LoginFormClass(username, password);
    const message = form.login();
    alert(message);

    if (message === 'Uspešno ste se ulogovali!') {
      localStorage.setItem('loggedInUser', JSON.stringify({ username }));
      setLoggedIn(true); // Set loggedIn state to true
      navigate('/'); // Redirect to home or profile page after successful login
    }
  };

  // Check if user is logged in on component mount
  useEffect(() => {
    const loggedInUserString = localStorage.getItem('loggedInUser');
    if (loggedInUserString) {
      const loggedInUser = JSON.parse(loggedInUserString);
      setUsername(loggedInUser.username);
      setLoggedIn(true);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // Render conditionally based on loggedIn state
  if (loggedIn) {
    return <ProfilePage username={username} />;
  }

  // Render login form if not logged in
  return (
    <div className='login'>
      <h2>Dobrodošli!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Korisničko ime'
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