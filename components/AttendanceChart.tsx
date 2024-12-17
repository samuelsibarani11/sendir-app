import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

interface AttendanceProps {
  present: number;
  late: number;
  absent: number;
}

const AttendanceChart: React.FC<AttendanceProps> = ({ present, late, absent }) => {
  const circumference = 2 * Math.PI * 80; // Keliling lingkaran

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kehadiran</Text>

      <View style={styles.chartContainer}>
        <Svg height="200" width="200">
          <Circle
            cx="100"
            cy="100"
            r="80"
            stroke="#0099FF"
            strokeWidth="20"
            fill="transparent"
            strokeDasharray={`${(present / 100) * circumference} ${(1 - present / 100) * circumference}`}
          />
          <Circle
            cx="100"
            cy="100"
            r="80"
            stroke="#FF4444"
            strokeWidth="20"
            fill="transparent"
            strokeDasharray={`${(absent / 100) * circumference} ${(1 - absent / 100) * circumference}`}
            strokeDashoffset={-(present / 100) * circumference}
          />
          <Circle
            cx="100"
            cy="100"
            r="80"
            stroke="#FFA500"
            strokeWidth="20"
            fill="transparent"
            strokeDasharray={`${(late / 100) * circumference} ${(1 - late / 100) * circumference}`}
            strokeDashoffset={-((present + absent) / 100) * circumference}
          />
        </Svg>
        <View style={styles.percentageContainer}>
          <Text style={styles.percentage}>70%</Text>
          <Text style={styles.subtitle}>Ayo Tingkatkan lagi</Text>
        </View>
      </View>

      <View style={styles.legend}>
        <View style={styles.legendRow}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#0099FF' }]} />
            <Text>Hadir {present}%</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#FF4444' }]} />
            <Text>Tidak Hadir {absent}%</Text>
          </View>
        </View>
        <View style={styles.legendRow}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#FFA500' }]} />
            <Text>Terlambat {late}%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chartContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  percentageContainer: {
    position: 'absolute',
    top: '37%',
    alignItems: 'center',
  },
  percentage: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: 'gray',
  },
  legend: {
    marginTop: 20,
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
});

export default AttendanceChart;