import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ScreenWrapper from './ScreenWrapper';
import { useAuth } from '../providers/auth';
import { useTheme } from '@react-navigation/native';
import {sizing} from '../styles/sizing';
import AppText from './AppText';

const ImageNameVertical = () => {
    const { handleSignOut } = useAuth();
    const { colors } = useTheme();
    return (
        <View style={styles.containerImg}>
            <Image style={styles.img} source={require('../assets/images/avatar.png')}></Image>
            <AppText size="l" weight="bold"> Nome Sobrenome</AppText>
         </View>
    )
};
const styles = StyleSheet.create({
   
    containerImg: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: sizing['xs'],
        paddingBottom: sizing['x']
        
    },
    img:{
        marginRight: sizing['s']
    },
    

  
});
export default ImageNameVertical;