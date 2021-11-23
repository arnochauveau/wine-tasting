import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DescriptorTag } from './DescriptorTag';
import { ParseableText } from './ParseableText';

export const SearchBox = ({ descriptors, onFocus }) => {
    const [listItems, setListItems] = useState([]);
    const [currentSearchTerm, setCurrentSearchTerm] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);

    let YPos: number;
    let input = useRef<TextInput>();

    const textChanged = (event: string) => {
        setCurrentSearchTerm(event);
        if (event === '') {
            setListItems([]);
            return;
        }
        setListItems(
            descriptors.filter(
                (d) =>
                    d.name.toLowerCase().includes(event.toLowerCase()) &&
                    !selectedItems.find(
                        (si) => si.name.toLowerCase() === d.name.toLowerCase()
                    )
            )
        );
    };

    const itemSelected = (item) => {
        setSelectedItems([...selectedItems, item]);
        input.current.clear();
        setListItems([]);
    };

    const itemRemoved = (item) => {
        setSelectedItems(selectedItems.filter((si) => si.name !== item.name));
    };

    const resultList =
        listItems.length > 0 ? (
            <ScrollView
                keyboardShouldPersistTaps="handled"
                style={styles.results}
            >
                {listItems.map((item) => (
                    <Pressable
                        key={item.name}
                        onPress={() => itemSelected(item)}
                    >
                        <ParseableText style={styles.resultItem}>
                            {item.name
                                .toLowerCase()
                                .replace(
                                    currentSearchTerm.toLowerCase(),
                                    `**(${currentSearchTerm.toLowerCase()})**`
                                )
                                .toLowerCase()}
                        </ParseableText>
                    </Pressable>
                ))}
            </ScrollView>
        ) : null;

    const selectedItemList =
        selectedItems.length > 0
            ? selectedItems.map((item) => (
                  <DescriptorTag
                      key={item.name}
                      descriptor={item}
                      onRemove={() => itemRemoved(item)}
                  ></DescriptorTag>
              ))
            : null;
    return (
        <View
            style={styles.searchBox}
            onLayout={(e) => {
                YPos = e.nativeEvent.layout.y;
            }}
        >
            <TextInput
                ref={input}
                onFocus={() => onFocus(YPos - 100)}
                onChangeText={textChanged}
                style={styles.input}
            ></TextInput>
            {resultList}
            <View style={styles.tagList}>{selectedItemList}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchBox: {
        marginBottom: 64,
        display: 'flex',
    },
    input: {
        borderWidth: 1,
        borderColor: '#B2B3B3',
        backgroundColor: '#FFF',
        height: 56,
        borderRadius: 8,
        padding: 16,
        zIndex: 1,
        marginBottom: 16,
    },
    inputButton: {
        backgroundColor: '#02A78B',
        display: 'flex',
        padding: 8,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 8,
        height: 40,
        top: 8,
        zIndex: 2,
    },
    buttonText: {
        fontFamily: 'WorkSans_600SemiBold',
        color: '#FFF',
    },
    results: {
        backgroundColor: '#FFF',
        top: -8,
        borderColor: '#B2B3B3',
        borderWidth: 1,
        borderRadius: 8,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderTopWidth: 0,
        padding: 8,
        maxHeight: 300,
    },
    resultItem: {
        padding: 16,
    },
    tagList: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
});
