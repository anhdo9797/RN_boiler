import React, {FC} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ViewStyle} from 'react-native';

interface Props {
  name: string;
  size?: number;
  styles?: ViewStyle;
  color?: string;

  type?:
    | 'MaterialIcons'
    | 'EvilIcons'
    | 'Ionicons'
    | 'Feather'
    | 'MaterialCommunityIcons';
}

const IIcon: FC<Props> = ({type, name, size, styles, color}) => {
  switch (type) {
    case 'EvilIcons':
      return (
        <EvilIcons name={name} size={size ?? 14} style={styles} color={color} />
      );
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={name}
          size={size ?? 14}
          style={styles}
          color={color}
        />
      );
    case 'Feather':
      return (
        <Feather name={name} size={size ?? 14} style={styles} color={color} />
      );
    case 'Ionicons':
      return (
        <Ionicons name={name} size={size ?? 14} style={styles} color={color} />
      );

    default:
      return (
        <MaterialIcons
          name={name}
          size={size ?? 14}
          style={styles}
          color={color}
        />
      );
  }
};

export default React.memo(IIcon);
