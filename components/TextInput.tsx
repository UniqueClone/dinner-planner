import { Colors } from "@/constants/Colors";
import { useDinnersContext } from "@/context/DinnersContext";
import { Ionicons } from "@expo/vector-icons";
import {
    TextInput,
    View,
    StyleSheet,
    Pressable,
    useColorScheme,
} from "react-native";

export interface DinnerInputProps {
    dinnerIndex: number;
}

export function DinnerInput(props: DinnerInputProps) {
    const colorScheme = useColorScheme();

    const { dinnerIndex } = props;

    const { dinners, dispatch } = useDinnersContext();

    const handleUpdateDinner = (dinner: string) => {
        dispatch({
            type: "update",
            payload: { index: dinnerIndex, dinner },
        });
    };

    const handleDeleteDinner = () => {
        dispatch({
            type: "remove",
            payload: { index: dinnerIndex, dinner: "" },
        });
    };

    return (
        <View style={styles.flexContainer} key={dinnerIndex}>
            <TextInput
                placeholder="Add a dinner"
                placeholderTextColor={
                    colorScheme === "light"
                        ? Colors.light.icon
                        : Colors.dark.icon
                }
                style={{
                    fontSize: 16,
                    height: 60,
                    width: 250,
                    marginBottom: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 5,
                    borderColor:
                        colorScheme === "light"
                            ? Colors.light.text
                            : Colors.dark.text,
                    color:
                        colorScheme === "light"
                            ? Colors.light.text
                            : Colors.dark.text,
                }}
                value={dinners[dinnerIndex]}
                onChangeText={handleUpdateDinner}
            />
            <Pressable onPress={handleDeleteDinner}>
                <Ionicons size={24} name="close" style={styles.icon} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    flexContainer: {
        flexDirection: "row",
    },
    icon: {
        color: "teal",
        paddingLeft: 12,
        paddingTop: 8,
    },
});
