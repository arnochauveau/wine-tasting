import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const FlowNavigator = ({ onPreviousClicked, onNextClicked }) => {
    return (
        <View style={styles.flowNavigator}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={onPreviousClicked}
            >
                <Image source={require('../assets/chevron-left.png')}></Image>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={onNextClicked}>
                <Text style={styles.nextButtonText}>Next</Text>
                <Image source={require('../assets/chevron-right.png')}></Image>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    flowNavigator: {
        backgroundColor: '#FFFFFF',
        height: 76,
        width: '100%',
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nextButton: {
        backgroundColor: '#02A78B',
        display: 'flex',
        flexDirection: 'row',
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginRight: 16,
    },
    nextButtonText: {
        color: '#FFF',
        fontFamily: 'WorkSans_600SemiBold',
    },
    backButton: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 16,
        alignItems: 'center',
    },
    backButtonText: {
        color: '#989999',
        fontFamily: 'WorkSans_600SemiBold',
    },
});
