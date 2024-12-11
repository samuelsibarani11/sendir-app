import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderLogin: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>
                Selamat Datang di
                <Text style={styles.textDescription}>
                    {'\n'}SenDir
                </Text>
            </Text>
        </View>
    );
};

export default HeaderLogin;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 100,
        left: 0,
        right: 0,
        paddingHorizontal:20,
    },

    textDescription: {
        fontSize: 24,

    },
    textHeader: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 10
    },
});
