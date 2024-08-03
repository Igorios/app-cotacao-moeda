import axios from "axios";

export const Api = axios.create({
    baseURL: "https://economia.awesomeapi.com.br/json/last/",
    headers: {
        'Content-Type': 'application/json'
    }
});