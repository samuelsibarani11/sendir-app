import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderField: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.description}>
                SenDir merupakan singkatan dari Senyum Hadir, masuk untuk kehadiran anda.
            </Text>
        </View>
    );
};

export default HeaderField;

const styles = StyleSheet.create({
    container: {
        alignItems: 'baseline',
        marginVertical:30,
    },
    description: {
        color: '#000',
        fontSize: 16,
        textAlign: 'left',
        marginTop: 10
    },
});
