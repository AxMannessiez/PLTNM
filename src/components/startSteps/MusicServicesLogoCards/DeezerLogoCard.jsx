import {MusicServiceLogoCard} from "./MusicServiceLogoCard";
import {ReactComponent as DeezerIcon} from './svgs/deezerIcon.svg';

export function DeezerLogoCard(props) {
    return (
        <MusicServiceLogoCard
            name="Deezer"
            bg="#111117"
            nameMargin={props.nameMargin}
            maxW={props.maxW}
            svg={<DeezerIcon/>}
            link={props.link}
        />
    )
}