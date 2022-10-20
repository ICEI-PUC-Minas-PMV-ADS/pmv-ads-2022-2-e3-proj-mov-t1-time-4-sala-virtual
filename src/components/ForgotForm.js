import React from 'react';

import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {useTheme, useNavigation} from '@react-navigation/native';

import {palette} from '../styles/palette';
import {sizing} from '../styles/sizing';

import Button from './Button';
import InputLabel from './InputLabel';
import AppText from '../components/AppText';
import ItemSeparator from '../components/ItemSeparator';

const ForgotSchema = Yup.object().shape({
  email: Yup.string()
    .email('O email inserido está incorreto.')
    .required('Preencha este campo.'),
});

const ForgotForm = () => {
  const navigation = useNavigation();
  const onForgotSubmit = async (values, {setSubmitting, setFieldError}) => {
    setSubmitting(true);

    try {
      let {errors} = JSON.parse(err);
      if (errors) {
        Object.keys(errors).forEach(field => {
          const fieldName = field === 'User.Email' ? 'Email' : field;
          setFieldError(fieldName.toLowerCase(), errors[field][0] ?? 'Erro.');
        });
      }
    } catch (e) {
      setFieldError('email', err);
    }

    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={{email: ''}}
      validationSchema={ForgotSchema}
      onSubmit={async (values, {setSubmitting, setFieldError}) => {
        await onForgotSubmit(values, {setSubmitting, setFieldError});
      }}>
      {({handleChange, handleBlur, values, errors, touched}) => (
        <View style={styles.formContainer}>
          <AppText color={palette.black} align={'center'} size="m">
            Para redefinir a sua senha, informe o usuário ou e-mail cadastrado
            na sua conta e lhe enviaremos um link com as instruções
          </AppText>
          <ItemSeparator size="xl" />
          <InputLabel
            placeholder={'Email'}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            error={errors.email}
            touched={touched.email}
            keyboardType="email-address"
            autoCapitalize="none"
            r
          />
          <ItemSeparator size="xl" />
          <Button
            label="Enviar"
            color={palette.blue}
            labelWeight="bold"
            labelColor={palette.white}
            onPress={() => navigation.navigate('PasswordReset')}
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

export default ForgotForm;
