import React from 'react'
import {Text,StyleSheet,View,Pressable} from 'react-native'

import {sizing} from '../styles/sizing';
import { palette} from '../styles/palette';
import {hexToRGBA} from '../helpers/hexToRGBA'

import {Button} from './Button';

export default props => {
    const specialtyList = [
        {id: 1, nome: 'Acumpuntura'},
        {id: 2, nome: 'Alergia e Imunologia'},
        {id: 3, nome: 'Anestesiologia'},
        {id: 4, nome: 'Angiologia'},
        {id: 5, nome: 'Cardiologia'},     
    ]

    function lista() {
        return specialtyList.map(s => {
            return (  
     
            <Pressable 
                style = {styles.cards}
            >
                <Text style = {styles.textCard} key={s.id}>
                    {s.nome}
                </Text>
            </Pressable>        
            )
        })

        
    }
    return(
        <View>
            <Text style={styles.titleContainer}>{props.title}</Text>
            {lista()}
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer:{    
        fontSize:32,
        lineHeight: 52,
        color: palette.darkBlue,
        fontWeight: '600',
        paddingBottom: sizing.m*2,
        textAlign: 'center'
    },
    textCard:{
        fontWeight:'700',
        fontSize: 20,
        lineHeight: 32,
        color: palette.darkBlue,
        textAlign: 'left',
        paddingLeft: sizing.l,
        paddingBottom: sizing.s,
        paddingTop: sizing.s 
    },
    cards:{
        backgroundColor: palette.lightGray,
        borderRadius: sizing.s,
        width: 336,
        height: 56,
        marginBottom: sizing.m
    }
})
