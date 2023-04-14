import { useEffect, useState } from 'react';

import SavingPlaylistSpinner from './Share/SavingPlaylistSpinner';
import StartStepsHeader from './StartStepsHeader';
import { Game, Playlist, Team } from '../../database';
import { getGameId, getTeamId, getUserId, removeAll } from '../../localStorage';
import { SpotifyApi } from '../../spotifyApi';

const addPlayerAndGetGame = async userId => {
  const [team, game] = await Promise.all([
    Team.getTeam(getTeamId()),
    Game.getGame(getGameId()),
  ]);

  await team.addPlayer(userId);
  return game;
};

export default function End() {
  const [savingPlaylist, setSavingPlaylist] = useState(true);

  useEffect(() => {
    const userId = getUserId();
    addPlayerAndGetGame(userId).then(game => {
      new Playlist(
        userId,
        SpotifyApi.getCurrentPlaylistDataJsonExport(),
        game.id
      )
        .save()
        .then(() => {
          setSavingPlaylist(false);
          removeAll();
        });
    });
  }, []);

  return savingPlaylist ? (
    <SavingPlaylistSpinner />
  ) : (
    <StartStepsHeader
      title="We saved your playlist!"
      subtitle="It has been added to your friend's game."
      description="The only thing left to do is wait for the others!"
    />
  );
}
