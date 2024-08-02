import { StatusBar, Text, View } from "react-native";

export default function Header() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3E606F" />
      <View className="flex-row justify-between items-center bg-bgSecondy px-7 pt-5 pb-5">
        <View>
          <Text className="text-2xl text-white font-medium mb-2">Bom dia!</Text>
          <Text className="text-lg text-white mb-2">02/03/2024</Text>
        </View>
        <View>
          <Text className="text-white">Olá mundo2</Text>
        </View>
      </View>
    </>
  );
}
