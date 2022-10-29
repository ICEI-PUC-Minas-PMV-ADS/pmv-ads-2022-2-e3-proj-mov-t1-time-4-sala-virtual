import React from 'react';
import MainHeader from '../components/MainHeader';
import { StyleSheet, ScrollView } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import InputLabel from '../components/InputLabel';
import { View } from 'react-native';
import Button from '../components/Button';
import { useAuth } from '../providers/auth';
import { palette } from '../styles/palette';
import AppText from '../components/AppText';
import EditProfilePhoto from '../components/EditProfilePhoto';
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
    })
    const navigation = useNavigation();
    const onEditProfileSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);
        navigation.navigate('Home');
        setSubmitting(false);
    }
    const redefinePassword = () => {
        navigation.navigate('Home');
    }

    return (
        <ScreenWrapper >
            <ScrollView>              
                <View style={styles.photoTitleContainer}>
                    <EditProfilePhoto />
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
                            <View style={styles.appContainer}>
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
                                    value={(state.user.birthDate.split("-").reverse().join("-"))}
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

    )
}


const styles = StyleSheet.create({
    appContainer: {
        marginLeft: sizing.m,
        marginRight: sizing.m,
        marginBottom: sizing.m,
    },
    buttonContainer: {
        margin: sizing.m,
    },
    photoTitleContainer: {
        marginTop: sizing.l,
        marginBottom: sizing.s,
    },
});

export default EditAccountScreen;
