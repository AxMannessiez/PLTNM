/* eslint-disable react/destructuring-assignment, react/prop-types */

import MusicServiceLogoCard from './MusicServiceLogoCard';
import { SpotifyAccountApi } from '../../../spotifyApi';

export default function SpotifyLogoCard(props) {
  const userAuthentificationUrl =
    SpotifyAccountApi.getUserAuthentificationUrl();

  return (
    <MusicServiceLogoCard
      name="Spotify"
      bg="#000"
      icon={{
        viewBox: '0 0 50 50',
        color: '#05DD61',
        d: 'M25,0C38.807,0 50,11.193 50,25C50,38.808 38.807,50 25,50C11.193,50 -0,38.808 -0,25C-0,11.193 11.193,0 25,0ZM39.788,22.163C40.897,22.823 42.333,22.456 42.992,21.345C43.651,20.236 43.286,18.801 42.175,18.141C32.898,12.634 18.218,12.116 9.387,14.797C8.151,15.173 7.454,16.478 7.828,17.714C8.203,18.95 9.509,19.647 10.744,19.272C18.437,16.937 31.73,17.377 39.788,22.163ZM39.525,29.251C40.088,28.336 39.8,27.136 38.883,26.572C31.167,21.83 19.879,20.495 10.799,23.25C9.77,23.564 9.189,24.651 9.5,25.681C9.812,26.71 10.901,27.291 11.932,26.98C19.88,24.567 30.125,25.763 36.843,29.893C37.76,30.456 38.959,30.169 39.525,29.251ZM36.466,36.059C36.915,35.324 36.683,34.364 35.948,33.916C29.359,29.889 21.19,28.952 11.667,31.129C10.827,31.321 10.303,32.157 10.495,32.995C10.687,33.833 11.522,34.359 12.361,34.167C21.063,32.179 28.452,32.989 34.323,36.577C35.057,37.026 36.016,36.795 36.466,36.059Z',
      }}
      nameMargin={props.nameMargin}
      maxW={props.maxW}
      link={userAuthentificationUrl}
    />
  );
}
