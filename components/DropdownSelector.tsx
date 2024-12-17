import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface DropdownSelectorProps {
    label: string;
    selectedValue: string | null;
    onValueChange: (value: string | null) => void;
    options: Array<{ label: string; value: string }>;
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({
    label,
    selectedValue,
    onValueChange,
    options,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <DropDownPicker
                open={open}
                value={selectedValue} 
                items={options}
                setOpen={setOpen}
                setValue={(callback) => {
                    const value = callback(selectedValue);
                    onValueChange(value); 
                }}
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
                placeholder="Select an item"
                zIndex={1000}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
        color: '#333',
    },
    dropdown: {
        borderColor: '#ccc',
        backgroundColor: '#fff',
    },
    dropdownContainer: {
        borderColor: '#ccc',
        backgroundColor: '#fff',
    },
});

export default DropdownSelector;
