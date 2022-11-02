import React from 'react'
import {Text,StyleSheet,View,ScrollView,Scro} from 'react-native'

import {sizing} from '../styles/sizing';
import {palette} from '../styles/palette';
import { fonts } from '../styles/fonts';
import {hexToRGBA} from '../helpers/hexToRGBA';

import ItemSeparator from './ItemSeparator';
import Card from './CardButton';
import AppText from './AppText';


export default props => {

    const specialtyList = props.objectList.length === 0 ? [] : props.objectList
    console.log(props.objectList.length)
    const SalaVirtualIcon = fonts.icons;

    function lista() {
        return specialtyList.map(s => {
            return ( 
                <View style={styles.cardContainer}>
                    <Card
                        rounded
                        color = {hexToRGBA(palette.lightBlue,0.1)}
                    >
                        <View style = {styles.textContainer}>
                            <AppText size="l" weight = 'bold' color={palette.darkBlue} style={styles.cardText}>
                                    {s.name.toUpperCase()}
                            </AppText>
                            <SalaVirtualIcon name='right' size={fonts.sizing.l} color={palette.blue}/>
                        </View>
                    </Card>
                    <ItemSeparator size={sizing.m} />
                </View>
            )
        })

        
    }
    return(
        <View>
            <Text style={styles.titleContainer}>{props.title}</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {lista()}
            </ScrollView>
            <ItemSeparator size={sizing.xxl*3} />
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer:{    
        fontSize:32,
        lineHeight: 52,
        color: palette.darkBlue,
        fontWeight: '600',
        paddingBottom: sizing.m,
        textAlign: 'center'
    },
    cardContainer:{
        width: 336,
    },
    textContainer:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: sizing.s,
        paddingRight: sizing.s,
    },
    scrollContainer:{
        
    },
})
