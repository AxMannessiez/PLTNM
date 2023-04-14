const localStorageKey = 'pltnm-isExistingGame';

function storeIsExistingGame(isExistingGame) {
  localStorage.setItem(localStorageKey, isExistingGame);
}

function getIsExistingGame() {
  return localStorage.getItem(localStorageKey);
}

function removeIsExistingGame() {
  localStorage.removeItem(localStorageKey);
}

export { getIsExistingGame, removeIsExistingGame, storeIsExistingGame };
