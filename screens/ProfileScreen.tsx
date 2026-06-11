import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen( {route} : Props)
{
    //Grab the username from the route parameters to display the github profile in webview wrapper.
    const { username } = route.params;

    return (
        <WebView
            source={{ uri: `https://github.com/${username}` }}
            style={{ flex: 1}}
        >
        </WebView>
    );
}
