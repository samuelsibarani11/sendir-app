import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface ProfileSectionProps {
  avatarUrl: string;
  username: string;
  userHandle: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ avatarUrl, username, userHandle }) => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        <TouchableOpacity style={styles.cameraIcon}>
          <MaterialIcons name="photo-camera" size={18} color="white" />
        </TouchableOpacity>
      </View> 
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.userHandle}>{userHandle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  avatarContainer: {
    position: 'relative',
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
  username: {
    marginTop: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userHandle: {
    color: 'white',
    fontSize: 14,
    marginBottom: 20,
  },
});

export default ProfileSection;
