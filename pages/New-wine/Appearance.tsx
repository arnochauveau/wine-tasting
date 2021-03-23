import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckGroup } from '../../components/CheckGroup';
import { CheckList } from '../../components/CheckList';
import { FlowNavigator } from '../../components/FlowNavigator';
import { RangeSelector } from '../../components/RangeSelector';
import {
    ColourIntensityExplanations,
    SubColours,
    WineColours,
} from '../../data';
import { globalStyles } from '../../styles';

export const Appearance = () => {
    const navigation = useNavigation();

    const [colourSelection, setColourSelection] = useState<
        'Red' | 'White' | 'Rosé'
    >('Red');
    const [subColourSelection, setSubColourSelection] = useState<string | null>(
        null
    );
    const [colourIntensity, setColourIntensity] = useState<string | null>(null);

    const goBack = () => {
        navigation.navigate('Home');
    };

    const next = () => {
        navigation.navigate('Nose');
    };

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text style={globalStyles.H1}>Appearance 👁</Text>
                    <Text style={globalStyles.H2}>The wine is ...</Text>
                    <CheckGroup
                        options={WineColours}
                        style={{ flexDirection: 'row', ...globalStyles.MB }}
                        selectedItem={colourSelection}
                        onSelectionChanged={(value) =>
                            setColourSelection(value)
                        }
                    ></CheckGroup>
                    <Text style={globalStyles.H2}>The colour is ...</Text>
                    <CheckList
                        options={SubColours[colourSelection]}
                        style={globalStyles.MB}
                        selectedItem={subColourSelection}
                        onSelectionChanged={(value: string) =>
                            setSubColourSelection(value)
                        }
                    />
                    <Text style={globalStyles.H2}>
                        The colour intensity is ...
                    </Text>
                    <RangeSelector
                        values={['Pale', 'Medium', 'Deep']}
                        selectedValue={colourIntensity}
                        onValueChanged={(value: string) =>
                            setColourIntensity(value)
                        }
                    />
                    <Text style={globalStyles.LASTCOMPONENTMARGIN}>
                        {
                            ColourIntensityExplanations.find(
                                (e) =>
                                    e.colour === colourSelection &&
                                    e.intensity === colourIntensity
                            )?.description
                        }
                    </Text>
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
