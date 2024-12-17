import React, { useState } from 'react';
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import Header from '@/components/Header';
import AttendanceChart from '@/components/AttendanceChart';
import ScheduleList from '@/components/ScheduleList';

const index: React.FC = () => {
  const schedules = [
    {
      subject: 'Pengenalan Basis Data',
      subTitle: 'Bagian 1: Pengenalan SQL',
      room: 'Room 6-205',
      teacher: 'Pak Rudy Chandra',
      time: '11:35',
    },
    {
      subject: 'Matematika',
      subTitle: 'Bagian 1: Himpunan',
      room: 'Room 6-206',
      teacher: 'Pak Rudy Chandra',
      time: '13:00',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header
          name="Samuel Albi"
          location="Lokasi Saat Ini : GD 5"
          avatarUrl="https://via.placeholder.com/150"
          />
        <ScheduleList schedules={schedules} />
        <AttendanceChart present={60} late={20} absent={20} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default index;
