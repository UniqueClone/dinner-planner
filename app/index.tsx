import { Colors } from "@/constants/Colors";
import { Text, TextInput, useColorScheme, View } from "react-native";

export default function Index() {
    const colorScheme = useColorScheme() ?? "light";
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                    colorScheme === "light"
                        ? Colors.light.background
                        : Colors.dark.background,
            }}
        >
            <Text
                style={{
                    color:
                        colorScheme === "light"
                            ? Colors.light.text
                            : Colors.dark.text,
                }}
            >
                Edit app/index.tsx to edit this screen.
            </Text>
            <TextInput
                placeholder="Try typing here"
                placeholderTextColor={
                    colorScheme === "light"
                        ? Colors.light.icon
                        : Colors.dark.icon
                }
                style={{
                    color:
                        colorScheme === "light"
                            ? Colors.light.text
                            : Colors.dark.text,
                    borderColor:
                        colorScheme === "light"
                            ? Colors.light.text
                            : Colors.dark.text,
                    height: 40,
                    width: 200,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 5,
                }}
            />
        </View>
    );
}
