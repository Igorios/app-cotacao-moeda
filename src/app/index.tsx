import { ScrollView, Text, View } from "react-native";
import Header from "../components/header";
import Constants from "expo-constants";
import Inicial from "../components/Inicial/inicial";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView className="bg-bgMain" style={{ flex: 1 }}>
      <View className="w-full" style={{ marginTop: statusBarHeight }}>
        <Header />
      </View>

      <Inicial />

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
