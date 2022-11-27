import {MusicServiceLogoCard} from "./MusicServiceLogoCard";

export function SoundcloudLogoCard(props) {
    return (
        <MusicServiceLogoCard
            name="SoundCloud"
            bg="#FF6200"
            icon={{
                viewBox: "0 0 50 22",
                color: "#fff",
                d: "M0.308,13.077C0.308,12.923 0.462,12.923 0.462,12.923C0.462,12.923 0.615,12.923 0.615,13.077L1.077,15.846L0.615,18.615C0.615,18.615 0.615,18.769 0.462,18.769C0.462,18.769 0.308,18.769 0.308,18.615L0,15.846L0.308,13.077ZM2.154,11.385L2.308,11.231C2.308,11.231 2.462,11.231 2.462,11.385L3.077,15.846L2.462,20.308C2.462,20.308 2.462,20.462 2.308,20.462C2.308,20.462 2.154,20.462 2.154,20.308L1.692,15.846L2.154,11.385ZM8,10.769C8,10.615 8.154,10.462 8.462,10.462C8.615,10.462 8.769,10.615 8.769,10.769L9.231,15.846L8.615,21.231C8.615,21.385 8.462,21.538 8.308,21.538C8.154,21.538 8,21.385 8,21.231L7.692,15.846L8,10.769ZM4.154,10.462C4.154,10.308 4.308,10.308 4.308,10.154C4.462,10.154 4.615,10.308 4.615,10.462L5.077,15.846L4.615,20.923C4.615,21.077 4.462,21.231 4.462,21.231C4.308,21.231 4.154,21.077 4.154,20.923L3.692,15.846L4.154,10.462ZM6,10.308C6.154,10.154 6.154,10 6.308,10C6.462,10 6.615,10.154 6.615,10.308L7.077,15.846L6.615,21.077C6.615,21.231 6.462,21.385 6.308,21.385C6.154,21.385 6,21.231 6,21.077L5.538,15.846L6,10.308ZM10,7.538C10,7.385 10.154,7.231 10.462,7.231C10.615,7.231 10.769,7.385 10.769,7.538L11.231,15.846L10.769,21.231C10.769,21.385 10.615,21.538 10.308,21.538C10.154,21.538 10,21.385 10,21.231L9.538,15.846L10,7.538ZM12,5.692C12,5.385 12.154,5.231 12.462,5.231C12.769,5.231 12.923,5.385 12.923,5.692L13.385,15.846L12.923,21.231C12.923,21.538 12.615,21.692 12.462,21.692C12.154,21.692 12,21.538 12,21.231L11.692,15.846L12,5.692ZM20.154,5.231C20.154,4.769 20.308,4.615 20.769,4.462C21.077,4.462 21.385,4.769 21.385,5.077L21.692,15.846L21.385,20.923C21.385,21.231 21.077,21.538 20.769,21.538C20.462,21.538 20.154,21.231 20.154,20.923L19.846,15.846L20.154,5.231ZM14,4.769C14,4.615 14.154,4.308 14.462,4.308C14.769,4.308 14.923,4.462 14.923,4.769L15.231,15.846L14.923,21.077C14.923,21.385 14.769,21.538 14.462,21.538C14.154,21.538 14,21.385 14,21.077L13.692,15.846L14,4.769ZM18,4.769C18,4.462 18.308,4.154 18.615,4.154C18.923,4.154 19.231,4.462 19.231,4.769L19.538,15.846L19.231,21.077C19.231,21.385 18.923,21.692 18.615,21.692C18.308,21.692 18,21.385 18,21.077L17.692,15.846L18,4.769ZM16,4.462C16,4.154 16.308,4 16.462,4C16.615,4 16.923,4.154 16.923,4.462L17.231,15.846L16.923,21.077C16.923,21.385 16.769,21.538 16.462,21.538C16.154,21.538 16,21.385 16,21.077L15.692,15.846L16,4.462ZM22.154,3.077C22.154,2.769 22.462,2.462 22.769,2.462C23.077,2.462 23.385,2.769 23.385,3.077L23.692,15.846L23.385,20.923C23.385,21.231 23.077,21.538 22.769,21.538C22.462,21.538 22.154,21.231 22.154,20.923L21.846,15.846L22.154,3.077ZM24.308,2C24.308,1.692 24.462,1.385 24.769,1.385L24.923,1.385C25.231,1.385 25.538,1.692 25.538,2L25.846,15.846L25.538,20.923C25.538,21.231 25.231,21.538 24.923,21.538C24.615,21.538 24.308,21.231 24.308,20.923L24,15.846L24.308,2ZM26.769,0.615C27.846,0.308 28.923,0 30,0L30.769,0C36.462,0 41.077,4.308 41.538,9.846C42.154,9.538 43.077,9.385 43.846,9.385C47.231,9.385 50,12.154 50,15.538C50,18.923 47.231,21.692 43.846,21.692L26.769,21.692C26.462,21.538 26.154,21.231 26.154,20.923L26.154,1.385C26.154,0.923 26.308,0.769 26.769,0.615Z",
                maxW: "44%"
            }}
            nameMargin={props.nameMargin}
            w={props.w}
            link={props.link}
        />
    )
}