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
  storeCurrentPlaylistData,
  getCurrentPlaylistData,
  removeCurrentPlaylistData,
};
