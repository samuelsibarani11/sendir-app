import React, { useState } from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TabLayout() {
    const router = useRouter();
    const [modalVisible, setModalVisible] = useState(false);

    const handleLogout = () => {
        AsyncStorage.removeItem("userToken").then(() => {
            // Replace navigate with replace
            router.replace('/login');
        }).catch((error) => {
            console.error("Error during logout:", error);
        });
    };
    


    const ExitModal = () => (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity
                        style={styles.closeIcon}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={styles.closeText}>✕</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>Ingin Keluar?</Text>
                    <Text style={styles.message}>
                        Pastikan semua aktivitas Anda sudah selesai, ya.
                        {'\n'}Terima kasih telah menggunakan{' '}
                        <Text style={{ fontWeight: 'bold' }}>SenDir!</Text>
                    </Text>
                    <TouchableOpacity
                        style={styles.exitButton}
                        onPress={() => {
                            console.log('Keluar ditekan');
                            setModalVisible(false);
                            handleLogout();
                        }}
                    >
                        <Text style={styles.exitText}>Keluar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );

    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: '#0088FF',
                    headerShown: false,
                    headerShadowVisible: false,
                    headerTintColor: '#000',
                    tabBarStyle: {
                        backgroundColor: '#fff',
                        height: 100,
                        paddingTop: 5,
                    }
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Beranda',
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={30} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="schedule"
                    options={{
                        title: 'Jadwal',
                        tabBarIcon: ({ color, focused }) => (
                            <FontAwesome name={focused ? 'calendar' : 'calendar-o'} color={color} size={30} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="detection"
                    options={{
                        title: 'Absent',
                        tabBarButton: (props) => {
                            const { onPress, accessibilityState } = props;
                            return (
                                <TouchableOpacity
                                    onPress={onPress}
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: '#0088FF',
                                        width: 60,
                                        height: 60,
                                        borderRadius: 15,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginBottom: 40,
                                        position: 'absolute',
                                        bottom: 0,
                                    }}>
                                        <MaterialIcons name="sensor-occupied" color="white" size={35} />
                                    </View>
                                    <Text style={{
                                        color: accessibilityState?.selected ? '#0088FF' : '#999',
                                        fontSize: 11,
                                        marginTop:52,
                                    }}>
                                        Absent
                                    </Text>
                                </TouchableOpacity>
                            );
                        },
                    }}
                />
                <Tabs.Screen
                    name="history"
                    options={{
                        title: 'Riwayat',
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="history" color={color} size={30} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="about"
                    options={{
                        title: 'Keluar',
                        tabBarIcon: ({ color, focused }) => (
                            <MaterialIcons
                                name="logout"
                                color={focused ? '#FF4D4D' : color}
                                size={30}
                            />
                        ),
                        tabBarButton: (props) => {
                            const { onPress, accessibilityState } = props;
                            return (
                                <TouchableOpacity
                                    onPress={() => setModalVisible(true)}
                                    style={{
                                        flex: 1,
                                        paddingTop: 14,
                                        alignItems: 'center',
                                    }}
                                >
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: accessibilityState?.selected
                                                ? '#FF4D4D'
                                                : 'transparent',
                                            borderRadius: 15,
                                        }}
                                    >
                                        <MaterialIcons
                                            name="logout"
                                            size={25}
                                            color={accessibilityState?.selected ? '#fff' : '#999'}
                                        />
                                    </View>
                                    <Text
                                        style={{
                                            fontSize: 11,
                                            marginTop:13,
                                            color: accessibilityState?.selected ? '#FF4D4D' : '#999',
                                        }}
                                    >
                                        Keluar
                                    </Text>
                                </TouchableOpacity>
                            );
                        },
                    }}
                />

            </Tabs>
            <ExitModal />
        </>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '100%',
        height: '28%',
        backgroundColor: '#fff',
        padding: 20,
        elevation: 5,
    },
    closeIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    closeText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    message: {
        marginBottom: 20,
        fontSize: 16,
        color: '#555',
    },
    exitButton: {
        backgroundColor: '#FF4D4D',
        width: '100%',
        marginTop: 15,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 12,
    },
    exitText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
});