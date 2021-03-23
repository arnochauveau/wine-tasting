import React from 'react';
import { View } from 'react-native';
import { WineColour } from '../data';
import { CheckListItem } from './CheckListItem';

export const CheckList = ({
    style,
    options,
    selectedItem,
    onSelectionChanged,
}) => {
    if (!options) {
        return <View />;
    }
    const items = options.map((option: WineColour, index) => (
        <CheckListItem
            key={index}
            onSelected={() => onSelectionChanged(option.name)}
            checked={selectedItem === option.name}
            colourDetails={option}
        />
    ));
    return <View style={style}>{items}</View>;
};
