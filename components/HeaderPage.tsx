import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

type HeaderPageProps = {
  title: string; // Tipe props 'title' adalah string
};

const HeaderPage: React.FC<HeaderPageProps> = ({ title }) => {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => router.back()}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '15%',
    paddingBottom: '5%',
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    elevation: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
});

export default HeaderPage;
