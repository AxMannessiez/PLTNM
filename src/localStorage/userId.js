const localStorageKey = 'pltnm-userId';

function storeUserId(id) {
  localStorage.setItem(localStorageKey, id);
}

function getUserId() {
  return localStorage.getItem(localStorageKey);
}

function removeUserId() {
  localStorage.removeItem(localStorageKey);
}

export { getUserId, removeUserId, storeUserId };
