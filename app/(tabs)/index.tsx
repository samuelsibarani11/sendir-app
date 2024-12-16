import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '@/components/Header';
import Location from '@/components/Location';
import ScheduleList from '@/components/ScheduleList';
import AttendanceChart from '@/components/AttendanceChart';

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <Header name="Samuel Albi" />
      <Location location="GD 5" />
      <ScheduleList />
      <AttendanceChart attendance={70} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});