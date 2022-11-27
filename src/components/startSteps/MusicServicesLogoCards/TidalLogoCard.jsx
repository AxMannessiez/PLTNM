import {MusicServiceLogoCard} from "./MusicServiceLogoCard";

export function TidalLogoCard(props) {
    return (
        <MusicServiceLogoCard
            name="Tidal"
            bg="linear-gradient(#4B4B50, #000000);"
            icon={{
                viewBox: "0 0 50 34",
                color: "#fff",
                d: "M16.667,8.334L8.333,16.668L0,8.334L8.333,0L16.667,8.334ZM33.333,8.334L41.667,0L50,8.334L41.667,16.668L33.333,8.334ZM25,16.667L33.334,25.001L25,33.335L16.667,25.001L25,16.667ZM16.667,8.334L25,0L33.333,8.334L25,16.667L16.667,8.334Z"
            }}
            nameMargin={props.nameMargin}
            w={props.w}
            link={props.link}
        />
    )
}