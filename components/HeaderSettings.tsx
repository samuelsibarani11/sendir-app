import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const HeaderSettings: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header Content */}
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={() => router.back()}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Pengaturan Profil</Text>
      </View>

      {/* Lengkungan */}
      <View style={styles.curve} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0099FF',
    height: 230,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 20,
    position: 'relative',
  },
  headerContent: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  curve: {
    position: 'absolute',
    bottom: -5,
    left: 0,
    right: 0,
    height: 10,
    backgroundColor: 'white',
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
  },
});

export default HeaderSettings;
