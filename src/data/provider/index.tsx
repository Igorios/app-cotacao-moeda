import axios from "axios";

export const Api = axios.create({
    baseURL: "https://economia.awesomeapi.com.br/json/",
    headers: {
        'Content-Type': 'application/json'
    }
});