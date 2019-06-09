import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons';

const MaterialHeaderButton = props => (
  <HeaderButton {...props} IconComponent={MaterialIcons} iconSize={30} color="white" />
);

export const MaterialHeaderButtons = props => (
  <HeaderButtons
    HeaderButtonComponent={MaterialHeaderButton}
    OverflowIcon={<MaterialIcons name="more-vert" size={23} color="white" />}
    {...props}
  />
);

export const { Item } = HeaderButtons;
