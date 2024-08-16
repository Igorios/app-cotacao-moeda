import { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { formataMoeda } from "@/src/utils/FormataDinheiro";
import { useMoedas } from "@/src/data/hooks/moedas";
import DetalheMoeda from "../DetalheMoeda";
import Loading from "../Loading";
import Feather from '@expo/vector-icons/Feather';

export default function Inicial() {

  const { moeda, getMoedas } = useMoedas();

  const [loading, setLoading] = useState<boolean>(true);

  const dados = moeda ? moeda[Object.keys(moeda)[0]] : 0;

  useEffect(() => {

    const fetchData = async () => { 
      await getMoedas("USD");
      setLoading(false);
    }

    fetchData();
  }, []);

  const handleExibirAtualizacao = () => {
    Alert.alert(`Atualizado em: \n${dados?.create_date}`);
  }

  return (
    <>
    {loading ? (
      <Loading />
    ): (
      <>

        <View className="bg-bgSecondy mt-8 mx-2 rounded-md">
          <View className="flex-row justify-between items-center">
            <Text className="text-start text-white pl-5 pt-4 text-xl">
              Valor do dólar hoje:
            </Text>

            <TouchableOpacity onPress={handleExibirAtualizacao} >
              <Text className="text-white pr-7 pt-5 text-xl">
                  <Feather name="info" size={24} color="#fff" />              
              </Text>
            </TouchableOpacity >

          </View>
          <View className="w-11/12 border-b border-white pt-4 mx-auto text-center" />
          <View className="my-28">
            <Text className="p-5 text-white text-center text-5xl font-semibold">
              {formataMoeda(dados?.bid)}
            </Text>

            {/* <View className="w-2/4 border-b border-white mx-auto text-center" /> */}

          </View>
        </View>

        <DetalheMoeda dadosMoeda={dados} />
      
      </>
    )}

    </>
  );
}
