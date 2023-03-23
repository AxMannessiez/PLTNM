import { removeCurrentPlaylistData } from './currentPlaylistData';
import { removeRedirectAfterSignIn } from './redirectAfterSignIn';
import { removeTeamId } from './teamId';
import { removeUserName } from './userName';

export function removeAll() {
  removeCurrentPlaylistData();
  removeRedirectAfterSignIn();
  removeTeamId();
  removeUserName();
}
