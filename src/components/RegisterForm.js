import React from 'react';

import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {parse, isDate, format, differenceInYears} from 'date-fns';

import {useTheme} from '@react-navigation/native';
import {unMask} from 'react-native-mask-text';

import {palette} from '../styles/palette';
import {sizing} from '../styles/sizing';
import {login, register} from '../networking/auth';
import {isValidCPF, isValidCNPJ} from '../helpers/documentValidation';

import Button from './Button';
import InputLabel from "./InputLabel";
import {useAuth} from '../providers/auth';

const CPF_MASK = '999.999.999-99';
const CNPJ_MASK = '99.999.999/9999-99';
const BIRTHDATE_MASK = '99/99/9999';

const today = new Date();

function parseDateString(value, originalValue) {
  return isDate(originalValue)
    ? originalValue
    : parse(originalValue, 'dd/MM/yyyy', today);
}

const RegisterForm = props => {
  const {colors} = useTheme();
  const {handleSignIn} = useAuth();
  const {type} = props;
  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .required('Preencha este campo.'),
    email: Yup.string()
      .email('Endereço de e-mail inválido.')
      .required('Preencha este campo.'),
    document: Yup.lazy(() => {
      return Yup.string()
        .required('Preencha este campo.')
        .transform(value => unMask(value, type === 'client' ? CPF_MASK : CNPJ_MASK))
        .test('validDocument', `${type === 'client' ? 'CPF' : 'CNPJ'} inválido.`, (value) => {
          if (!value) {
            return false;
          }
          return type === 'client' ? isValidCPF(value) : isValidCNPJ(value)
        });
    }),
    birthdate: Yup.date()
      .required('Preencha este campo.')
      .transform(parseDateString)
      .typeError('Data de nascimento inválida.')
      .test('validDate', 'Data de nascimento inválida.', (value) => {
        if (!value) {
          return false;
        }
        return differenceInYears(today, new Date(value)) >= 18;
      }),
    password: Yup.string()
      .required('Preencha este campo.')
      .min(8, 'Sua senha deve ter pelo menos 8 caracteres.')
      .matches(/\d/, 'A senha precisa ter pelo menos um número.')
      .matches(/[a-zA-Z]/, 'A senha precisa ter pelo menos uma letra.'),
    passwordConfirmation: Yup.string()
      .required('Preencha este campo.')
      .oneOf([Yup.ref('password'), null], 'As senhas não coincidem.'),
  });
  const onRegisterSubmit = async (values, {setSubmitting, setFieldError}) => {
    setSubmitting(true);
    try {
      const {name, email, document, birthdate, password} = values;
      await register(type, {user: {name, email, birthDate: format(parse(birthdate, 'dd/MM/yyyy', today), 'yyyy-MM-dd'), password}, document: {type: type === 'client' ? 0 : 1, number: unMask(document, type === 'client' ? CPF_MASK : CNPJ_MASK)}});
      const {token} = await login({email, password});
      await handleSignIn(token);
    } catch (err) {
      err = err.message;
      try {
        let {errors} = JSON.parse(err);
        if (errors) {
          Object.keys(errors).forEach(field => {
            const fieldName = field === 'Document.Number' ? 'Document' : field.split('User.')?.[1] ?? field;
            setFieldError(fieldName.toLowerCase(), errors[field]?.[0] ?? 'Erro.');
          });
        }
      } catch (e) {
        setFieldError('name', err);
      }
    }
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={{name: '', email: '', document: '', birthdate: '', password: '', passwordConfirmation: ''}}
      validationSchema={RegisterSchema}
      onSubmit={async (values, {setSubmitting, setFieldError}) => {
        await onRegisterSubmit(values, {setSubmitting, setFieldError});
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
          <View style={styles.formContainer}>
            <InputLabel
              placeholder={'Nome'}
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              error={errors.name}
              touched={touched.name}
            />
            <InputLabel
                placeholder={'E-mail'}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={errors.email}
                touched={touched.email}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <InputLabel
              placeholder={type === 'client' ? 'CPF' : 'CNPJ'}
              mask={type === 'client' ? CPF_MASK : CNPJ_MASK}
              value={values.document}
              onChangeText={handleChange('document')}
              onBlur={handleBlur('document')}
              error={errors.document}
              touched={touched.document}
              keyboardType="number-pad"
              autoCapitalize="none"
            />
            <InputLabel
              placeholder={'Data de nascimento'}
              mask={BIRTHDATE_MASK}
              value={values.birthdate}
              onChangeText={handleChange('birthdate')}
              onBlur={handleBlur('birthdate')}
              error={errors.birthdate}
              touched={touched.birthdate}
              keyboardType="number-pad"
              autoCapitalize="none"
            />
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
            <Button 
            color={colors.primary} 
            label="Cadastrar" 
            labelColor={palette.white} 
            labelWeight="bold" 
            labelSize="l" 
            onPress={handleSubmit} 
            style={styles.buttonStyle} />
          </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
  },
  buttonStyle: {
    marginTop: sizing.l,
    width: '100%'
  }
});

export default RegisterForm;