import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import AppText from './AppText';
import Button from './Button';
import ScreenWrapper from './ScreenWrapper';
import { useTheme } from '@react-navigation/native';
import { palette } from '../styles/palette';

const List = props => {
    const { colors } = useTheme();
    return (
        <ScreenWrapper>
            <View style={styles.linkContainer}>
                <Image style={styles.img}source={require('../assets/images/avatar.png')}></Image>
                <Text> Nome sobrenome</Text>
            </View>
        
           
        </ScreenWrapper>

    );
};

const styles = StyleSheet.create({
    linkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
    img: {
        width: 72,
        height: 72,
        backgroundcolor: palette.lightBlue,
        color: palette.white
    }
});


export default List;
