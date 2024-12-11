import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface InputFieldProps extends TextInputProps {
    icon: keyof typeof AntDesign.glyphMap;
}

const InputField: React.FC<InputFieldProps> = ({ icon, ...props }) => {
    return (
        <View style={styles.container}>
            <AntDesign name={icon} size={20} color="#000" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholderTextColor="#777"
                {...props}
            />
        </View>
    );
};

export default InputField;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        paddingHorizontal: 10,
        marginBottom: 30,
        height:60,
        backgroundColor: '#fff',
    },
    icon: {
        marginRight: 10
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000'
    },
});
