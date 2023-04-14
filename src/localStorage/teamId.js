const localStorageKey = 'pltnm-teamId';

function storeTeamId(id) {
  localStorage.setItem(localStorageKey, id);
}

function getTeamId() {
  return localStorage.getItem(localStorageKey);
}

function removeTeamId() {
  localStorage.removeItem(localStorageKey);
}

export { getTeamId, removeTeamId, storeTeamId };
