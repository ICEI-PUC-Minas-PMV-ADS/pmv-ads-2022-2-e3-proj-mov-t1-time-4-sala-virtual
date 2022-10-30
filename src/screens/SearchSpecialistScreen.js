import React from 'react';
import {Image, StyleSheet} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import ItemSeparator from '../components/ItemSeparator';
import SearchSpecialist from '../components/SearchSpecialist';

const SearchSpecialistScreen = () => {
  return (
    <ScreenWrapper style={styles.container}>
      <SearchSpecialist />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

export default SearchSpecialistScreen;
