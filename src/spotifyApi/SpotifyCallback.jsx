import React from 'react';
import { useNavigate } from 'react-router-dom';

import SpotifyAccountApi from './SpotifyAccountApi';
import useUrlParams from '../helpers/useUrlParams';

// TODO Test error behavior
// TODO Return to Step 2 with a variable giving the music service

function SpotifyCallback() {
  const { error, code, state } = useUrlParams(['error', 'code', 'state']);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (error) {
      navigate('/start/step-2', {
        state: { error: 'Authentification error.' },
      });
    } else {
      SpotifyAccountApi.generateToken(state, code).then(token => {
        if (token.error) {
          navigate('/start/step-2', {
            state: { error: 'Token retrieval error.' },
          });
        } else {
          const {
            access_token: accessToken,
            expires_in: expiresIn,
            refresh_token: refreshToken,
          } = token;
          SpotifyAccountApi.storeToken(accessToken, expiresIn, refreshToken);
          navigate('/start/step-2');
        }
      });
    }
  });
}

export default SpotifyCallback;
