import React from 'react';

import AppText from './AppText';

const AppHeaderText = props => {
  return (
    <AppText size="l" weight="semiBold" {...props}>
      {props.children}
    </AppText>
  );
};

export default AppHeaderText;
