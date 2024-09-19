import ParallaxScrollView from "@/components/ParallaxScrollView";
import { DinnerInput } from "@/components/TextInput";
import { ThemedText } from "@/components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function DinnersList() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#7aadad", dark: "#355050" }}
            headerImage={
                <Ionicons
                    size={200}
                    name="restaurant"
                    style={{
                        color: "teal",
                        position: "absolute",
                    }}
                />
            }
        >
            <ThemedText type="title">Manage Your Dinners Here</ThemedText>
            <ThemedText>
                This is a placeholder for a list of dinners. You can add, edit,
                and delete dinners here.
            </ThemedText>

            <DinnerInput />

            <DinnerInput />
            <DinnerInput />

            <DinnerInput />
            <DinnerInput />

            <DinnerInput />
            <DinnerInput />

            <DinnerInput />
            <DinnerInput />

            <DinnerInput />
            <DinnerInput />

            <DinnerInput />
            <DinnerInput />

            <DinnerInput />
            <DinnerInput />

            <DinnerInput />
            <DinnerInput />

            <DinnerInput />
            <DinnerInput />

            <DinnerInput />

            <View style={styles.buttonCollection}>
                <View style={styles.buttonContainer}>
                    <Button title="Add Dinner" onPress={() => {}} />
                </View>

                <View style={styles.buttonContainer}>
                    <Button title="Save" onPress={() => {}} />
                </View>

                <View style={styles.buttonContainer}>
                    <Button title="Delete" onPress={() => {}} />
                </View>
            </View>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    buttonCollection: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 12,
    },
    buttonContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
});
