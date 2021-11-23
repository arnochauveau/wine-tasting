import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlowNavigator } from '../../components/FlowNavigator';
import { ParseableText } from '../../components/ParseableText';
import { RangeSelector } from '../../components/RangeSelector';
import { SearchBox } from '../../components/SearchBox';
import { AromaIntensityExplanations, PrimaryDescriptors } from '../../data';
import { globalStyles } from '../../styles';

export const Nose = () => {
    let scrollContainer = useRef<ScrollView>();
    const navigation = useNavigation();

    const [intensity, setIntensity] = useState<string | null>(null);

    const goBack = () => {
        navigation.navigate('Appearance');
    };

    const next = () => {
        navigation.navigate('Home');
    };

    const scrollIntoView = (y) => {
        scrollContainer.current.scrollTo({ y, animated: true });
    };

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    ref={scrollContainer}
                >
                    <Text style={globalStyles.H1}>Nose 👃</Text>
                    <Text style={globalStyles.H2}>
                        The aroma intensity is ...
                    </Text>
                    <RangeSelector
                        values={['Light', 'Medium', 'Pronounced']}
                        selectedValue={intensity}
                        onValueChanged={(value: string) => setIntensity(value)}
                    />
                    <ParseableText style={globalStyles.MB}>
                        {AromaIntensityExplanations[intensity]}
                    </ParseableText>

                    <Text style={globalStyles.H2}>Primary aromas</Text>
                    <Text style={globalStyles.MB_SMALL}>
                        The aromas and flavours of the grape and alcoholic
                        fermentation.
                    </Text>
                    <SearchBox
                        descriptors={PrimaryDescriptors}
                        onFocus={(view) => scrollIntoView(view)}
                    ></SearchBox>

                    <Text style={globalStyles.H2}>Secondary aromas</Text>
                    <Text style={globalStyles.MB_SMALL}>
                        The aromas and flavours of post-fermentation winemaking
                    </Text>
                    <SearchBox
                        descriptors={PrimaryDescriptors}
                        onFocus={scrollIntoView}
                    ></SearchBox>

                    <Text style={globalStyles.H2}>Tertiary aromas</Text>
                    <Text style={globalStyles.MB_SMALL}>
                        The aromas and flavours of maturation
                    </Text>
                    <SearchBox
                        descriptors={PrimaryDescriptors}
                        onFocus={scrollIntoView}
                    ></SearchBox>
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
