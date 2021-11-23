import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const ParseableText: React.FC<{ children: any; style?: any }> = ({
    children,
    style,
}) => {
    if (!children) {
        return <Text></Text>;
    }
    const childrenParts = (children as string).split('**');

    const parts = childrenParts.map((cp) => {
        if (cp.includes('(')) {
            const newCp = cp.replace('(', '').replace(')', '');
            return <Text style={styles.bold}>{newCp}</Text>;
        }

        return cp;
    });

    return <Text style={style}>{parts}</Text>;
};

const styles = StyleSheet.create({
    bold: {
        fontFamily: 'WorkSans_600SemiBold',
    },
});
