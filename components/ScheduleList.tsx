import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ScheduleItem {
  subject: string;
  subTitle: string;
  room: string;
  teacher: string;
  time: string;
}

const ScheduleList: React.FC<{ schedules: ScheduleItem[] }> = ({ schedules }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jadwal Hari Ini</Text>
      <Text style={styles.date}>Senin, 2 Des 2024</Text>
      
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {schedules.map((item, index) => (
          <View key={index} style={styles.scheduleItem}>
            <View>
              <Text style={styles.subject}>{item.subject}</Text>
              <Text style={styles.subTitle}>{item.subTitle}</Text>
              <View style={styles.roomInfo}>
                <Ionicons name="location" size={16} color="gray" />
                <Text style={styles.roomText}>{item.room}</Text>
              </View>
              <View style={styles.teacherInfo}>
                <Ionicons name="person" size={16} color="gray" />
                <Text style={styles.teacherText}>{item.teacher}</Text>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  scrollViewContent: {
    flexDirection: 'row', 
    gap: 15, 
  },
  scheduleItem: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    width: 250, 
  },
  subject: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  roomInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  roomText: {
    marginLeft: 5,
    color: 'gray',
  },
  teacherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  teacherText: {
    marginLeft: 5,
    color: 'gray',
  },
  timeText: {
    marginLeft: 'auto',
    color: 'gray',
  },
});

export default ScheduleList;
