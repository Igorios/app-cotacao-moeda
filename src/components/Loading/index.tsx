import { View, ActivityIndicator } from "react-native";

export default function Loading() {
  return (
    <View className="flex-1 justify-center flex-row p-5">
      <ActivityIndicator color={"#ffffff"} size="large" />
    </View>
  );
}
