const fs = require('fs');
const path = `./.env`;
const vars = `
 REACT_APP_SITE_URL="${process.env.REACT_APP_SITE_URL}"\n
 REACT_APP_SPOTIFY_API_URL="${process.env.REACT_APP_SPOTIFY_API_URL}"\n
 REACT_APP_SPOTIFY_ACCOUNT_API_URL="${process.env.REACT_APP_SPOTIFY_ACCOUNT_API_URL}"\n
 REACT_APP_SPOTIFY_CLIENT_ID="${process.env.REACT_APP_SPOTIFY_CLIENT_ID}"\n
`;
fs.writeFileSync(path, vars);