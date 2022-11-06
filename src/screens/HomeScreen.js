import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ScreenWrapper from '../components/ScreenWrapper';
import AppText from '../components/AppText';

import {useAuth} from '../providers/auth';
import {palette} from '../styles/palette';
import ItemSeparator from '../components/ItemSeparator';
import Card from '../components/Card';
import {fonts} from '../styles/fonts';

import AppointmentInfo from '../components/AppointmentInfo';
import {sizing} from '../styles/sizing';

const SalaVirtualIcon = fonts.icons;

const HomeScreen = () => {
    const navigation = useNavigation();
    const {state} = useAuth();
    return (
        <ScreenWrapper scroll>
            <ItemSeparator size="l" />
            <AppText weight="bold" size="l" color={palette.darkBlue}>Olá, {state.user.name}!</AppText>
            <ItemSeparator size="l" />
            <AppointmentInfo
                title="Próxima Reunião"
                specialist="Dra. Alice Costa"
                specialty="Cardiologia"
                date="10/10/2022"
                weekDay="terça-feira"
                startEndHour="09:00 AM - 10:00 AM"
                duration="1 hora"
                rounded
            />
            <ItemSeparator size="l" />
            <Card
                onPress={() => navigation.navigate('Search')}
                style={styles.bannerContainer}
                color={palette.lightBlue}
                rounded>
                <Image
                    style={styles.bannerImage}
                    source={require('../assets/images/banner.jpg')}
                />
                <View style={styles.infoContainer}>
                    <View style={styles.iconContainer}>
                        <SalaVirtualIcon
                            name="search"
                            size={fonts.sizing.l + 2}
                            color={palette.white}
                        />
                    </View>
                    <ItemSeparator size="m" />
                    <View style={styles.textContainer}>
                        <AppText color={palette.white} weight="bold" size={fonts.sizing.m + 2}>
                            Precisa de orientação?
                        </AppText>
                        <AppText color={palette.white} size={fonts.sizing.m + 2}>
                          Encontre um especialista
                        </AppText>
                    </View>
                </View>
            </Card>
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    bannerContainer: {
        padding: 0,
    },
    bannerImage: {
        height: 250,
        width: '100%',
        resizeMode: 'cover',
        alignSelf: 'center',
        borderTopLeftRadius: sizing.s,
        borderTopRightRadius: sizing.s,
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: sizing.m,
    },
    iconContainer: {
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
    }
});

export default HomeScreen;
