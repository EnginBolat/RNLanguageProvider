import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import RadioButton from '../RadioButton/RadioButton';

interface IItemRow {
    text: string;
    onPress?: () => void;
    disabled?: boolean;
    selected?: boolean
}

const ItemRow = (props: IItemRow) => {
    const { text, onPress, disabled, selected = false } = props;

    return <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.container, disabled ? styles.deActiveContainer : styles.activeContainer]}>
        <Text>{text}</Text>
        <RadioButton value={selected} onPress={() => { }} />
    </TouchableOpacity>;
};

export default ItemRow;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        flexDirection: 'row',
    },
    activeContainer: {
        backgroundColor: 'white',
    },
    deActiveContainer: {
        backgroundColor: ' rgba(0, 0, 0, 0.05)',
    },
});
