import { Text, TextInput, View } from "react-native";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Edit app/index.tsx to edit this screen.</Text>
            <TextInput
                placeholder="Try typing here"
                style={{
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
