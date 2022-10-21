import React from 'react';

import {View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {useNavigation} from '@react-navigation/native';

import {palette} from '../styles/palette';

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
  const onPasswordResetSubmit = async (values, {setSubmitting}) => {
    setSubmitting(true);
    navigation.navigate('Login');
    setSubmitting(false);
  };
  return (
  <Formik
  initialValues={{password: '', passwordConfirmation: ''}}
  validationSchema={PasswordResetSchema}
  onSubmit={async (values, {setSubmitting, setFieldError}) => {
  await onPasswordResetSubmit(values, {setSubmitting, setFieldError});
  }}>
  {({handleChange, handleBlur, values, errors, touched, handleSubmit}) => (
  <View>
    <AppText color={palette.black} align={'center'}>
      {
        'Defina uma nova senha.\nSua nova senha deve conter\nno mínimo 8 caracteres'
      }
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
      labelSize="l"
      labelColor={palette.white}
      onPress={handleSubmit}
    />
  </View>
  )}
  </Formik>
  );
};

export default PasswordResetForm;
