import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Button from './Button';
import { palette } from '../styles/palette';
import { fonts } from '../styles/fonts';
import { sizing } from '../styles/sizing';



const EditProfilePhoto = () => {

    return (
        <View
            style={styles.container}>
            <Image
                style={styles.photoStyled}
                source={require('../assets/images/defaultPhotoProfile.png')} />
            <View
            style={styles.buttonContainer}>
                <Button
                    style={styles.buttonStyled}
                    color={palette.blue}
                    icon="edit"
                    iconSize={14}
                    labelColor={palette.white}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    buttonContainer: {
      position:  'absolute',
      bottom: 10,
      right: 115,
      
    },
    photoStyled: {
        alignSelf: 'center',
        marginBottom: 16,
    },
    buttonStyled: {
        borderRadius: 32,
        width: 32,
        height: 32,       

    }
});

export default EditProfilePhoto; 