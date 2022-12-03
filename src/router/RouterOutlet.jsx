import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound"
import Start from "../pages/Start";
import SpotifyCallback from "../spotifyApi/SpotifyCallback";
import SignIn from "../pages/SignIn";

function RouterOutlet() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />

            <Route path="/start/step-:stepIdx" element={<Start/>} />
            <Route path="/start" element={<Navigate to={'/start/step-1'} replace/>} />
            <Route path="/start/:x" element={<Navigate to={'/start/step-1'} replace/>} />

            <Route path="/spotify/callback" element={<SpotifyCallback/>} />

            <Route path="/signin" element={<SignIn/>} />

            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
}

export default RouterOutlet;