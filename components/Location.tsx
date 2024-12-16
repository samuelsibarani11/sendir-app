import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LocationProps {
  location: string;
}

const Location: React.FC<LocationProps> = ({ location }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lokasi Saat Ini: <Text style={styles.location}>{location}</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    marginVertical: 8,
  },
  text: {
    fontSize: 14,
    color: '#333333',
  },
  location: {
    fontWeight: 'bold',
  },
});

export default Location;