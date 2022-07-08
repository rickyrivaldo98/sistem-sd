export const getFullName = () => {
    const userStr = sessionStorage.getItem("fullName");
    if (userStr) return JSON.parse(userStr);
    else return null;
};

// return the token from the session storage
export const getToken = () => {
    return sessionStorage.getItem("token") || null;
};

export const getId = () => {
    return sessionStorage.getItem("id") || null;
};

export const getLevel = () => {
    return sessionStorage.getItem("level") || null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
};

// set the token and user from the session storage
export const setUserSession = (token, id, level) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("level", level);

};