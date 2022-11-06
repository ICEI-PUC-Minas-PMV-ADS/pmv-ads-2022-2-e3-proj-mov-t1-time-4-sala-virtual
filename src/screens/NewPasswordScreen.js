import React from 'react';
import {StyleSheet} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import NewPasswordForm from '../components/NewPasswordForm';
import {palette} from '../styles/palette';
import AppText from '../components/AppText';
import ItemSeparator from '../components/ItemSeparator';

const NewPasswordScreen = () => {
    return (
        <ScreenWrapper style={styles.container}>
            <AppText color={palette.black} align={'center'}>
                {
                    'Defina uma nova senha.\nSua nova senha deve conter\nno mínimo 8 caracteres'
                }
            </AppText>
            <ItemSeparator size="xl" />
            <NewPasswordForm />
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
});

export default NewPasswordScreen;
