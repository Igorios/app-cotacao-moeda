import {  ScrollView, View } from "react-native";
import Header from "../components/Header";
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
      
    </ScrollView>
  );
}
