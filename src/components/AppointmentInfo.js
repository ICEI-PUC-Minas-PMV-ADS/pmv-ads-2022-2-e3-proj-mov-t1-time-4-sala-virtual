import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppText from './AppText';
import {palette} from '../styles/palette';
import {hexToRGBA} from '../helpers/hexToRGBA';
import Button from './Button';
import {sizing} from '../styles/sizing';
import ItemSeparator from './ItemSeparator';
import LineSeparator from './LineSeparator';
import {fonts} from '../styles/fonts';

const SalaVirtualIcon = fonts.icons;

const AppointmentInfo = props => {
  const {
    title,
    specialist,
    specialty,
    date,
    weekDay,
    startHour,
    endHour,
    duration,
    reduced,
  } = props;

  return (
    <View style={styles.container}>
      {title && (
        <View>
          <AppText color={palette.black} weight="bold">
            {title}
          </AppText>
          <ItemSeparator size="s" />
        </View>
      )}
      <View style={styles.infoContainer}>
        <View style={styles.iconContainer}>
          <SalaVirtualIcon
            name="on"
            size={fonts.sizing.l + 2}
            color={palette.black}
          />
        </View>
        <ItemSeparator size="l" />
        <View style={styles.textContainer}>
          <AppText style={styles.infoHeader} weight="bold" size="s">
            {specialist}
          </AppText>
          <AppText color={palette.gray} size="xs">
            {specialty}
          </AppText>
        </View>
      </View>

      <ItemSeparator size="s" />

      <LineSeparator />

      <ItemSeparator size="s" />

      <View style={styles.infoContainer}>
        <View style={styles.iconContainer}>
          <SalaVirtualIcon
            name="calendar"
            size={fonts.sizing.l + 2}
            color={palette.black}
          />
        </View>
        <ItemSeparator size="l" />
        <View style={styles.textContainer}>
          <AppText style={styles.infoHeader} weight="bold" size="s">
            {date}
          </AppText>
          <AppText color={palette.gray} size="xs">
            {weekDay}
          </AppText>
        </View>
      </View>

      <ItemSeparator size="s" />

      <LineSeparator />

      <ItemSeparator size="s" />

      <View style={styles.infoContainer}>
        <View style={styles.iconContainer}>
          <SalaVirtualIcon
            name="clock"
            size={fonts.sizing.l + 2}
            color={palette.black}
          />
        </View>
        <ItemSeparator size="l" />
        <View style={styles.textContainer}>
          <AppText style={styles.infoHeader} weight="bold" size="s">
            {`${startHour.slice(-8, -3)} - ${endHour.slice(-8, -3)}`}
          </AppText>
          <AppText color={palette.gray} size="xs">
            {duration}
          </AppText>
        </View>
      </View>

        {!reduced && (
            <View>
                <ItemSeparator size="s" />
                <View style={styles.buttonContainer}>
                    <Button
                        label="Entrar"
                        color={palette.blue}
                        labelWeight="bold"
                        labelSize="s"
                        labelColor={palette.blue}
                        outline={palette.blue}
                        style={styles.button}
                    />
                    <ItemSeparator size="l" />
                    <Button
                        label="Cancelar"
                        color={palette.red}
                        labelWeight="bold"
                        labelSize="s"
                        labelColor={palette.red}
                        outline
                        style={styles.button}
                    />
                </View>
            </View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: sizing.m,
    borderRadius: sizing.s,
    backgroundColor: hexToRGBA(palette.lightBlue, 0.1),
  },
  infoContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    justifyContent: 'center',
  },
  infoHeader: {
    marginBottom: 2,
  },
  textContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 88,
    backgroundColor: palette.white,
  },
});

export default AppointmentInfo;
