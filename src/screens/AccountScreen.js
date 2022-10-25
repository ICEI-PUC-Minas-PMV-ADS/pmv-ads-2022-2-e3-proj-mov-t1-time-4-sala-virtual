import React from 'react';
import {StyleSheet, Text} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import Button from '../components/Button';
import List from '../components/List';
import {useAuth} from '../providers/auth';
import {useTheme} from '@react-navigation/native';
import {palette} from '../styles/palette';


const AccountScreen = () => {
    const {handleSignOut} = useAuth();
    const {colors} = useTheme();
    return (
      <ScreenWrapper style={styles.appContainer}>
           <List></List>
          <Text>Conta</Text>
          <Button label="Sair" color={colors.primary} labelColor={palette.white} labelWeight="bold" labelSize="m" onPress={handleSignOut}/>
      </ScreenWrapper>
    )
};

const styles = StyleSheet.create({
    appContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AccountScreen;
