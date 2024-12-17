import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface DropdownSelectorProps {
  dropdowns: Array<{
    label: string;
    selectedValue: string | null;
    onValueChange: (value: string | null) => void;
    options: Array<{ label: string; value: string }>;
  }>;
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({ dropdowns }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {dropdowns.map((dropdown, index) => (
        <View
          style={[styles.container, { zIndex: openIndex === index ? 1000 : 500 }]}
          key={index}
        >
          <Text style={styles.label}>{dropdown.label}</Text>
          <DropDownPicker
            open={openIndex === index}
            value={dropdown.selectedValue}
            items={dropdown.options}
            setOpen={(isOpen) => setOpenIndex(isOpen ? index : null)}
            setValue={(callback) => dropdown.onValueChange(callback(null))}
            onClose={() => setOpenIndex(null)}
            placeholder="Select an item"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            listMode="SCROLLVIEW"
          />
        </View>
      ))}
    </>
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
