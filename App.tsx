import {
    useFonts,
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_600SemiBold,
} from '@expo-google-fonts/work-sans';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Home } from './pages/Home';
import { Appearance } from './pages/New-wine/Appearance';
import { Nose } from './pages/New-wine/Nose';

const Stack = createStackNavigator();

export const App = () => {
    let [fontsLoaded] = useFonts({
        WorkSans_600SemiBold,
        WorkSans_400Regular,
        WorkSans_300Light,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        cardStyle: { backgroundColor: '#FAFAFA' },
                    }}
                >
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Appearance"
                        component={Appearance}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Nose"
                        component={Nose}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
