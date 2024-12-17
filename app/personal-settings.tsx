import MyProfileSection from '@/components/MyProfileSection';
import PersonalSettingsList from '@/components/PersonalSettingsList';
import ProfileHeader from '@/components/ProfileHeader';
import React from 'react';
import { StyleSheet, SafeAreaView, View, StatusBar } from 'react-native';

const PersonalSettings = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#118EEA" />
      <View style={styles.container}>
        <ProfileHeader title="Profil Saya"/>
        <MyProfileSection
          avatarUrl="https://via.placeholder.com/100"
        />
        <PersonalSettingsList/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#118EEA',
    paddingTop: StatusBar.currentHeight || 0, 
  },
  container: {
    flex: 1,
    backgroundColor: '#118EEA',
  },
});

export default PersonalSettings;
