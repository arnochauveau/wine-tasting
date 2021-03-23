import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Tabbar } from '../components/Tabbar';

export const Home = () => (
    <SafeAreaView style={styles.container}>
        <Text style={styles.home}>This is Home</Text>
        <Tabbar></Tabbar>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 48,
    },
    home: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flexGrow: 1,
        fontFamily: 'WorkSans_600SemiBold',
    },
});
