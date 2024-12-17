import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PersonalSettingsList = () => {
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Info Profil</Text>
                <View style={styles.itemRow}>
                    <View>
                        <Text style={styles.itemTitle}>Nama Lengkap</Text>
                        <Text style={styles.itemValue}>Samuel Albi</Text>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="pencil-outline" size={20} color="#9E9E9E" />
                    </TouchableOpacity>
                </View>

                <View style={styles.itemRow}>
                    <View>
                        <Text style={styles.itemTitle}>Nama Pengguna</Text>
                        <Text style={styles.itemValue}>@samuelalbi11</Text>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="pencil-outline" size={20} color="#9E9E9E" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Informasi Pribadi */}
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Informasi Pribadi</Text>

                <View style={styles.itemRow}>
                    <View>
                        <Text style={styles.itemTitle}>E-Mail</Text>
                        <Text style={styles.itemValue}>if322038@students.ac.id</Text>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="pencil-outline" size={20} color="#9E9E9E" />
                    </TouchableOpacity>
                </View>

                <View style={styles.itemRow}>
                    <View>
                        <Text style={styles.itemTitle}>Prodi</Text>
                        <Text style={styles.itemValue}>-</Text>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="pencil-outline" size={20} color="#9E9E9E" />
                    </TouchableOpacity>
                </View>

                <View style={styles.itemRow}>
                    <View>
                        <Text style={styles.itemTitle}>NIM</Text>
                        <Text style={styles.itemValue}>-</Text>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="pencil-outline" size={20} color="#9E9E9E" />
                    </TouchableOpacity>
                </View>

                <View style={styles.itemRow}>
                    <View>
                        <Text style={styles.itemTitle}>No. Telepon</Text>
                        <Text style={styles.itemValue}>-</Text>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="pencil-outline" size={20} color="#9E9E9E" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal:24,
        paddingTop:36,
    },
    section: {
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        paddingBottom: 12,
    },
    sectionHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    itemTitle: {
        fontSize: 16,
        color: '#9E9E9E',
    },
    itemValue: {
        fontSize: 16,
        color: '#333',
    },
});


export default PersonalSettingsList;
