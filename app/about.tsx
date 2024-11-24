import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function About() {
    return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Text>This is the about page</Text>
        <Link href="/" replace>Back to Home</Link>
    </View>
    );
}