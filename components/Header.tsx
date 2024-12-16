import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Hai, <Text style={styles.name}>{name}</Text></Text>
        <Text style={styles.subtitle}>Senyumku Absenku</Text>
      </View>
      <Image 
        source={{ uri: 'https://i.pravatar.cc/150?img=3' }} 
        style={styles.avatar} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#007BFF',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  greeting: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  name: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 4,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});

export default Header;