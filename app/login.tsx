import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    ScrollView, 
    Platform,
    Keyboard,
    TouchableWithoutFeedback 
} from 'react-native';
import { useRouter } from 'expo-router';
import HeaderField from '../components/HeaderField';
import InputField from '../components/InputField';
import AuthButton from '@/components/AuthButton';
import HeaderLogin from '@/components/HeaderLogin';

const LoginScreen: React.FC = () => {
    const router = useRouter();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.headerBackground}></View>
                    <HeaderLogin />
                    <ScrollView 
                        style={styles.content}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                    >
                        <HeaderField />
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
                        <TouchableOpacity>
                            <Text style={styles.link}>Lupa Kata Sandi?</Text>
                        </TouchableOpacity>
                        <AuthButton
                            title="Masuk"
                            onPress={() => {
                                console.log('Login:', { username, password });
                                router.push('/(tabs)');
                            }}
                        />
                        <TouchableOpacity onPress={() => router.push('/register')}>
                            <Text style={styles.registerLink}>
                                Tidak memiliki akun? <Text style={styles.registerText}>Daftar!</Text>
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

export const screenOptions = {
    headerShown: true,
    gestureEnabled: false,
    headerLeft: () => null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0088FF'
    },
    headerBackground: {
        height: '35%',
        backgroundColor: '#0088FF',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20
    },
    link: {
        color: '#0088FF',
        textAlign: 'right',
        marginBottom: 15
    },
    registerLink: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20 // Tambahkan margin bottom untuk spacing
    },
    registerText: {
        color: '#0088FF',
        fontWeight: 'bold'
    },
});
