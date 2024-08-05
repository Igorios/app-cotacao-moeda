import { useEffect } from "react";
import { Text, View } from "react-native";
import { formataMoeda } from "@/src/utils/FormataDinheiro";
import { MoedaInterface } from "@/src/app/data/@types/MoedaInterface";

export default function DetalheMoeda({ dadosMoeda }: MoedaInterface) {

    useEffect(() => {
        
      }, [dadosMoeda]);

  return (
    <>
      <View className="bg-bgSecondy mt-8 mx-2 rounded-md">
        <Text className="p-5 text-white font-bold text-start text-2xl">
          Detalhes da moeda:
        </Text>

        <View className="w-11/12 border-b border-white mx-auto text-center" />

        <View className="mt-4 p-5 flex-row justify-between">

          <View className="">
            <Text className="text-white text-lg mb-1">Compra: {formataMoeda(dadosMoeda?.bid)}</Text>
            <Text className="text-white text-lg mb-1">Venda: {formataMoeda(dadosMoeda?.ask)}</Text>
            <Text className="text-white text-lg mb-1">Variação: {dadosMoeda?.varBid}</Text>
          </View>
          <View className="">
            <Text className="text-white text-lg mb-1">Variação (%): {dadosMoeda?.pctChange}</Text>
            <Text className="text-white text-lg mb-1">Máximo: {formataMoeda(dadosMoeda?.high)}</Text>
            <Text className="text-white text-lg mb-1">Mínimo: {formataMoeda(dadosMoeda?.low)}</Text>
          </View>

        </View>
       
      </View>
    </>
  );
}
