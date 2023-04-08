import { removeCurrentPlaylistData } from './currentPlaylistData';
import { removeRedirectAfterSignIn } from './redirectAfterSignIn';
import { removeTeamId } from './teamId';
import { removeUserName } from './userName';

export default function removeAll() {
  removeCurrentPlaylistData();
  removeRedirectAfterSignIn();
  removeTeamId();
  removeUserName();
}
