import React from 'react';
import { useSelector } from 'react-redux';
import CardInfo from '../ui/CardInfo';
import CardPhoto from '../ui/CardPhoto';
import FormEditInfo from '../Dashboard/FormEditInfo';
import './Profile.css';
const Profile = (props) => {
  const user = useSelector((state) => state.auth);
  return (
    <div className='profile-container'>
      <CardPhoto styles={{ maxWidth: '100%', width: '100%' }} {...user} />
      <CardInfo
        styles={{ maxWidth: '100%', width: '100%' }}
        user={user}
        Component={FormEditInfo}
      />
    </div>
  );
};

export default Profile;
