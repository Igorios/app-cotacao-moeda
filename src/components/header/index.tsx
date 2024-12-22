import React from "react";
import { StatusBar, Text, View } from "react-native";
import { dataAtualFormatada, horaAtualFormatada } from "@/src/utils/DataAtual";
import { useEffect, useState } from "react";
import { Entypo } from '@expo/vector-icons';


export default function Header() {
  
  const [dataAtual, setDataAtual] = useState<String>("");
  const [msgHoraAtual, setMsgHoraAtual] = useState<String>("");
  const [colorHex, setColorHex] = useState<String>("");
 
  useEffect(() => {
    const horaAtual = horaAtualFormatada();
    setDataAtual(horaAtual);

    const [hours, minutes, seconds] = horaAtual.split(":").map(Number);

    if (hours >= 5 && hours < 12) {
      setMsgHoraAtual("Bom dia");
      setColorHex("#ffc800")
    } else if (hours >= 12 && hours < 18) {
      setMsgHoraAtual("Boa tarde");
      setColorHex("#da924d");
    } else if (hours >= 18 && hours < 24) {
      setMsgHoraAtual("Boa noite");
      setColorHex("#1414d6");
    } else {
      setMsgHoraAtual("Boa madrugada");
      setColorHex("#03035c");
    }
  }, []);

  useEffect(() => {
    setDataAtual(dataAtualFormatada());
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#193441" />
      <View className="flex-row justify-between items-center bg-bgSecondy px-7 pt-5 pb-5">
        <View>
          <Text className="text-2xl text-white font-medium mb-2">
            Olá, {msgHoraAtual}!
          </Text>
          <Text className="text-lg text-white mb-2">{dataAtual}</Text>
        </View>
        <View>
          <Text className="text-white"><Entypo name="light-up" size={28} color={colorHex} /></Text>
        </View>
      </View>
    </>
  );
}
