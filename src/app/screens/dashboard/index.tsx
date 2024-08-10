import { ScrollView, View, Text, Alert, Button, TouchableOpacity } from "react-native";
import Header from "@/src/components/Header";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

const statusBarHeight = Constants.statusBarHeight;

export default function Dashboard() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });

  const handleCallNotification = async () => {
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== "granted") {
      const { status: newStatus } =
        await Notifications.requestPermissionsAsync();
      if (newStatus !== "granted") {
        Alert.alert(
          "Permissão necessária",
          "As notificações precisam ser permitidas para que você receba alertas importantes."
        );
      } else {
        Alert.alert(
          "Permissão concedida",
          "Você receberá notificações do aplicativo."
        );
      }
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Olá galera do app!",
        body: "Notificação do seu app de cotação!",
      },
      trigger: {
        seconds: 5,
      },
    });
  };

  return (
    <>
      <ScrollView className="bg-bgMain" style={{ flex: 1 }}>
        <View className="w-full" style={{ marginTop: statusBarHeight }}>
          <Header />
        </View>

        <Text className="text-white text-center text-lg mt-16">
          Clique no botão para testar notificações no app
        </Text>

        <View className="mt-5 flex items-center">
            <TouchableOpacity
                className="bg-bgSecondy p-3 rounded-lg w-80 "
                onPress={handleCallNotification}
            >
                <Text className="text-center text-white font-semibold">Gerar Notificação</Text>
            </TouchableOpacity>

        </View>
      </ScrollView>
    </>
  );
}
