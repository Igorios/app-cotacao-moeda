import { Alert, Button, ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import Constants from "expo-constants";
import Inicial from "../components/Inicial/inicial";
import * as Notifications from 'expo-notifications';

const statusBarHeight = Constants.statusBarHeight;

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});


export default function Index() {

  const handleCallNotification = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    

    if (status !== 'granted') {
      const { status: newStatus } = await Notifications.requestPermissionsAsync();
      if (newStatus !== 'granted') {
        Alert.alert(
          'Permissão necessária',
          'As notificações precisam ser permitidas para que você receba alertas importantes.',
        );
      } else {
        Alert.alert(
          'Permissão concedida',
          'Você receberá notificações do aplicativo.',
        );
      }
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Olá galera do app!",
        body: "Notificação do seu app de cotação!"
      },
      trigger: {
        seconds: 3
      }
    });

  }

  return (
    <ScrollView className="bg-bgMain" style={{ flex: 1 }}>

      <View className="w-full" style={{ marginTop: statusBarHeight }}>
        <Header />
      </View>

      <Inicial />

      <View className="mt-5">
        <Button 
        onPress={handleCallNotification}
          title="Gerar Notificação" 
        />
      </View>

      
    </ScrollView>
  );
}
