import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import AppText from './AppText';
import Button from './Button';

import { useTheme } from '@react-navigation/native';
import { palette } from '../styles/palette';
import { sizing } from '../styles/sizing';
import { fonts } from '../styles/fonts';
import { TouchableHighlight } from 'react-native-gesture-handler';


const List = () => {

    const { colors } = useTheme();
    const SalaVirtualIcon = fonts.icons;
    return (
   
        <View>
            <View style={styles.listContainer}>
                <View style={styles.listView}>
                    <View style={styles.icone}><SalaVirtualIcon name={'user'} size={sizing.l} /></View>
                    <View style={styles.textView}>
                        <AppText size="s" weight="bold">Dados pessoais</AppText>
                        <AppText size="xs" weight="regular" color={palette.darkGray}>Minhas informações da conta</AppText>
                    </View>
                   <View style={styles.icone} ><SalaVirtualIcon  name={'right-1'} size={sizing.l}/></View>
                </View>
            </View>
            <View style={styles.listContainer}>
                <View style={styles.listView}>
                    <View style={styles.icone}><SalaVirtualIcon name={'credit-card'} size={sizing.l} /></View>
                    <View style={styles.textView}>
                        <AppText size="s" weight="bold">Carteira</AppText>
                        <AppText size="xs" weight="regular" color={palette.darkGray}>Meu saldo e cartões</AppText>
                    </View>
                   <View style={styles.icone} ><SalaVirtualIcon  name={'right-1'} size={sizing.l} /></View>
                </View>
            </View>
            <View style={styles.listContainer}>
                <View style={styles.listView}>
                    <View style={styles.icone}><SalaVirtualIcon name={'notification-on'} size={sizing.l} /></View>
                    <View style={styles.textView}>
                        <AppText size="s" weight="bold">Notificações</AppText>
                        <AppText size="xs" weight="regular" color={palette.darkGray}>Minhas notificações</AppText>
                    </View>
                   <View style={styles.icone} ><SalaVirtualIcon  name={'right-1'} size={sizing.l} /></View>
                </View>
            </View>
            <View style={styles.listContainer}>
                <View style={styles.listView}>
                    <View style={styles.icone}><SalaVirtualIcon name={'square'} size={sizing.l} /></View>
                    <View style={styles.textView}>
                        <AppText size="s" weight="bold">Ajuda</AppText>
                        <AppText size="xs" weight="regular" color={palette.darkGray}>Perguntas frequentes</AppText>
                    </View>
                   <View style={styles.icone} ><SalaVirtualIcon  name={'right-1'} size={sizing.l} /></View>
                </View>
            </View>
        </View>
        





     

    );
};

const styles = StyleSheet.create({
    
    

    listContainer:{
        width: 328,
    },
    listView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 8,
        borderBottomWidth: 1,
        borderColor: palette.lightGray
        // backgroundColor: palette.lightGray
    },
    textView: {
        width: "85%",
        flexDirection: 'column',
        paddingLeft: sizing['m'],
       
    },
    icone: {
        width: "10%"
        
    }



});


export default List;
