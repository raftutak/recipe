import React from 'react';
import AppContext from '../context';
import ReactJson from 'react-json-view';
import ProfileSection from '../components/organisms/ProfileSection';

<<<<<<< HEAD
const ProfileView = () => (
  <>
    <ProfileSection />
  </>
);
=======
import { useAuth0 } from '../react-auth0-spa';

const ProfileView = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <AppContext.Consumer>
      {context => (
        <>
          <img src={user.picture} alt="Profile" />
          <h5>ProfileView</h5>
          <p>{user.nickname}</p>
          <p>{user.email}</p>
          <code>{JSON.stringify(user, null, 2)}</code>
          <ReactJson src={user} />
          <ReactJson src={user.user_metadata} />
          <p>{user.user_metadata} test</p>
        </>
      )}
    </AppContext.Consumer>
  );
};
>>>>>>> daniel

export default ProfileView;
