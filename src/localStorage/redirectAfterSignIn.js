const localStorageKey = "redirect_after_sign_in";

function storeRedirectAfterSignIn(path) {
    localStorage.setItem(localStorageKey, path);
}

function getRedirectAfterSignIn() {
    return localStorage.getItem(localStorageKey) ?? localStorage.getItem(localStorageKey);
}

function removeRedirectAfterSignIn() {
    return localStorage.removeItem(localStorageKey);
}

export {storeRedirectAfterSignIn, getRedirectAfterSignIn, removeRedirectAfterSignIn};
