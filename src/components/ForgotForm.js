import React from 'react';

import {View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {useNavigation} from '@react-navigation/native';

import {palette} from '../styles/palette';

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
  const onForgotSubmit = async (values, {setSubmitting}) => {
    setSubmitting(true);
    navigation.navigate('PasswordReset');
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={{email: ''}}
      validationSchema={ForgotSchema}
      onSubmit={async (values, {setSubmitting, setFieldError}) => {
        await onForgotSubmit(values, {setSubmitting, setFieldError});
      }}>
      {({handleChange, handleBlur, values, errors, touched, handleSubmit}) => (
        <View>
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
          <ItemSeparator size="l" />
          <Button
            label="Enviar"
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

export default ForgotForm;
