const localStorageKey = 'team_id';

function storeTeamId(id) {
  localStorage.setItem(localStorageKey, id);
}

function getTeamId() {
  return localStorage.getItem(localStorageKey);
}

function removeTeamId() {
  localStorage.removeItem(localStorageKey);
}

export { storeTeamId, getTeamId, removeTeamId };
