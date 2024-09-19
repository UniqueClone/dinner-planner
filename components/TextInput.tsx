import { TextInput } from "react-native";

export function DinnerInput() {
    return (
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
        />
    );
}
