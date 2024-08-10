import { Tabs } from "expo-router";
import { Entypo } from '@expo/vector-icons';
import "../styles/global.css";

export default function RootLayout() {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Painel de controle",
            headerShown:false,
            tabBarStyle: { backgroundColor: '#3E606F' },
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return <Entypo name="home" size={24} color="white" />
              }

              return <Entypo name="home" size={24} color="#91AA9D" />
            },
            tabBarActiveTintColor: 'white', 

          }}
        />
        <Tabs.Screen
          name="screens/dashboard/index"
          options={{
            title: "Configurações",
            headerShown:false,
            tabBarStyle: { backgroundColor: '#3E606F' },
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return <Entypo name="menu" size={24} color="white" />;
              }

              return <Entypo name="menu" size={24} color="#91AA9D" />;
            },
            tabBarActiveTintColor: 'white', 

          }}
        />

      </Tabs>
    </>
  );
}
