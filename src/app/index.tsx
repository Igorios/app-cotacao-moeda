import { ScrollView, Text, View } from "react-native";
import Header from "../components/header";

import Constants from "expo-constants";
const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView className="bg-bgMain" style={{ flex: 1 }}>
      <View className="w-full" style={{ marginTop: statusBarHeight }}>
        <Header />
      </View>

      <View className="bg-bgSecondy mt-8 mx-2 rounded-md">
        <View>
          <Text className="text-start text-white pl-5 pt-4 text-xl">
            Valor do dolar hoje:
          </Text>
        </View>
        <View className="w-11/12 border-b border-white pt-4 mx-auto text-center" />
        <View className="my-28">
          <Text className="p-5 text-white text-center text-5xl font-semibold">
            5,78 USD
          </Text>
        </View>
      </View>

      <View className="bg-bgSecondy mt-8 mx-2 rounded-md">
        <Text className="p-5 text-white text-center text-2xl">
          Lorem ipsum dolor sit.
        </Text>
        <Text className="p-5 text-white text-center text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          porro cupiditate unde?
        </Text>
      </View>
    </ScrollView>
  );
}
