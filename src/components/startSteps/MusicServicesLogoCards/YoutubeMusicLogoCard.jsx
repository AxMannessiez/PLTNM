import {MusicServiceLogoCard} from "./MusicServiceLogoCard";

export function YoutubeMusicLogoCard(props) {
    return (
        <MusicServiceLogoCard
            name="YouTube Music"
            bg="#fff"
            icon={{
                viewBox: "0 0 50 50",
                color: "#ED1E24",
                d: "M25,-0C38.807,-0 50,11.193 50,25C50,38.808 38.807,50 25,50C11.193,50 0,38.808 0,25C0,11.193 11.193,-0 25,-0ZM25,40.183C33.384,40.183 40.182,33.385 40.182,25C40.182,16.616 33.384,9.817 25,9.817C16.615,9.817 9.817,16.616 9.817,25C9.817,33.385 16.615,40.183 25,40.183ZM25,11.836C32.259,11.836 38.165,17.741 38.165,25C38.165,32.26 32.259,38.165 25,38.165C17.74,38.165 11.835,32.26 11.835,25C11.835,17.741 17.74,11.836 25,11.836ZM20.17,32.387L32.954,25L20.17,17.614L20.17,32.387Z"
            }}
            nameMargin={props.nameMargin}
            w={props.w}
        />
    )
}