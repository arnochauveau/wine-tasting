import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Checkbox = ({ text, checked, onSelected }) => {
    let checkmark = checked ? (
        <View style={styles.checkTicked}>
            <Image source={require('../assets/check.png')} />
        </View>
    ) : (
        <View style={styles.checkUnticked} />
    );

    return (
        <TouchableOpacity onPress={onSelected} style={styles.container}>
            {checkmark}
            <Text>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F3EF',
        padding: 16,
        borderRadius: 8,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginRight: 8,
    },
    checkTicked: {
        marginRight: 16,
        borderRadius: 50,
        width: 20,
        height: 20,
        backgroundColor: '#02A78B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkUnticked: {
        marginRight: 16,
        borderRadius: 50,
        width: 20,
        height: 20,
        backgroundColor: '#FFFFFF',
        borderColor: '#989999',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
