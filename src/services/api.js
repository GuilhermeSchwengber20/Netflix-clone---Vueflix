import axios from "axios";

export const Movies = type => {
    return axios.create({
        baseURL: `http://www.omdbapi.com/?&apikey=340fde73&${type}`
    });
};