import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useLocalization } from '../providers/LocalizationProvider';
import { ItemRow } from '../components';


const Home = () => {
    const { locale, setLocale, translate } = useLocalization();

    return (
        <View style={styles.container}>
            <ItemRow
                text={translate('app.languages.english')}
                onPress={() => setLocale('en')}
                disabled={locale === 'en'}
                selected={locale === 'en'}
            />
            <ItemRow
                text={translate('app.languages.turkish')}
                onPress={() => setLocale('tr')}
                disabled={locale === 'tr'}
                selected={locale === 'tr'}
            />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 12,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
