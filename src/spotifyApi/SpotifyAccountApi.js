import env from 'react-dotenv';
import axios from 'axios';
import pkceChallenge from 'pkce-challenge';
import qs from 'qs';
import { v4 as uuid } from 'uuid';

import endpoints from './endpoints';

// TODO Refresh Token

export default class SpotifyAccountApi {
  static #baseUrl = 'https://accounts.spotify.com';

  static #endpoints = endpoints.account;

  static #clientId = env.REACT_APP_SPOTIFY_CLIENT_ID;

  static #redirectUri = `${env.REACT_APP_SITE_URL}/spotify/callback`;

  static #scope = 'playlist-read-private playlist-read-collaborative';

  static #codeChallengeMethod = 'S256';

  static #localStorageKeys = {
    state: 'spotify_auth_state',
    codeVerifier: 'spotify_code_verifier',
    accessToken: 'spotify_access_token',
    accessTokenExpiresIn: 'spotify_access_token_expires_in',
    accessTokenRefresh: 'spotify_access_token_refresh',
  };

  static getUserAuthentificationUrl() {
    // Generate PKCE and State and store them
    const { code_verifier: codeVerifier, code_challenge: codeChallenge } =
      pkceChallenge();
    const state = uuid();
    localStorage.setItem(this.#localStorageKeys.codeVerifier, codeVerifier);
    localStorage.setItem(this.#localStorageKeys.state, state);

    // Build and return the API URL
    return `${this.#baseUrl + this.#endpoints.authorize}?${qs.stringify({
      client_id: this.#clientId,
      response_type: 'code',
      redirect_uri: this.#redirectUri,
      state,
      scope: this.#scope,
      code_challenge_method: this.#codeChallengeMethod,
      code_challenge: codeChallenge,
    })}`;
  }

  static async generateToken(state, code) {
    // Check state parameter equals previous one
    const authState = localStorage.getItem(this.#localStorageKeys.state);
    localStorage.removeItem(this.#localStorageKeys.state);
    if (state !== authState) {
      return { error: 'State mismatch.' };
    }

    // POST request to get token from Spotify's API
    try {
      const response = await axios.post(
        this.#baseUrl + this.#endpoints.token,
        qs.stringify({
          grant_type: 'authorization_code',
          code,
          redirect_uri: this.#redirectUri,
          client_id: this.#clientId,
          code_verifier: localStorage.getItem(
            this.#localStorageKeys.codeVerifier
          ),
        }),
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
          },
        }
      );
      return response.data;
    } catch (err) {
      return { error: 'Spotify API error.' };
    }
  }

  static storeToken(accessToken, expiresIn, refreshToken) {
    localStorage.setItem(this.#localStorageKeys.accessToken, accessToken);
    localStorage.setItem(
      this.#localStorageKeys.accessTokenExpiresIn,
      Math.floor(Date.now() / 1000) + expiresIn
    );
    localStorage.setItem(
      this.#localStorageKeys.accessTokenRefresh,
      refreshToken
    );
  }

  static getToken() {
    return {
      accessToken: localStorage.getItem(this.#localStorageKeys.accessToken),
      expiresIn: localStorage.getItem(
        this.#localStorageKeys.accessTokenExpiresIn
      ),
      refreshToken: localStorage.getItem(
        this.#localStorageKeys.accessTokenRefresh
      ),
    };
  }
}
