import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet} from 'react-native';
import { RootStackParamList } from '../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

export default function SignupScreen({ navigation }: Props)
{
    const [username, setUsername] = useState('');

    const onSubmit = async () =>  {
        //Check for empty username inputs.
        if(!username.trim()) return;

        //Save input to async storage to persist login information.
        await AsyncStorage.setItem('githubUsername', username);

        navigation.replace('Map');
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Dev Finder</Text>

                <Text style={styles.subtitle}>Enter your GitHub username to join Dev Finder!</Text>

                <TextInput
                    value={username}
                    onChangeText={setUsername}
                    placeholder='GitHub Username'
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: '#0d1117',
        justifyContent: 'center',
        padding: 20,
    },

    card: {
        backgroundColor: '#161b22',
        padding: 24,
        borderRadius: 12,
    },

    title: {
        fontSize: 28,
        fontWeight: '700',
        color: 'white',
        marginBottom: 8,
        textAlign: 'center',
    },

    subtitle: {
        color: '#8b949e',
        textAlign: 'center',
        marginBottom: 24,
    },

    input: {
        backgroundColor: '#0d1117',
        borderWidth: 1,
        borderColor: '#30363d',
        borderRadius: 8,
        padding: 12,
        color: 'white',
        marginBottom: 16,
    },

    button: {
        backgroundColor: '#238636',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },

    buttonText: {
        color: 'white',
        fontWeight: '600',
    },
});
