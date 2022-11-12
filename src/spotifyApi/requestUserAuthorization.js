import axiosConfigSpotifyAccount from "../config/axiosConfigSpotifyAccount";
import { ENDPOINTS } from "../constants/endpoints";

function requestUserAuthorization(props){
    (
        axiosConfigSpotifyAccount.get(ENDPOINTS.spotify.authorize, props)
    );
}

//import {useQuery} from "react-query";
//import requestUserAuthorization from "../spotifyApi/requestUserAuthorization";
//const {data, isLoading} = useQuery("spotifyApi-userAuthorization", requestUserAuthorization(

export default requestUserAuthorization;