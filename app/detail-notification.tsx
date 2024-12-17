import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import HeaderPage from '@/components/HeaderPage';

const Detail: React.FC = () => {
  const { title, date, description } = useLocalSearchParams(); // Ambil parameter dari navigasi
  const [reason, setReason] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // State untuk melacak apakah sudah dikirim

  const handleSubmit = () => {
    setIsSubmitted(true); // Tandai sebagai sudah dikirim
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderPage title="Detail Notifikasi" />

      <View style={styles.container}>
        {/* Title dan Deskripsi */}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.date}>{date}</Text>

        {/* Input Alasan */}
        {!isSubmitted ? (
          <>
            <Text style={styles.label}>Tulis Alasan</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Ketik alasan Anda di sini..."
              multiline
              numberOfLines={4}
              value={reason}
              onChangeText={(text) => setReason(text)}
            />
            {/* Tombol Kirim */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Kirim</Text>
            </TouchableOpacity>
          </>
        ) : (
          // Tampilkan Alasan Setelah Dikirim
          <Text style={styles.submittedText}>Alasan: {reason}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  submittedText: {
    fontSize: 16,
    color: '#000',
    fontStyle: 'italic',
  },
});

export default Detail;
