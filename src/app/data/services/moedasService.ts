import { Api } from "../provider";

const getMoeda = (moeda: string) => Api.get(`/last/${moeda}`); 

export const moedasService = {
    getMoeda
}