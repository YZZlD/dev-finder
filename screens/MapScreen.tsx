import MapView from "react-native-maps";
import GithubUserMarker from "../components/GithubUserMarker";
import users from "../data/users.json";

export default function MapScreen()
{
    return (
        <MapView style={{ flex: 1}} initialRegion={{
            latitude: 37.7879,
            longitude: 122.4074,
            latitudeDelta: 0.10,
            longitudeDelta: 0.10
        }}>
            {users.map(user => {
                return (
                    <GithubUserMarker
                        key={user.id}
                        user={user}
                    />
                )
            })};
        </MapView>
    );
}
