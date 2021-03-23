import React from 'react';
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
    ViewStyle,
} from 'react-native';

export const RangeSelector = ({ values, selectedValue, onValueChanged }) => {
    const rangeSelector = values.map((rangeValue, index) => {
        const width = 100 / values.length;
        const dot =
            rangeValue === selectedValue ? (
                <View style={styles.rangeDot}>
                    <Image source={require('../assets/check.png')} />
                </View>
            ) : null;

        const baseStyle: ViewStyle = {
            width: width + '%',
        };

        const itemStyle: ViewStyle =
            index === 0
                ? {
                      ...baseStyle,
                      alignItems: 'flex-start',
                  }
                : index === values.length - 1
                ? {
                      ...baseStyle,
                      alignItems: 'flex-end',
                  }
                : {
                      ...baseStyle,
                      alignItems: 'center',
                  };

        return (
            <View style={itemStyle} key={index + 'dot'}>
                <Pressable
                    onPress={() => {
                        onValueChanged(rangeValue);
                    }}
                    style={styles.rangeCircle}
                >
                    {dot}
                </Pressable>
                <Text style={styles.rangeText}>{rangeValue}</Text>
            </View>
        );
    });

    return (
        <View style={styles.RangeSelector}>
            <View style={styles.rangeLine}></View>
            <View style={styles.container}>{rangeSelector}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    RangeSelector: {
        marginBottom: 16,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    rangeCircle: {
        width: 40,
        height: 40,
        flexGrow: 0,
        borderRadius: 40,
        borderColor: '#02A78B',
        borderWidth: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    rangeDot: {
        width: 20,
        height: 20,
        backgroundColor: '#02A78B',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rangeLine: {
        height: 4,
        width: '100%',
        position: 'absolute',
        backgroundColor: '#02A78B',
        alignSelf: 'flex-start',
        marginTop: 18,
        flexGrow: 1,
        display: 'flex',
    },
    rangeText: {
        fontFamily: 'WorkSans_600SemiBold',
    },
});
