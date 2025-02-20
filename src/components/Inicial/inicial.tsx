import React from "react";
import { useEffect, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { formataMoeda } from "@/src/utils/FormataDinheiro";
import { useMoedas } from "@/src/data/hooks/moedas";
import DetalheMoeda from "../DetalheMoeda";
import Loading from "../Loading";
import Feather from "@expo/vector-icons/Feather";
import { Picker } from "@react-native-picker/picker";
import { Entypo } from '@expo/vector-icons';

export default function Inicial() {
  const { moeda, getMoedas } = useMoedas();

  const [loading, setLoading] = useState<boolean>(true);
  const [formattedValue, setFormattedValue] = useState("1,00"); // valor formatado
  const [numericValue, setNumericValue] = useState(1); // valor numérico real

  const [selectMoeda, setSelectMoeada] = useState("USD");
  
  const dados: any = moeda ? moeda[Object.keys(moeda)[0]] : 0;
  
  useEffect(() => {
    const fetchData = async () => {
      await getMoedas(selectMoeda);
      setLoading(false);
    };
    
    fetchData();
  }, [selectMoeda]);


  const calculoMoeda = (numericValue * (dados?.bid || 0));
  
  const formatCurrency = (value: string) => {
    if (!value) return "0,00";

    const cleanedValue = value.replace(/\D/g, "");

    const numericAmount = parseFloat(cleanedValue) / 100;

    return numericAmount.toLocaleString("pt-BR", {
      style: "currency",
      currency: dados.code,
    });
  };

  const handleChange = (text: string) => {

    const cleanedText = text.replace(/\D/g, "");

    if (cleanedText === "") {
      setFormattedValue("");
      setNumericValue(0);
      return;
    }

    const numericAmount = parseFloat(cleanedText) / 100;

    setFormattedValue(formatCurrency(cleanedText));
    setNumericValue(numericAmount);
  };


  const handleExibirAtualizacao = () => {
    Alert.alert(`Atualizado em: \n${dados?.create_date}`);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <View className="bg-bgSecondy mt-8 mx-2 rounded-md">
            <View className="flex-row justify-between items-center">
              <Text className="text-start text-white pl-5 pt-4 text-lg">
                {dados.name}
              </Text>

              <TouchableOpacity onPress={handleExibirAtualizacao}>
                <Text className="text-white pr-7 pt-5 text-xl">
                  <Feather name="info" size={24} color="#fff" />
                </Text>
              </TouchableOpacity>
            </View>
            <View className="w-11/12 border-b border-white pt-4 mx-auto text-center" />
            <View className="my-24">
              <Text className="p-5 text-white text-center text-5xl font-semibold">
                {formataMoeda(calculoMoeda.toString())}
              </Text>
            </View>
          </View>

          <View className="flex flex-row">

            <View  className="bg-bgGreenMain text-sm w-[190] flex justify-center rounded-md mx-2 mt-4">
              <Picker
                selectedValue={selectMoeda}
                onValueChange={(itemValue) => setSelectMoeada(itemValue)}
              >
                <Picker.Item label="Outras moedas" value="usd" />
                <Picker.Item label="Dólar" value="usd" />
                <Picker.Item label="Euro" value="EUR" />
                <Picker.Item label="Yuan Chinês" value="CNY" />
                <Picker.Item label="Boliviano" value="BOB" />
                <Picker.Item label="Peso Argentino" value="ARS" />
                <Picker.Item label="Peso Uruguaio" value="UYU" />
                <Picker.Item label="Peso Chileno" value="CLP" />
                <Picker.Item label="Peso Mexicano" value="MXN" />
                <Picker.Item label="Peso Colombiano" value="COP" />
                <Picker.Item label="Sol do Peru" value="PEN" />
                <Picker.Item label="Bitcoin" value="BTC" />
                <Picker.Item label="Ethereum" value="ETH" />
                <Picker.Item label="Coroa Dinamarquesa" value="DKK" />
                <Picker.Item label="Coroa Sueca" value="SEK" />
              </Picker> 
            </View>


            <View className="">
              
              <View className="pl-2 pt-5 flex flex-row items-center">
                  
                  <Entypo name="calculator" size={30} color="white" />                  
                  
                  <TextInput
                    className="text-white pl-3 text-2xl"
                    placeholderTextColor="#FFFFFF"
                    keyboardType="numeric"
                    value={formattedValue}
                    onChangeText={handleChange}
                  />
              
              </View>
            </View>

          </View>
          
          <DetalheMoeda dadosMoeda={dados} />
        </>
      )}
    </>
  );
}
