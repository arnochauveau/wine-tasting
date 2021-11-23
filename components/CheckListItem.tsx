import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ParseableText } from './ParseableText';

export const CheckListItem = ({ checked, colourDetails, onSelected }) => {
    let checkmark = checked ? (
        <View style={styles.checkTicked}>
            <Image source={require('../assets/check.png')} />
        </View>
    ) : (
        <View style={styles.checkUnticked} />
    );
    return (
        <TouchableOpacity style={styles.container} onPress={onSelected}>
            {checkmark}
            <View style={styles.textContainer}>
                <Text
                    style={{
                        ...styles.title,
                        color: colourDetails.colourCode,
                    }}
                >
                    {colourDetails.name}
                </Text>
                <ParseableText>{colourDetails.description}</ParseableText>
            </View>
            <View style={styles.outerColourCircle}>
                <View
                    style={{
                        ...styles.innerColourCircle,
                        backgroundColor: colourDetails.colourCode,
                    }}
                ></View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#F6F3EF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    textContainer: {
        width: 200,
    },
    title: {
        fontFamily: 'WorkSans_600SemiBold',
        fontSize: 18,
        lineHeight: 21,
        marginBottom: 4,
    },
    outerColourCircle: {
        width: 75,
        height: 75,
        borderRadius: 75,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerColourCircle: {
        width: 67,
        height: 67,
        borderRadius: 67,
        backgroundColor: '#801C34',
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
