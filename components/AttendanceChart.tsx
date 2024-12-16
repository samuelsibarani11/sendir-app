import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

interface AttendanceChartProps {
  attendance: number;
}

const AttendanceChart: React.FC<AttendanceChartProps> = ({ attendance }) => {
  const chartData = [
    { name: 'Hadir', population: 60, color: '#007BFF', legendFontColor: '#007BFF', legendFontSize: 12 },
    { name: 'Terlambat', population: 20, color: '#FFC107', legendFontColor: '#FFC107', legendFontSize: 12 },
    { name: 'Tidak Hadir', population: 15, color: '#FF3D00', legendFontColor: '#FF3D00', legendFontSize: 12 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kehadiran</Text>
      <PieChart
        data={chartData}
        width={300}
        height={150}
        chartConfig={{
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          strokeWidth: 2,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        center={[10, 10]}
      />
      <Text style={styles.percentage}>{attendance}%</Text>
      <Text style={styles.subtitle}>Ayo Tingkatkan Lagi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  percentage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
  },
});

export default AttendanceChart;