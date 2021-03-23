import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlowNavigator } from '../../components/FlowNavigator';
import { RangeSelector } from '../../components/RangeSelector';
import { SearchBox } from '../../components/SearchBox';
import { AromaIntensityExplanations } from '../../data';
import { globalStyles } from '../../styles';

export const Nose = () => {
    const navigation = useNavigation();

    const [intensity, setIntensity] = useState<string | null>(null);

    const goBack = () => {
        navigation.navigate('Appearance');
    };

    const next = () => {
        navigation.navigate('Home');
    };

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text style={globalStyles.H1}>Nose 👃</Text>
                    <Text style={globalStyles.H2}>
                        The aroma intensity is ...
                    </Text>
                    <RangeSelector
                        values={['Light', 'Medium', 'Pronounced']}
                        selectedValue={intensity}
                        onValueChanged={(value: string) => setIntensity(value)}
                    />
                    <Text style={globalStyles.MB}>
                        {AromaIntensityExplanations[intensity]}
                    </Text>

                    <Text style={globalStyles.H2}>Primary aromas</Text>
                    <Text style={globalStyles.MB_SMALL}>
                        The aromas and flavours of the grape and alcoholic
                        fermentation.
                    </Text>
                    <SearchBox></SearchBox>

                    <Text style={globalStyles.H2}>Secondary aromas</Text>
                    <Text style={globalStyles.MB_SMALL}>
                        The aromas and flavours of post-fermentation winemaking
                    </Text>
                    <SearchBox></SearchBox>

                    <Text style={globalStyles.H2}>Tertiary aromas</Text>
                    <Text style={globalStyles.MB_SMALL}>
                        The aromas and flavours of maturation
                    </Text>
                    <SearchBox></SearchBox>
                    <View style={globalStyles.LASTCOMPONENTMARGIN}></View>
                </ScrollView>
            </SafeAreaView>
            <FlowNavigator
                onPreviousClicked={() => goBack()}
                onNextClicked={() => next()}
            ></FlowNavigator>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        padding: 16,
        paddingTop: 48,
        flex: 1,
    },
});
