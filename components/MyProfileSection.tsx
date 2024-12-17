import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

interface ProfileSectionProps {
    avatarUrl: string;
}

const MyProfileSection: React.FC<ProfileSectionProps> = ({ avatarUrl }) => {
    return (
        <View style={styles.profileContainer}>
            <View style={styles.avatarContainer}>
                <Image source={{ uri: avatarUrl }} style={styles.avatar} />
                <TouchableOpacity style={styles.cameraIcon}>
                    <MaterialIcons name="photo-camera" size={18} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.verifiedContainer}>
                <Ionicons name="checkmark-circle" size={24} color="#0FBF4D" />
                <Text style={styles.verifiedText}>Terverifikasi</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        alignItems: 'center',
        marginVertical:25,
    },
    avatarContainer: {
        position: 'relative',
    },
    verifiedContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginTop: 12,
    },
    verifiedText: {
        marginLeft: 6, 
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#118EEA',
        padding: 6,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
    },
});

export default MyProfileSection;
