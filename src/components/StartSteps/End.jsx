import { useEffect, useState } from 'react';

import { Center } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import SavingPlaylistSpinner from './Share/SavingPlaylistSpinner';
import StartStepsHeader from './StartStepsHeader';
import PltnmButton from '../base/PltnmButton';
import { Game, Playlist, Team } from '../../database';
import { signOut } from '../../helpers';
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
  const { t } = useTranslation();
  const navigate = useNavigate();

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
    <>
      <StartStepsHeader
        title={t('startSteps.end.Title')}
        subtitle={t('startSteps.end.Subtitle')}
        description={t('startSteps.end.Description')}
      />
      <Center pt={14}>
        <PltnmButton rounded="full" px={6} onClick={() => signOut(navigate)}>
          {t('global.SignOut')}
        </PltnmButton>
      </Center>
    </>
  );
}
