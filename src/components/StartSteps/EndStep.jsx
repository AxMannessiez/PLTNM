import { Box, Button } from '@chakra-ui/react';

import StartStepsHeader from './StartStepsHeader';
import SpotifyApi from '../../spotifyApi/SpotifyApi';

export default function EndStep() {
  const savePlaylistAsCsv = () => {
    const data = encodeURI(SpotifyApi.getCurrentPlaylistDataCsvExport());
    const link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', 'My Spotify Top Songs.csv');
    link.click();
  };

  return (
    <>
      <StartStepsHeader title="All done!" />
      <Box pt={12}>
        <Button bg="pltnm.primary" onClick={savePlaylistAsCsv}>
          Download as .csv
        </Button>
      </Box>
    </>
  );
}
