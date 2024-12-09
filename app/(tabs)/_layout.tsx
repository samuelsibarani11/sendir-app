import { Tabs } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#118EEA',
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerShadowVisible: false,
                headerTintColor: '#000',
                tabBarStyle: {
                    backgroundColor: '#fff',
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Beranda',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="schedule"
                options={{
                    title: 'Jadwal',
                    tabBarIcon: ({ color, focused }) => (
                        <FontAwesome5 name={focused ? 'history' : 'history'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: 'Riwayat',
                    tabBarIcon: ({ color, focused }) => (
                        <FontAwesome5 name={focused ? 'history' : 'history'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Keluar',
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialIcons name={focused ? 'logout' : 'logout'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}
