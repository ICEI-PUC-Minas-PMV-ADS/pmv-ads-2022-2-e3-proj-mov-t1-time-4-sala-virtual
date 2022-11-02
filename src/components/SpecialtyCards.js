import React from 'react'
import {Text,StyleSheet,View,Pressable} from 'react-native'

import {sizing} from '../styles/sizing';
import {palette} from '../styles/palette';
import { fonts } from '../styles/fonts';
import {hexToRGBA} from '../helpers/hexToRGBA';

import ItemSeparator from './ItemSeparator';
import Button from '../components/Button';


export default props => {
    //const specialtyList = props.objectList
    const specialtyList = [
        {id: 1, name:'Medico 1'},
        {id: 2, name:'Medico 2'},
        {id: 3, name:'Medico 3'},
        {id: 4, name:'Medico 4'},
    ]
    const SalaVirtualIcon = fonts.icons;
    function lista() {
        return specialtyList.map(s => {
            return ( 
                <>
                    <ItemSeparator size='s'/>
                    <Button 
                    style={styles.teste}
                    label = {[
                        s.name,
                        <SalaVirtualIcon
                            name = "down-2"
                            size={fonts.sizing.l}
                            color={palette.black}
                        />,
                    ]}
                    labelSize = "s"
                    color = {hexToRGBA(palette.black,0.3)}
                    outline></Button>
                </>
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
    teste:{
        width:336,
        backgroundColor: palette.lightBlue

    }

})
