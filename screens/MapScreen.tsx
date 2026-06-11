import MapView, { PROVIDER_DEFAULT } from "react-native-maps";
import GithubUserMarker from "../components/GithubUserMarker";
import users from "../data/users.json";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, 'Map'>;

export default function MapScreen( { navigation } : Props)
{
    return (
        <MapView style={{ flex: 1}}
            provider={PROVIDER_DEFAULT}
            initialRegion={{
                latitude: 37.7879,
                longitude: -122.4074,
                latitudeDelta: 0.10,
                longitudeDelta: 0.10
        }}>
            {/* Render all users as map markers in the map view */}
            {users.map(user => {
                return (
                    <GithubUserMarker
                        key={user.id}
                        user={user}
                        onPress={() => {
                            navigation.navigate("Profile", {
                                username: user.username
                            })
                        }}
                    />
                )
            })}
        </MapView>
    );
}
