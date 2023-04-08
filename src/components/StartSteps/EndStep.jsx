import { Box, Button, Heading } from '@chakra-ui/react';

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
      <Box as="header" textAlign="center">
        <Heading as="h2" fontSize="2xl" fontWeight="bold">
          All done!
        </Heading>
      </Box>
      <Box pt={12}>
        <Button bg="pltnm.primary" onClick={savePlaylistAsCsv}>
          Download as .csv
        </Button>
      </Box>
    </>
  );
}
