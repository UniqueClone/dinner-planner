import { Colors } from "@/constants/Colors";
import { Switch, Text, useColorScheme, View } from "react-native";

export function PlannedDinners(dinners: string[]) {
    const colorScheme = useColorScheme();

    const weekdays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    const plannedDinners = weekdays.map((weekday, index) => (
        <View
            key={index}
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 5,
            }}
        >
            {/* <Switch
                style={{
                    marginHorizontal: 50,
                }}
            /> */}

            <View
                style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text
                    key={index}
                    style={{
                        fontSize: 22,
                        paddingTop: 20,
                        paddingBottom: 10,
                        color:
                            colorScheme === "light"
                                ? Colors.light.text
                                : Colors.dark.text,
                    }}
                >
                    {weekday}
                </Text>

                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color:
                            colorScheme === "light"
                                ? Colors.light.tint
                                : Colors.dark.tint,
                    }}
                >
                    {dinners[index]}
                </Text>
            </View>
        </View>
    ));

    return (
        <View
            style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: 20,
            }}
        >
            <Text
                style={{
                    fontSize: 24,
                    paddingVertical: 10,
                    color:
                        colorScheme === "light"
                            ? Colors.light.text
                            : Colors.dark.text,
                }}
            >
                Planned Dinners
            </Text>

            {plannedDinners}
        </View>
    );
}
