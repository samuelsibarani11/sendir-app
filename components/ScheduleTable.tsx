import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';

interface ScheduleItem {
    code: string;
    subject: string;
    sks: number;
}

interface ScheduleTableProps {
    data: ScheduleItem[];
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ data }) => {
    const [selected, setSelected] = useState<string[]>([]);

    const toggleSelect = (code: string) => {
        setSelected((prev) =>
            prev.includes(code) ? prev.filter((item) => item !== code) : [...prev, code]
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={[styles.headerCell, { flex: 1 }]}>Kode MK</Text>
                <Text style={[styles.headerCell, { flex: 2 }]}>Mata Kuliah</Text>
                <Text style={[styles.headerCell, { flex: 1 }]}>SKS</Text>
                <Text style={[styles.headerCell, { flex: 0.5 }]}>Pilih</Text>
            </View>
            <ScrollView>
                {data.map((item) => (
                    <View key={item.code} style={styles.row}>
                        <Text style={[styles.cell, { flex: 1, textAlign: 'left' }]}>
                            {item.code}
                        </Text>
                        <Text style={[styles.cell, { flex: 2, textAlign: 'left' }]}>
                            {item.subject}
                        </Text>
                        <Text style={[styles.cell, { flex: 1, textAlign: 'center' }]}>
                            {item.sks}
                        </Text>
                        <View style={{ flex: 0.7, alignItems: 'center' }}>
                            <Checkbox
                                value={selected.includes(item.code)}
                                onValueChange={() => toggleSelect(item.code)}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
    },
    headerRow: {
        flexDirection: 'row',
        backgroundColor: '#D3EDFF',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    headerCell: {
        fontWeight: 'bold',
        color: '#333',
        paddingHorizontal: 8,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        backgroundColor: '#FFFFFF',
    },
    cell: {
        color: '#333',
        paddingHorizontal: 8,
        fontSize: 14,
    },
});

export default ScheduleTable;
