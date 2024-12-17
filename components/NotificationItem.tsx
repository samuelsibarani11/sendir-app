import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Definisi tipe untuk properti komponen
type NotificationItemProps = {
  title: string;
  date: string;
  statusColor: string;
};

const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  date,
  statusColor,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{date}</Text>
        <View style={[styles.statusDot, { backgroundColor: statusColor }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    color: '#A0A0A0',
    marginRight: 5,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

export default NotificationItem;
