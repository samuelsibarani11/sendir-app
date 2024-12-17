import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import DropdownSelector from '@/components/DropdownSelector';
import ScheduleTable from '@/components/ScheduleTable';
import HeaderPage from '@/components/HeaderPage';

const ScheduleSettings = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const programOptions = [
    { label: 'D3 Teknik Informatika', value: 'D3TI' },
    { label: 'S1 Teknik Informatika', value: 'S1TI' },
  ];

  const yearOptions = [
    { label: '2022', value: '2022' },
    { label: '2023', value: '2023' },
  ];

  const dropdowns = [
    {
      label: 'Prodi',
      selectedValue: selectedProgram,
      onValueChange: setSelectedProgram,
      options: programOptions,
    },
    {
      label: 'Tahun Ajaran',
      selectedValue: selectedYear,
      onValueChange: setSelectedYear,
      options: yearOptions,
    },
  ];

  const scheduleData = [
    { code: 'KU32201', subject: 'Bahasa Inggris IV', sks: 4 },
    { code: 'KU32202', subject: 'Penulisan Karya Ilmiah', sks: 4 },
    { code: '1032201', subject: 'Aljabar Linier', sks: 4 },
    { code: '1132202', subject: 'Pemrograman Teknologi .NET', sks: 4 },
    { code: '1132203', subject: 'Pengembangan Aplikasi Terdistribusi', sks: 4 },
  ];

  const handleSubmit = () => {
    console.log('Data submitted:', selectedProgram, selectedYear);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderPage title="Pengaturan Jadwal" />
      <View style={styles.container}>
        <DropdownSelector dropdowns={dropdowns} />
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
});

export default ScheduleSettings;
