import React from 'react';
import {StyleSheet, SafeAreaView, View, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute, useTheme} from '@react-navigation/native';

import {sizing} from '../styles/sizing';
import {fonts} from '../styles/fonts';

import AppHeaderText from './AppHeaderText';
import {palette} from '../styles/palette';

const SalaVirtualIcon = fonts.icons;

const MainHeader = props => {
    const navigation = useNavigation();
    const route = useRoute();
    const {colors} = useTheme();
    const handleGoBack = () => {
        if (route.params && 'fromScreen' in route.params) {
            navigation.goBack(null);
        }
        navigation.goBack();
    };
    return (
        <View
            style={{
                paddingHorizontal: sizing.l,
                paddingTop: sizing.xl,
                backgroundColor: colors.background,
            }}>
            <SafeAreaView>
                <View style={styles.headerContainer}>
                    <AppHeaderText size="m" weight="400" color={palette.darkGray}>
                        {props.title.indexOf('/') > 0 ? props.title.split('/').reverse()[0].toUpperCase() : props.title.toUpperCase()}
                    </AppHeaderText>
                </View>
                {props.title.indexOf('/') > 0 && (
                    <TouchableOpacity onPress={handleGoBack} style={styles.backContainer}>
                        <SalaVirtualIcon
                            name="left-2"
                            size={fonts.sizing.l + 1}
                            color={palette.black}
                        />
                    </TouchableOpacity>
                )}
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    backContainer: {
        position: 'absolute',
    },
});

export default MainHeader;
