import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SettingsList = () => {
  const router = useRouter();

  return (
    <View style={styles.settingsContainer}>
      <TouchableOpacity style={styles.settingItem} onPress={() => router.push('/personal-settings')}>
        <Ionicons name="person-outline" size={24} color="#333" />
        <Text style={styles.settingText}>Pengaturan Personal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => router.push('/schedule-settings')}>
        <Ionicons name="calendar-outline" size={24} color="#333" />
        <Text style={styles.settingText}>Pengaturan Jadwal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    paddingTop: 20,
    paddingHorizontal:24,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  settingText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },
});

export default SettingsList;
