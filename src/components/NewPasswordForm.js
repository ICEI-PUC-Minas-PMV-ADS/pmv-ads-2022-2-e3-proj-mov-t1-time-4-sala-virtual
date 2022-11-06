import React from 'react';

import {View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {useNavigation} from '@react-navigation/native';

import {palette} from '../styles/palette';

import Button from './Button';
import InputLabel from './InputLabel';
import ItemSeparator from '../components/ItemSeparator';

const NewPasswordSchema = Yup.object().shape({
    currentPassword: Yup.string().required('Preencha este campo.'),
    password: Yup.string()
        .required('Preencha este campo.')
        .min(8, 'Sua senha deve ter pelo menos 8 caracteres.')
        .matches(/\d/, 'A senha precisa ter pelo menos um número.')
        .matches(/[a-zA-Z]/, 'A senha precisa ter pelo menos uma letra.')
        .notOneOf([Yup.ref('currentPassword'), null], 'A nova senha não pode ser igual à antiga.'),
    passwordConfirmation: Yup.string()
        .required('Preencha este campo.')
        .oneOf([Yup.ref('password'), null], 'As senhas não coincidem.'),
});

const NewPasswordForm = () => {
    const navigation = useNavigation();
    const onPasswordSubmit = async (values, {setSubmitting}) => {
        setSubmitting(true);
        navigation.popToTop();
        setSubmitting(false);
    };
    return (
        <Formik
            initialValues={{currentPassword: '', password: '', passwordConfirmation: ''}}
            validationSchema={NewPasswordSchema}
            onSubmit={async (values, {setSubmitting, setFieldError}) => {
                await onPasswordSubmit(values, {setSubmitting, setFieldError});
            }}>
            {({handleChange, handleBlur, values, errors, touched, handleSubmit}) => (
                <View>
                    <InputLabel
                        placeholder={'Senha Antiga'}
                        value={values.currentPassword}
                        onChangeText={handleChange('currentPassword')}
                        onBlur={handleBlur('currentPassword')}
                        error={errors.currentPassword}
                        touched={touched.currentPassword}
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                    <ItemSeparator size="xl" />
                    <InputLabel
                        placeholder={'Nova Senha'}
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        error={errors.password}
                        touched={touched.password}
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                    <ItemSeparator size="xl" />
                    <InputLabel
                        placeholder={'Confirmar senha'}
                        value={values.passwordConfirmation}
                        onChangeText={handleChange('passwordConfirmation')}
                        onBlur={handleBlur('passwordConfirmation')}
                        error={errors.passwordConfirmation}
                        touched={touched.passwordConfirmation}
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                    <ItemSeparator size="xl" />
                    <Button label="Redefinir Senha"
                        color={palette.blue}
                        labelWeight="bold"
                        labelSize="l"
                        labelColor={palette.white}
                        onPress={handleSubmit}
                    />
                </View>
            )}
        </Formik>
    );
};

export default NewPasswordForm;
