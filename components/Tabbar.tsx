import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Tabbar = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.tabbar}>
            <TabbarItem
                icon={require('../assets/list.png')}
                text="My Wines"
                onClick={() => navigation.navigate('Home')}
            ></TabbarItem>
            <TabbarItem
                icon={require('../assets/plus-circle.png')}
                text="Add Wine"
                onClick={() => navigation.navigate('Appearance')}
            ></TabbarItem>
            <TabbarItem
                icon={require('../assets/settings.png')}
                text="Settings"
                onClick={() => navigation.navigate('Appearance')}
            ></TabbarItem>
        </View>
    );
};

export const TabbarItem = ({ icon, text, onClick }) => {
    return (
        <TouchableOpacity style={styles.tabbarItem} onPress={onClick}>
            <Image source={icon}></Image>
            <Text style={styles.tabbarItemText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tabbar: {
        height: 72,
        width: '100%',
        backgroundColor: '#A21323',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    tabbarItem: {
        display: 'flex',
        alignItems: 'center',
    },
    tabbarItemText: {
        marginTop: 8,
        fontSize: 14,
        lineHeight: 16.42,
        fontFamily: 'WorkSans_600SemiBold',
        color: '#FFFFFF',
    },
});
