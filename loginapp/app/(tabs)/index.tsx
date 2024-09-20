import {
    Text,
    TextInput,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';

const theme = {
    backgroundColor1: '#aaaaaa',
    backgroundColor2: '#000000' + '22',
    textColor1: '#222',
}

export default function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [mode, setMode] = useState(false);

    useEffect(() => {
        if (error) {
            const timeout = setTimeout(() => {
                setError('');
            }, 5 * 1000);

            return () => clearTimeout(timeout);
        }
    }, [error]);

    const handlePress = () => {
        if (mode) {
            if (!email || !password) {
                setError('Please fill in both email and password to login.');
            } else {
                setMessage(`Welcome back, ${email}!`);
            }
        } else {
            if (!name || !email || !password) {
                setError('Please fill in all fields to sign up.');
            } else {
                setMessage(`Hello ${name}! Your account has been created.`);
            }
        }
    };

    const toggleMode = () => {
        setMode((prevMode) => !prevMode);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>
                {mode ? 'Login' : 'Sign Up'}
            </Text>

            {!mode && (
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setName(text)}
                    value={name}
                    placeholder="Enter your name"
                />
            )}

            <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Enter your email"
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder="Enter your password"
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>{mode ? 'Login' : 'Sign Up'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.switchButton} onPress={toggleMode}>
                <Text style={styles.switchButtonText}>
                    {mode ? 'Switch to Sign Up' : 'Switch to Login'}
                </Text>
            </TouchableOpacity>

            {error ? <Text style={styles.error}>{error}</Text> : null}
            {message ? <Text style={styles.message}>{message}</Text> : null}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.backgroundColor1,
        color: theme.textColor1,
    },

    input: {
        height: 'auto',
        width: '80%',
        backgroundColor: theme.backgroundColor2,
        color: theme.textColor1,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#ffffff77',
        fontSize: 16,
        padding: 20,
    },

    button: {
        height: 'auto',
        width: '65%',
        backgroundColor: theme.backgroundColor2,
        color: theme.textColor1,
        fontSize: 16,
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#ffffff77',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: theme.textColor1,
    },

    switchButton: {
        height: 'auto',
        width: '65%',
        backgroundColor: theme.backgroundColor2,
        color: theme.textColor1,
        fontSize: 16,
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#ffffff77',
        justifyContent: 'center',
        alignItems: 'center',
    },

    switchButtonText: {
        color: theme.textColor1,
    },

    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: theme.textColor1,
        marginBottom: '5%',
    },

    message: {
        fontSize: 16,
        color: theme.textColor1,
        textAlign: 'center',
    },

    error: {
        fontSize: 14,
        color: theme.textColor1,
        textAlign: 'center',
    },
});