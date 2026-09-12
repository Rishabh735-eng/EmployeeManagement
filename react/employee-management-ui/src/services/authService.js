import API from "../api/api";

export const login = async (username, password) => {

    const response = await API.post("/auth/login", {
        username,
        password
    });

    return response.data;
};