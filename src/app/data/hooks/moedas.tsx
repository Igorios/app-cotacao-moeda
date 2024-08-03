import { useCallback, useState } from "react"
import { MoedaInterface } from "../@types/MoedaServise";
import { moedasService } from "../services/moedasService";

export const useMoedas = () => {

    const [moeda, setMoeda] = useState<MoedaInterface[]>([]);

    const getMoedas = useCallback(async(moeda: string) => {

        const { status, data } = await moedasService.getMoeda(moeda);

        setMoeda(data);
        return data;

    }, []);

    return {
        moeda,
        getMoedas
    }
}