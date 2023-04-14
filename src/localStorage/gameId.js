const localStorageKey = 'pltnm-gameId';

function storeGameId(id) {
  localStorage.setItem(localStorageKey, id);
}

function getGameId() {
  return localStorage.getItem(localStorageKey);
}

function removeGameId() {
  localStorage.removeItem(localStorageKey);
}

export { getGameId, removeGameId, storeGameId };
