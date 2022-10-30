import React from 'react';

import {StyleSheet, View, Alert, Image, FlatList} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import Button from '../components/Button';
import { useAuth } from '../providers/auth';
import { palette } from '../styles/palette';
import ItemSeparator from '../components/ItemSeparator';
import AppText from '../components/AppText';
import {sizing} from '../styles/sizing';
import {fonts} from '../styles/fonts';
import {accountScreens} from '../routes/account';

const AccountScreen = () => {
  const SalaVirtualIcon = fonts.icons;
  const signOutAlert = () =>
    Alert.alert(
      'Sair',
      'Tem certeza de que deseja desconectar sua conta?',
      [
        {
          text: "Não",
          style: "cancel"
        },
        { text: "Sair", onPress: handleSignOut }
      ]
    );
  const renderMenu = ({item}) => (
    <View style={styles.rowContainer}>
      <SalaVirtualIcon name={item.icon} size={sizing.l} />
      <ItemSeparator size="l" />
      <View style={styles.textContainer}>
        <AppText size="s" weight="bold">{item.title}</AppText>
        <AppText size="xs" weight="regular" color={palette.darkGray}>{item.description}</AppText>
      </View>
      <SalaVirtualIcon  name={'right-1'} size={sizing.l} />
    </View>
  );
  const { handleSignOut, state } = useAuth();
  const {user} = state;
  return (
      <ScreenWrapper>
        <ItemSeparator size="xxl" />
        <View style={styles.profileContainer}>
          <Image style={styles.img} source={require('../assets/images/avatar.png')}></Image>
          <ItemSeparator size="s" />
          <AppText size="l" weight="bold"> {user.name}</AppText>
        </View>
        <ItemSeparator size="xl" />

        <View style={styles.listContainer}>
          <FlatList data={accountScreens} renderItem={renderMenu} keyExtractor={(item) => item.screen} ItemSeparatorComponent={() => <ItemSeparator size="s" />} />
        </View>

        <View style={styles.signOutContainer}>
            <Button label="Sair" labelColor={palette.blue} labelWeight="bold" labelSize="xl" muted onPress={signOutAlert} />
        </View>
        <ItemSeparator size="l" />
      </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOutContainer: {
    flex: 1,
    justifyContent:'flex-end',
  },
  listContainer:{
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: sizing.s,
    borderBottomWidth: 1,
    borderColor: palette.lightGray
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default AccountScreen;
