const localStorageKey = 'pltnm-redirectAfterSignIn';

function storeRedirectAfterSignIn(path) {
  localStorage.setItem(localStorageKey, path);
}

function getRedirectAfterSignIn() {
  return (
    localStorage.getItem(localStorageKey) ??
    localStorage.getItem(localStorageKey)
  );
}

function removeRedirectAfterSignIn() {
  return localStorage.removeItem(localStorageKey);
}

export {
  getRedirectAfterSignIn,
  removeRedirectAfterSignIn,
  storeRedirectAfterSignIn,
};
