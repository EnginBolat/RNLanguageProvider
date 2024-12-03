import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface IRadioButton {
    value: boolean;
    onPress: () => void
}

const RadioButton = ({ value, onPress }: IRadioButton) => {
    return <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={[styles.circle, value && styles.isActive]} />
    </TouchableOpacity>;
};

export default RadioButton;

const styles = StyleSheet.create({
    container: {
        borderRadius: 999,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        padding: 4,
    },
    circle: {
        height: 10,
        width: 10,
        borderRadius: 999,
    },
    isActive: {
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
});

