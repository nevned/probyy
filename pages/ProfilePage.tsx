import React from 'react';
import '../styles/LoginPage.css';


// Define props interface
interface ProfilePageProps {
  username: string; // Assuming username is of type string
}

// ProfilePage component
const ProfilePage: React.FC<ProfilePageProps> = ({ username }) => {
  return (
    <div className='login'>
      <h2>Welcome, {username}!</h2>
      {/* Additional profile information or components */}
    </div>
  );
};

export default ProfilePage;