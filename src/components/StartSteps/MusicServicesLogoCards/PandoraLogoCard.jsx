/* eslint-disable react/destructuring-assignment, react/prop-types */

import MusicServiceLogoCard from './MusicServiceLogoCard';
import { ReactComponent as PandoraIcon } from './svgs/pandoraIcon.svg';

export default function PandoraLogoCard(props) {
  return (
    <MusicServiceLogoCard
      name="Pandora"
      bg="#fff"
      nameMargin={props.nameMargin}
      maxW={props.maxW}
      svg={<PandoraIcon />}
      link={props.link}
    />
  );
}
