import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

interface HeaderProps {
  name: string;
  location: string;
  avatarUrl: string;
}

const Header: React.FC<HeaderProps> = ({ name, location, avatarUrl }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>
            Hai, <Text style={styles.boldText}>{name}</Text>
          </Text>
          <Text style={styles.appName}>Senyumku Absenku</Text>
        </View>
        <View style={styles.rightContent}>
          {/* Navigasi ke halaman notifikasi */}
          <TouchableOpacity onPress={() => router.push('/notifications')}>
            <Icon name="notifications-outline" size={24} color="white" style={styles.notificationIcon} />
          </TouchableOpacity>
          {/* Navigasi ke halaman profile settings */}
          <TouchableOpacity onPress={() => router.push('/profile-settings')}>
            <Image source={{ uri: avatarUrl }} style={styles.avatar} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.location}>{location}</Text>

      <View style={styles.curve} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#0099FF',
    height: 280,
    position: 'relative',
  },
  headerContent: {
    paddingTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'column',
  },
  greeting: {
    color: 'white',
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold',
  },
  appName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  location: {
    color: 'white',
    fontSize: 14,
    marginTop: 60,
    textAlign: 'right',
    paddingHorizontal: 5,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    marginRight: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  curve: {
    position: 'absolute',
    bottom: -6,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: 'white',
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
  },
});

export default Header;
