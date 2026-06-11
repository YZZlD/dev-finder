import { Callout, Marker } from "react-native-maps";
import { Image, View, Text, StyleSheet } from "react-native";

type GithubUser = {
        id: number;
        username: string;
        name: string;
        latitude: number;
        longitude: number;
    }

type Props = {
    user: GithubUser
    onPress: () => void
};


export default function GithubUserMarker({ user, onPress} : Props)
{
    return (
        <Marker coordinate={{
            latitude: user.latitude,
            longitude: user.longitude
        }}
        anchor={{ x: 0.5, y: 0.5 }}
        >
            <Image
                source={{ uri: `https://github.com/${user.username}.png` }}
                style={styles.avatar}
            />

            <Callout onPress={onPress}>
                <View style={styles.details}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.subtitle}>Tap to view profile</Text>
                </View>
            </Callout>
        </Marker>
    );
}

const styles = StyleSheet.create({
    avatar: {
        width: "100%",
        height: "100%",
    },

    details: {
        width: 160,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
    },

    name: {
        fontSize: 14,
        fontWeight: "600",
        color: "#111",
    },

    subtitle: {
        fontSize: 12,
        color: "#666",
        marginTop: 4,
    }
});
