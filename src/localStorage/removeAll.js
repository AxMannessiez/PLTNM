import { removeCurrentPlaylistData } from './currentPlaylistData';
import { removeIsExistingGame } from './isExistingGame';
import { removeRedirectAfterSignIn } from './redirectAfterSignIn';
import { removeTeamId } from './teamId';
import { removeUserName } from './userName';

export default function removeAll() {
  removeCurrentPlaylistData();
  removeRedirectAfterSignIn();
  removeTeamId();
  removeUserName();
  removeIsExistingGame();
}
