import { Navigate, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import Start from '../pages/Start';
import SpotifyCallback from '../spotifyApi/SpotifyCallback';

function RouterOutlet() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/start/step-:stepIdx" element={<Start />} />
      <Route path="/start" element={<Navigate to="/start/step-1" replace />} />
      <Route
        path="/start/:x"
        element={<Navigate to="/start/step-1" replace />}
      />

      <Route path="/spotify/callback" element={<SpotifyCallback />} />

      <Route path="/signin" element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RouterOutlet;
