import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import DropdownSelector from '@/components/DropdownSelector';
import ScheduleTable from '@/components/ScheduleTable';
import HeaderPage from '@/components/HeaderPage';

const ScheduleSettings = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null); // Changed to string | null
  const [selectedYear, setSelectedYear] = useState<string | null>(null); // Changed to string | null

  const programOptions = [
    { label: 'D3 ggggggg', value: 'D3TI' },
    { label: 'S1 Teknik Informatika', value: 'S1TI' },
  ];

  const yearOptions = [
    { label: '2022', value: '2022' },
    { label: '2023', value: '2023' },
  ];

  const scheduleData = [
    { code: 'KU32201', subject: 'Bahasa Inggris IV', sks: 4 },
    { code: 'KU32202', subject: 'Penulisan Karya Ilmiah', sks: 4 },
    { code: '1032201', subject: 'Aljabar Linier', sks: 4 },
    { code: '1132202', subject: 'Pemrograman Teknologi. NET', sks: 4 },
    { code: '1132203', subject: 'Pengembangan Aplikasi Terdistribusi', sks: 4 },
  ];

  const handleSubmit = () => {
    console.log('Data submitted:', selectedProgram, selectedYear); // Added logging
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderPage title='Pengaturan Jadwal' />
      <View style={styles.container}>
        <DropdownSelector
          label="Prodi"
          selectedValue={selectedProgram}
          onValueChange={setSelectedProgram}
          options={programOptions}
          key="programPicker" // Added key
        />
        <DropdownSelector
          label="Tahun Ajaran"
          selectedValue={selectedYear}
          onValueChange={setSelectedYear}
          options={yearOptions}
          key="yearPicker" // Added key
        />
        <ScheduleTable data={scheduleData} />
        <Button title="Kirim" onPress={handleSubmit} color="#1E90FF" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'left',
    color: '#333',
  },
});

export default ScheduleSettings;
