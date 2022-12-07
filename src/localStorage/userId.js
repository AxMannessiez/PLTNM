const localStorageKey = "user_id";

function storeUserId(id) {
    localStorage.setItem(localStorageKey, id);
}

function getUserId() {
    return localStorage.getItem(localStorageKey);
}

function removeUserId() {
    localStorage.removeItem(localStorageKey);
}

export {storeUserId, getUserId, removeUserId};
