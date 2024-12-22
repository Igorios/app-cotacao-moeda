import React from "react";
import { ScrollView, View, Text } from "react-native";
import Header from "@/src/components/Header";

export default function Dashboard() {

  return (
    <>
      <ScrollView className="bg-bgMain" style={{ flex: 1 }}>
        <View className="w-full" >
          <Header />
        </View>

        <View className="p-10">
          <Text className="text-white text-center text-2xl mt-10 font-semibold">
            Seu app de cotação!!!
          </Text>
          <Text className="text-white text-center text-2xl mt-10 font-semibold">
            Fique por dentro dos valores das moedas
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
