import ParallaxScrollView from "@/components/ParallaxScrollView";
import { DinnerInput } from "@/components/TextInput";
import { ThemedText } from "@/components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

export default function DinnersList() {
    const [dinnerList, setDinnerList] = useState<string[]>([]);

    const addDinner = () => {
        setDinnerList([...dinnerList, ""]);
    };

    // Create a list of DinnerInput components, one for each dinner in the list
    const dinners = dinnerList.map((dinner, index) => (
        <DinnerInput
            key={index}
            dinner={dinner}
            setDinner={(text) => {
                const newDinnerList = [...dinnerList];
                newDinnerList[index] = text;
                setDinnerList(newDinnerList);
            }}
            onRemove={() => {
                const newDinnerList = [...dinnerList];
                newDinnerList.splice(index, 1);
                setDinnerList(newDinnerList);
            }}
        />
    ));

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

            {dinners}

            <View style={styles.buttonCollection}>
                <View style={styles.buttonContainer}>
                    <Button title="Add Dinner" onPress={() => addDinner()} />
                </View>

                <View style={styles.buttonContainer}>
                    <Button title="Save Dinners" onPress={() => {}} />
                </View>

                {/* <View style={styles.buttonContainer}>
                    <Button title="Delete" onPress={() => {}} />
                </View> */}
            </View>
        </ParallaxScrollView>
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
