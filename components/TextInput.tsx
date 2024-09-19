import { Ionicons } from "@expo/vector-icons";
import { TextInput, View, StyleSheet, Pressable } from "react-native";

export interface DinnerInputProps {
    dinner: string;
    setDinner: (text: string) => void;
    onRemove: () => void;
}

export function DinnerInput(props: DinnerInputProps) {
    const { dinner, setDinner, onRemove } = props;

    return (
        <View style={styles.flexContainer}>
            <TextInput
                placeholder="Add a dinner"
                style={{
                    height: 40,
                    width: 200,
                    marginBottom: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 5,
                }}
                value={dinner}
                onChangeText={setDinner}
            />
            <Pressable onPress={() => onRemove()}>
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
