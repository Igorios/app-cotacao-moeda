import { ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import Constants from "expo-constants";
import Inicial from "../components/Inicial/inicial";
import DetalheMoeda from "../components/DetalheMoeda";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView className="bg-bgMain" style={{ flex: 1 }}>

      <View className="w-full" style={{ marginTop: statusBarHeight }}>
        <Header />
      </View>

      <Inicial />
      
    </ScrollView>
  );
}
