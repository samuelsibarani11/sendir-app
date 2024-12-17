import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const SettingsOptions: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.optionsContainer}>
      <TouchableOpacity
        style={styles.option}
        onPress={() => router.push('/personal-settings')}
      >
        <Icon name="person-outline" size={24} color="#333" />
        <Text style={styles.optionText}>Pengaturan Personal</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => router.push('/schedule-settings')}
      >
        <Icon name="calendar-outline" size={24} color="#333" />
        <Text style={styles.optionText}>Pengaturan Jadwal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    marginTop: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
});

export default SettingsOptions;
