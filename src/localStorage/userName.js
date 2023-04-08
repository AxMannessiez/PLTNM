const localStorageKey = 'user_name';

function storeUserName(name) {
  localStorage.setItem(localStorageKey, name);
}

function getUserName() {
  return localStorage.getItem(localStorageKey);
}

function removeUserName() {
  localStorage.removeItem(localStorageKey);
}

export { getUserName, removeUserName, storeUserName };
