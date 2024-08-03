import { StatusBar, Text, View } from "react-native";
import { dataAtualFormatada, horaAtualFormatada } from "@/src/utils/DataAtual";
import { useEffect, useState } from "react";

export default function Header() {
  const [dataAtual, setDataAtual] = useState<String>("");
  const [horaAtual, setHoraAtual] = useState<String>("");
  const [msgHoraAtual, setMsgHoraAtual] = useState<String>("");
 
  console.log(msgHoraAtual);

  useEffect(() => {
    const horaAtual = horaAtualFormatada();
    setDataAtual(horaAtual);

    const [hours, minutes, seconds] = horaAtual.split(":").map(Number);

    if (hours >= 5 && hours < 12) {
      setMsgHoraAtual("Bom dia");
    } else if (hours >= 12 && hours < 18) {
      setMsgHoraAtual("Boa tarde");
    } else if (hours >= 18 && hours < 24) {
      setMsgHoraAtual("Boa noite");
    } else {
      setMsgHoraAtual("Boa madrugada");
    }
  }, []);

  console.log(horaAtual);
  console.log(dataAtual);

  useEffect(() => {
    setDataAtual(dataAtualFormatada());
    setHoraAtual(horaAtualFormatada());
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3E606F" />
      <View className="flex-row justify-between items-center bg-bgSecondy px-7 pt-5 pb-5">
        <View>
          <Text className="text-2xl text-white font-medium mb-2">
            {msgHoraAtual}
          </Text>
          <Text className="text-lg text-white mb-2">{dataAtual}</Text>
        </View>
        <View>
          <Text className="text-white">Olá mundo2</Text>
        </View>
      </View>
    </>
  );
}
