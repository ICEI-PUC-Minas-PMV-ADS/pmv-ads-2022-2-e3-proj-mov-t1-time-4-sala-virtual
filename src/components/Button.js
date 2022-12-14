import React from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import { sizing } from '../styles/sizing';
import { fonts } from '../styles/fonts';
import { hexToRGBA } from '../helpers/hexToRGBA';

const Button = props => {
    const SalaVirtualIcon = fonts.icons;
    const {
        style,
        label,
        color,
        labelColor,
        labelSize,
        labelWeight,
        outline,
        onPress,
        icon,
        muted,
        iconSize,
    } = props;
    let _handleButtonPress = async () => {
        if (onPress) {
            onPress();
        }
    };
    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                {
                    borderColor: muted ? 'transparent' : (!outline
                        ? pressed
                            ? hexToRGBA(color, 0.9)
                            : color
                        : color),
                    backgroundColor: muted ? 'transparent' : (!outline
                        ? pressed
                            ? hexToRGBA(color, 0.9)
                            : color
                        : 'transparent'),
                    opacity: !muted ? 1 : (pressed ? 0.9 : 1),
                },
                style ?? {},
            ]}
            onPress={_handleButtonPress}>
            {icon && (
                <View>
                    <SalaVirtualIcon
                        style={{ color: labelColor }}
                        name={icon}
                        size={iconSize ?? sizing.l}
                    />
                </View>
            )}
            {label && (
                <Text
                    style={[
                        styles.labelText,
                        {
                            color: labelColor,
                            fontFamily: fonts.sans.normal[labelWeight ?? 'regular'],
                            fontSize: fonts.sizing[labelSize ?? 'm'],
                        },
                    ]}>
                    {label}
                </Text>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: sizing.s,
        padding: sizing.s,
        borderWidth: 1,
    },
    labelText: {
        textAlign: 'center',
    },
});

export default Button;
