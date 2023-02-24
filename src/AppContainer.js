import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const AppContainer = () => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  return (
    <div>
      <BrowserRouter>
        <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
          <LoginButton />
          <LogoutButton />
        </Auth0Provider>
      </BrowserRouter>
    </div>
  );
};

export default AppContainer;
