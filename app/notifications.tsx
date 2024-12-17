import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import NotificationItem from '../components/NotificationItem';
import { useRouter } from 'expo-router';
import HeaderPage from '@/components/HeaderPage';

type Notification = {
  id: number;
  title: string;
  date: string;
  statusColor: string;
  description: string;
};

const notifications: Notification[] = [
  { id: 1, title: 'Dasar Pemrograman', date: '10 Des', statusColor: '#FFA500', description: 'Anda terlambat masuk ke dalam kelas, point kehadiran akan dikurangi' },
  { id: 2, title: 'Bahasa Inggris', date: '12 Des', statusColor: '#FF0000', description: 'Anda tidak hadir dalam kelas Bahasa Inggris' },
];

const Notifications: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <HeaderPage title="Notifikasi" />

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: '/detail-notification',
                params: {
                  title: item.title,
                  date: item.date,
                  description: item.description,
                },
              })
            }
          >
            <NotificationItem
              title={item.title}
              date={item.date}
              statusColor={item.statusColor}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default Notifications;
