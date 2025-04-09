import { Tabs } from "expo-router";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarHideOnKeyboard: false,
                headerShown: false,
                tabBarStyle: { backgroundColor: '#fae7c9' },
                tabBarActiveTintColor: '#6a0dad',
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    ),
                }}
               
            />

            
        </Tabs>
    );
}
