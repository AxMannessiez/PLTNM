import {MusicServiceLogoCard} from "./MusicServiceLogoCard";
import {ReactComponent as PandoraIcon} from './svgs/pandoraIcon.svg';

export function PandoraLogoCard(props) {
    return (
        <MusicServiceLogoCard
            name="Pandora"
            bg="#fff"
            nameMargin={props.nameMargin}
            w={props.w}
            svg={<PandoraIcon/>}
        />
    )
}