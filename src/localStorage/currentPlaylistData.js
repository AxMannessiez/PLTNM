const localStorageKey = 'currentPlaylistData';

function storeCurrentPlaylistData(currentPlaylistData) {
  localStorage.setItem(localStorageKey, currentPlaylistData);
}

function getCurrentPlaylistData() {
  return localStorage.getItem(localStorageKey);
}

function removeCurrentPlaylistData() {
  localStorage.removeItem(localStorageKey);
}

export {
  getCurrentPlaylistData,
  removeCurrentPlaylistData,
  storeCurrentPlaylistData,
};
