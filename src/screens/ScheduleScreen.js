import React, {useEffect, useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {useRoute} from '@react-navigation/native';
import {getSpecialist} from '../networking/auth';
import {Image, StyleSheet, View} from 'react-native';
import ItemSeparator from '../components/ItemSeparator';
import AppText from '../components/AppText';
import {palette} from '../styles/palette';
import {sizing} from '../styles/sizing';

const ScheduleScreen = () => {
    const route = useRoute();
    const {specialistId, specialty} = route.params;
    const [specialist, setSpecialist] = useState(null);
    useEffect(() => {
        async function getSpecialistFromApi() {
            const apiSpecialist = await getSpecialist(specialistId);
            setSpecialist(apiSpecialist);
        }
        getSpecialistFromApi();
    }, []);
    return (
        <ScreenWrapper>
            {specialist && (
                <View style={styles.specialistContainer}>
                    <ItemSeparator size="xxl" />
                    <View style={styles.specialistProfileContainer}>
                        <Image style={styles.specialistProfilePicture} source={specialist.image ? {uri: specialist.image} : require('../assets/images/avatar.png')} />
                        <ItemSeparator size="l" />
                        <AppText weight="bold" size="l" align="center">{specialist.name}</AppText>
                        <ItemSeparator size="l" />
                        <AppText size="s" align="center" color={palette.black} style={styles.specialistBioText} numberOfLines={4}>{specialist.bio}</AppText>
                    </View>
                </View>
            )}
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    specialistContainer: {
        flex: 1,
    },
    specialistProfileContainer: {
        flex: 1,
    },
    specialistProfilePicture: {
        width: 144,
        height: 144,
        borderRadius: 144,
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    specialistBioText: {
        paddingHorizontal: sizing.m,
    }
});

export default ScheduleScreen;
