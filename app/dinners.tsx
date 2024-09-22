import { useDinnersContext } from "@/context/DinnersContext";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { DinnerInput } from "@/components/TextInput";
import { ThemedText } from "@/components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import {
    Button,
    StyleSheet,
    useColorScheme,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    StatusBar,
} from "react-native";
import { Colors } from "@/constants/Colors";

export default function DinnersList() {
    const colorScheme = useColorScheme();

    const { dinners, dispatch } = useDinnersContext();

    const handleAddDinner = () => {
        dispatch({ type: "add", payload: { index: -1, dinner: "" } });
    };

    // Create a list of DinnerInput components, one for each dinner in the list
    const dinnerList = dinners.map((dinner, index) => (
        <DinnerInput dinnerIndex={index} />
    ));

    return (
        <View
            style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                    colorScheme === "light"
                        ? Colors.light.background
                        : Colors.dark.background,
                paddingTop: (StatusBar.currentHeight ?? 10) + 5,
                paddingHorizontal: 60,
            }}
        >
            <SafeAreaView>
                <ScrollView>
                    <ThemedText
                        type="title"
                        style={{
                            color:
                                colorScheme === "light"
                                    ? Colors.light.text
                                    : Colors.dark.text,
                            textAlign: "center",
                        }}
                    >
                        Manage Your Dinners Here
                    </ThemedText>

                    <Text
                        style={{
                            fontSize: 18,
                            paddingVertical: 40,
                            color:
                                colorScheme === "light"
                                    ? Colors.light.text
                                    : Colors.dark.text,
                        }}
                    >
                        This is a placeholder for a list of dinners. You can
                        add, edit, and delete dinners here.
                    </Text>

                    {dinnerList}

                    <View style={styles.buttonCollection}>
                        <View style={styles.buttonContainer}>
                            <Button
                                title="Add Dinner"
                                onPress={handleAddDinner}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonCollection: {
        flexDirection: "column",
        justifyContent: "space-around",
        marginTop: 12,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 12,
    },
});
