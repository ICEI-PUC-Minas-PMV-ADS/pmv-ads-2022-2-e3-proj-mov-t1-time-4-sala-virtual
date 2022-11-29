import React, {useEffect, useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {useRoute, useNavigation} from '@react-navigation/native';
import {getScheduleByDate, getSpecialist, listSpecialties} from '../networking/auth';
import {Image, StyleSheet, View} from 'react-native';
import ItemSeparator from '../components/ItemSeparator';
import AppText from '../components/AppText';
import {palette} from '../styles/palette';
import {sizing} from '../styles/sizing';
import {fonts} from '../styles/fonts';
import {hexToRGBA} from '../helpers/hexToRGBA';
import DatePicker from '../components/DatePicker';
import Button from '../components/Button';
import AppointmentInfo from '../components/AppointmentInfo';
import Rating from '../components/Rating';
import RadioSelector from '../components/RadioSelector';

const ScheduleScreen = () => {
    const SalaVirtualIcon = fonts.icons;
    const route = useRoute();
    const navigation = useNavigation();
    const {specialistId, specialty} = route.params;
    const [specialist, setSpecialist] = useState(null);
    const [step, setStep] = useState(0);
    const [checkedSteps, setCheckedSteps] = useState(0);
    const [scheduleOptions, setScheduleOptions] = useState([]);
    useEffect(() => {
        async function getSpecialistFromApi() {
            const apiSpecialist = await getSpecialist(specialistId);
            setSpecialist(apiSpecialist);
        }
        getSpecialistFromApi();
    }, []);
    const onStepConfirmation = () => {
        if (step === 2) {
            navigation.popToTop();
            return;
        }
        setCheckedSteps(checkedSteps + 1);
        setStep(step + 1);
    };
    const onScheduleDate = async date => {
        const apiSchedule = await getScheduleByDate(specialistId, date);
        setScheduleOptions(apiSchedule);
    }
    return (
        <ScreenWrapper scroll>
            {specialist && (
                <View style={styles.specialistContainer}>
                    <ItemSeparator size="m" />
                    <View style={styles.specialistProfileContainer}>
                        <Image style={styles.specialistProfilePicture} source={specialist.image ? {uri: specialist.image} : require('../assets/images/avatar.png')} />
                        <ItemSeparator size="m" />
                        <AppText weight="bold" size="l" align="center">{specialist.name}</AppText>
                        <ItemSeparator size="s" />
                        <Rating stars={4} />
                        <ItemSeparator size="m" />
                        <AppText size="s" align="center" color={palette.black} style={styles.specialistBioText} numberOfLines={4}>{specialist.bio}</AppText>
                    </View>
                    <ItemSeparator size="l" />
                    <View style={styles.specialistScheduleContainer}>
                        <AppText weight="bold" size="l" align="center" color={palette.darkBlue}>Agende a sua reunião</AppText>
                        <ItemSeparator size="l" />
                        <View style={styles.specialistScheduleStepperContainer}>
                            <View style={[styles.specialistScheduleStep, step === 0 ? styles.specialistScheduleStepSelected : {}]}>
                                <SalaVirtualIcon name="calendar" size={fonts.sizing.xl + 2} />
                            </View>
                            <View style={[styles.specialistScheduleStep, step === 1 ? styles.specialistScheduleStepSelected : {}, checkedSteps < 1 ? styles.specialistScheduleStepDisabled : {}]}>
                                <SalaVirtualIcon name="clock" size={fonts.sizing.xl + 2} />
                            </View>
                            <View style={[styles.specialistScheduleStep, step === 2 ? styles.specialistScheduleStepSelected : {}, checkedSteps < 2 ? styles.specialistScheduleStepDisabled : {}]}>
                                <SalaVirtualIcon name="check" size={fonts.sizing.xl + 2} />
                            </View>
                        </View>
                        <ItemSeparator size="l" />
                        <View style={styles.specialistScheduleStepContainer}>
                            {step < 2 && (
                                <AppText weight="bold" size="l" align="center" color={palette.darkBlue}>{step === 0 ? 'Escolha a data' : 'Escolha o horário'}</AppText>
                            )}
                            <ItemSeparator size="s" />
                            {step === 0 && (
                                <DatePicker minDate={new Date(2021, 2, 12)} maxDate={new Date(2025, 11, 31)} onSelect={onScheduleDate} />
                            )}
                            {step === 1 && (
                                <RadioSelector options={scheduleOptions} />
                            )}
                            {step === 2 && (
                                <AppointmentInfo
                                    title="Seu Agendamento"
                                    specialist="Dra. Alice Costa"
                                    specialty={specialty.name}
                                    date="10/10/2022"
                                    weekDay="terça-feira"
                                    startEndHour="09:00 AM - 10:00 AM"
                                    duration="1 hora"
                                    reduced={true}
                                    rounded
                                />
                            )}
                        </View>
                        <ItemSeparator size="m" />
                        <View style={styles.specialistScheduleNextStepContainer}>
                            <Button labelColor={palette.blue} labelWeight="bold" muted onPress={onStepConfirmation} label={step !== 2 ? ' Confirmar' : ' Finalizar agendamento'} icon={step !== 2 ? 'check' : undefined} />
                        </View>
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
        width: 80,
        height: 80,
        borderRadius: 80,
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    specialistBioText: {
        paddingHorizontal: sizing.m,
    },
    specialistScheduleContainer: {
        flex: 1,
    },
    specialistScheduleStepperContainer: {
        flexDirection: 'row',
    },
    specialistScheduleStep: {
        flex: 1,
        height: sizing.xl,
        alignItems: 'center',
        justifyContent: 'center',
    },
    specialistScheduleStepSelected: {
        backgroundColor: hexToRGBA(palette.lightBlue, 0.1),
        borderBottomWidth: 2,
        borderBottomColor: palette.blue,
    },
    specialistScheduleStepDisabled: {
        opacity: 0.6,
    },
    specialistScheduleStepContainer: {
        flex: 1,
    },
    specialistScheduleNextStepContainer: {
        flex: 1,
        alignItems: 'center',
    }
});

export default ScheduleScreen;
