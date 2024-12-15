import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import InputField from '@/components/InputField';
import AuthButton from '@/components/AuthButton';
import { Link, useRouter } from 'expo-router';

export default function RegisterScreen() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Isi data diri untuk melanjutkan proses {'\n'}Registrasi!
            </Text>
            <InputField
                icon="edit"
                placeholder="Nama Lengkap"
                value={username}
                onChangeText={setUsername}
            />
            <InputField
                icon="user"
                placeholder="Nama Pengguna"
                value={username}
                onChangeText={setUsername}
            />
            <InputField
                icon="lock"
                placeholder="Kata Sandi"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <InputField
                icon="lock"
                placeholder="Masukan Ulang Kata Sandi"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <AuthButton
                title="Lanjut"
                onPress={() => {
                    console.log('Login:', { username, password });
                    router.push('/camera-register');
                }}
            />
            <TouchableOpacity onPress={() => router.push('/login')}>
                <Text style={styles.loginLink}>
                    Tidak memiliki akun? <Text style={styles.loginText}>Login!</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 16,
        marginBottom: 60,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
        height: 50,
    },
    input: {
        flex: 1,
        marginLeft: 10,
    },
    button: {
        backgroundColor: '#2196F3',
        borderRadius: 8,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    loginLink: {
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 20 // Tambahkan margin bottom untuk spacing
    },
    loginText: {
        color: '#0088FF',
        fontWeight: 'bold'
    },
});
