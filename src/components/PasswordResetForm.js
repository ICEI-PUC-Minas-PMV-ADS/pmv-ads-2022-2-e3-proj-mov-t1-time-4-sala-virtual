import React from 'react';

import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {useTheme, useNavigation} from '@react-navigation/native';

import {palette} from '../styles/palette';
import {sizing} from '../styles/sizing';

import Button from './Button';
import InputLabel from "./InputLabel";
import AppText from '../components/AppText';
import ItemSeparator from '../components/ItemSeparator';

const PasswordResetSchema = Yup.object().shape({  
    password: Yup.string()
    .required('Preencha este campo.')
    .min(8, 'Sua senha deve ter pelo menos 8 caracteres.')
    .matches(/\d/, 'A senha precisa ter pelo menos um número.')
    .matches(/[a-zA-Z]/, 'A senha precisa ter pelo menos uma letra.'),
    passwordConfirmation: Yup.string()
    .required('Preencha este campo.')
    .oneOf([Yup.ref('password'), null], 'As senhas não coincidem.'),
})

const PasswordResetForm = () => {
    const navigation = useNavigation();
    const onForgotSubmit = async (values, {setSubmitting, setFieldError}) => {
    setSubmitting(true);

        try {
          let {errors} = JSON.parse(err);
          if (errors) {
            Object.keys(errors).forEach(field => {
              const fieldName = field === 'User.Password' ? 'Password' : field.split('User.')?.[1] ?? field;
              setFieldError(fieldName.toLowerCase(), errors[field]?.[0] ?? 'Erro.');
            });
          }
        } catch (e) {
          setFieldError('password', err);
        }
      
      setSubmitting(false);
    };
    return (
        <Formik
            initialValues={{password: ''}}
            validationSchema={PasswordResetSchema}
            onSubmit={async (values, {setSubmitting, setFieldError}) => {
                await onForgotSubmit(values, {setSubmitting, setFieldError});
            }}>
            {({handleChange, handleBlur, values, errors, touched}) => (
                <View style={styles.formContainer}>
                <AppText color={palette.black} align={'center'} size="m">
                    Defina uma nova senha. Sua nova senha deve conter no mínimo 8 caracteres
                </AppText>
                <ItemSeparator size="xl" />
                <InputLabel
                        placeholder={'Senha'}
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
                <Button label="Entrar" 
                color={palette.blue} 
                labelWeight="bold" 
                labelColor={palette.white} 
                onPress={() => navigation.navigate('Home')} 
                />
                </View>
            )}
        </Formik>
  );
};

const styles = StyleSheet.create({
    buttonContainer: {
    marginTop: sizing.m,
    flexDirection: 'row',
    justifyContent: 'space-between',
    },
});


export default PasswordResetForm;