import React from 'react';
import {View} from 'react-native';

import {sizing} from '../styles/sizing';

const ItemSeparator = props => {
  return (
    <View
      style={{
        flex: 1,
        width: sizing[props.size] ?? props.size,
        height: sizing[props.size] ?? props.size,
      }}
    />
  );
};

export default ItemSeparator;
