import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Tabs } from "expo-router";

export default function RootLayout() {
    const colorScheme = useColorScheme();
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "home" : "home-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="dinners"
                options={{
                    title: "Dinners",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "restaurant" : "restaurant-outline"}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
