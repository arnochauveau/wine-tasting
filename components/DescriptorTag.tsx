import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Descriptor } from '../data';

export const DescriptorTag: React.FC<{ descriptor: Descriptor; onRemove }> = ({
    descriptor,
    onRemove,
}) => {
    return (
        <View style={styles.tag}>
            <View
                style={{
                    ...styles.tagColour,
                    backgroundColor: descriptor.color,
                }}
            ></View>
            <Text>{descriptor.name}</Text>
            <Pressable style={styles.closeIcon} onPress={onRemove}>
                <Image source={require('../assets/trash-2.png')}></Image>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    tag: {
        display: 'flex',
        backgroundColor: '#F6F3EF',
        borderRadius: 8,
        flexDirection: 'row',
        padding: 8,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginRight: 8,
        marginBottom: 8,
    },
    tagColour: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#92D15B',
        marginRight: 4,
    },
    closeIcon: {
        marginLeft: 4,
    },
});
