import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
} from 'react-native';

export const SearchBox = () => {
    return (
        <View style={styles.searchBox}>
            <TextInput style={styles.input}></TextInput>
            <TouchableHighlight style={styles.inputButton}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableHighlight>
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
        height: 56,
        borderRadius: 8,
        padding: 16,
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
    },
    buttonText: {
        fontFamily: 'WorkSans_600SemiBold',
        color: '#FFF',
    },
});
