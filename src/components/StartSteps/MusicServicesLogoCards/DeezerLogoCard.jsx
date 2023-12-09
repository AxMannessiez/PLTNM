/* eslint-disable react/destructuring-assignment, react/prop-types */

import MusicServiceLogoCard from './MusicServiceLogoCard';
import { ReactComponent as DeezerIcon } from './svgs/deezerIcon.svg';

export default function DeezerLogoCard(props) {
  return (
    <MusicServiceLogoCard
      name="Deezer"
      bg="#0f0d13"
      nameMargin={props.nameMargin}
      maxW={props.maxW}
      svg={<DeezerIcon />}
      link={props.link}
    />
  );
}
