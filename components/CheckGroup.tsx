import React from 'react';
import { View } from 'react-native';
import { Checkbox } from './Checkbox';

export const CheckGroup = ({
    style,
    options,
    selectedItem,
    onSelectionChanged,
}) => {
    const items = options.map((option, index) => (
        <Checkbox
            key={index}
            onSelected={() => onSelectionChanged(option)}
            checked={selectedItem === option}
            text={option}
        />
    ));
    return <View style={style}>{items}</View>;
};
