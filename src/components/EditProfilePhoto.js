import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Button from './Button';
import { palette } from '../styles/palette';
import { fonts } from '../styles/fonts';



const EditProfilePhoto = () => {

    return (
        <View
            style={styles.container}>
            <Image
                style={styles.photoStyled}
                source={require('../assets/images/defaultPhotoProfile.png')} />
            <Button
                style={styles.buttonStyled}
                color={palette.blue}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position:'relative',
    },
    photoStyled: {
        alignSelf: 'center',
        marginBottom: 16,
    },
    buttonStyled: {
        width: 32,
        height: 32,
        borderRadius: 64,
        position: 'absolute',
        bottom: 10,
        right: 115,

    }
});

export default EditProfilePhoto; 