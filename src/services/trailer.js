import axios from "axios";

const API_KEY = "AIzaSyDVHO4Jj2ypaq4FERstNWsRP59cociXm-o"

export const Trailer = titleTrailer => {
    console.log(titleTrailer);
    return axios.create({
        baseURL:`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${titleTrailer}&type=video&maxResults=1`
    });
};