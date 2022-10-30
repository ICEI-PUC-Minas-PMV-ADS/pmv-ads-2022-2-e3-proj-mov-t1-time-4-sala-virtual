import React from 'react';
import { Image, StyleSheet, View, ScrollView } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import InputLabel from '../components/InputLabel';
import Button from '../components/Button';
import { useAuth } from '../providers/auth';
import { palette } from '../styles/palette';
import AppText from '../components/AppText';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { sizing } from '../styles/sizing';

const CPF_MASK = '999.999.999-99';
const CNPJ_MASK = '99.999.999/9999-99';
const BIRTHDATE_MASK = '99/99/9999';


const EditAccountScreen = () => {
    const { state } = useAuth();

    const EditAccountSchema = Yup.object().shape({
        name: Yup.string()
            .required('Preencha este campo.'),
    });
    const navigation = useNavigation();
    const onEditProfileSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);
        navigation.navigate('Home');
        setSubmitting(false);
    };
    const redefinePassword = () => {
        navigation.navigate('Home');
    };

    return (
        <ScreenWrapper >
            <ScrollView>
                <View style={styles.photoTitleContainer}>
                    <View
                        style={styles.editPhotoContainer}
                    >
                        <Image
                            style={styles.photoStyled}
                            source={require('../assets/images/defaultPhotoProfile.png')} />
                        <View
                            style={styles.editButtonContainer}>
                            <Button
                                style={styles.editButtonStyled}
                                color={palette.blue}
                                icon="edit"
                                iconSize={14}
                                labelColor={palette.white}
                            />
                        </View>
                    </View>
                    <AppText
                        color={palette.darkBlue}
                        align={'center'}
                        size="l"
                        weight="bold"
                    >
                        {state.user.name}
                    </AppText>
                </View>
                <Formik initialValues={{ name: '' }}
                    validationSchema={EditAccountSchema}
                    onSubmit={async (values, { setSubmitting, setFieldError }) => {
                        await onEditProfileSubmit(values, { setSubmitting, setFieldError });
                    }}>
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                            <View style={styles.formContainer}>
                                <InputLabel
                                    placeholder={state.user.name}
                                    value={values.name}
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    error={errors.name}
                                    touched={touched.name}
                                />
                                <InputLabel
                                    value={state.user.email}
                                    disabled
                                />
                                <InputLabel
                                    value={(state.user.document.number)}
                                    disabled
                                    mask={state.user.document.type === 0 ? CPF_MASK : CNPJ_MASK}
                                />

                                <InputLabel
                                    value={(state.user.birthDate.split('-').reverse().join('-'))}
                                    disabled
                                    mask={BIRTHDATE_MASK}
                                />
                            </View>
                            <View style={styles.buttonContainer}>
                                <Button
                                    label="Enviar"
                                    color={palette.blue}
                                    labelWeight="bold"
                                    labelSize="l"
                                    labelColor={palette.white}
                                    onPress={handleSubmit}
                                />
                            </View>
                        </>
                    )}
                </Formik>
                <View>
                    <Button
                        label="Redefinir Senha"
                        labelColor={palette.lightBlue}
                        labelWeight="bold"
                        muted
                        onPress={redefinePassword}
                    />
                </View>
            </ScrollView>
        </ScreenWrapper>

    );
};


const styles = StyleSheet.create({
    formContainer: {
        marginBottom: sizing.m,
    },
    buttonContainer: {
        marginBottom: sizing.m,
    },
    photoTitleContainer: {
        marginTop: sizing.l,
        marginBottom: sizing.s,
    },
    editPhotoContainer: {
        position: 'relative',
    },
    editButtonContainer: {
        position: 'absolute',
        bottom: 10,
        right: 115,
    },
    photoStyled: {
        alignSelf: 'center',
        marginBottom: sizing.m,
    },
    editButtonStyled: {
        borderRadius: 32,
        width: 32,
        height: 32,
    }
});

export default EditAccountScreen;
