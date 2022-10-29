import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Image } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import Button from '../components/Button';
import List from '../components/List';
import { useAuth } from '../providers/auth';
import { useTheme } from '@react-navigation/native';
import { palette } from '../styles/palette';
import ImageNameVertical from '../components/ImageNameVertical';
import { sizing } from '../styles/sizing';

const AccountScreen = () => {
    
    const { handleSignOut } = useAuth();
    const { colors } = useTheme();
    return (
        <ScreenWrapper style={styles.appContainer}>
            <ImageNameVertical></ImageNameVertical>
            <List></List>
            <View style={styles.btn}>
                <Button label="Sair" labelColor={palette.blue} labelWeight="bold" labelSize="xl" muted onPress={handleSignOut} />
            </View>
            
        </ScreenWrapper>
    )
};

const styles = StyleSheet.create({
    appContainer: {
        flexDirection:'column',
        alignItems: 'center'      
    },
    btn:{
        flex: 1,
      justifyContent:'flex-end',
      paddingBottom: sizing['x']
    }
    
    

  
});

export default AccountScreen;
