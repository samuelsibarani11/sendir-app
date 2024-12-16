import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const schedules = [
  {
    subject: 'Pengenalan Basis Data',
    part: 'Bagian 1: Pengenalan SQL',
    room: 'Room 6-205',
    teacher: 'Pak Rudy Chandra',
    time: '11:35',
  },
  {
    subject: 'Matematika Diskrit',
    part: 'Bagian 1: Himpunan',
    room: 'Room 6-205',
    teacher: 'Pak Rudy Chandra',
    time: '13:00',
  },
];

const ScheduleList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jadwal Hari Ini</Text>
      {schedules.map((schedule, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.subject}>{schedule.subject}</Text>
          <Text style={styles.part}>{schedule.part}</Text>
          <Text style={styles.details}>
            {schedule.room} | {schedule.teacher} | {schedule.time}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  subject: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  part: {
    fontSize: 12,
    color: '#666666',
    marginVertical: 4,
  },
  details: {
    fontSize: 12,
    color: '#333333',
  },
});

export default ScheduleList;