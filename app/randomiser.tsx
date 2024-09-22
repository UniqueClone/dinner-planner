import { PlannedDinners } from "@/components/PlannedDinners";
import { Colors } from "@/constants/Colors";
import { useDinnersContext } from "@/context/DinnersContext";
import { useState } from "react";
import {
    View,
    Button,
    useColorScheme,
    ScrollView,
    StatusBar,
    SafeAreaView,
} from "react-native";

export default function Randomiser() {
    const colorScheme = useColorScheme();

    const { dinners } = useDinnersContext();

    const [randomDinners, setRandomDinners] = useState<string[]>([]);

    return (
        <View
            style={{
                paddingTop: StatusBar.currentHeight,
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                    colorScheme === "light"
                        ? Colors.light.background
                        : Colors.dark.background,
            }}
        >
            <SafeAreaView>
                <ScrollView scrollIndicatorInsets={{ right: 1 }}>
                    <Button
                        title="Randomise"
                        onPress={() => {
                            setRandomDinners(randomiseDinners(dinners));
                        }}
                    />

                    <View
                        style={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 12,
                        }}
                    >
                        <PlannedDinners {...randomDinners} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const randomiseDinners = (dinners: string[]): string[] => {
    const randomNumbers: string[] = [];

    for (let i = 0; i < 7; i++) {
        let randomNumber = Math.floor(Math.random() * dinners.length);

        while (
            dinners[randomNumber] === "" ||
            (dinners.length >= 7 &&
                randomNumbers.includes(dinners[randomNumber]))
        ) {
            randomNumber = Math.floor(Math.random() * dinners.length);
        }

        randomNumbers.push(dinners[randomNumber]);
    }

    return randomNumbers;
};
