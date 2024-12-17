import ProfileHeader from '@/components/ProfileHeader';
import ProfileSection from '@/components/ProfileSection';
import SettingsList from '@/components/SettingsList';
import React from 'react';
import { StyleSheet, SafeAreaView, View, StatusBar } from 'react-native';

const ProfileSettings = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#118EEA" />
      <View style={styles.container}>
        <ProfileHeader title="Pengaturan Profil"/>
        <ProfileSection
          avatarUrl="https://via.placeholder.com/100"
          username="Samuel Albi"
          userHandle="samuelalbi11"
        />
        <SettingsList/>
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

export default ProfileSettings;
