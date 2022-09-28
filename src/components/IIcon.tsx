import {Icon} from 'native-base';
import {InterfaceIconProps} from 'native-base/lib/typescript/components/primitives/Icon/types';
import React, {FC} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  name: string;

  type?:
    | 'MaterialIcons'
    | 'EvilIcons'
    | 'Ionicons'
    | 'Feather'
    | 'MaterialCommunityIcons'
    | 'AntDesign';
}

const IIcon: FC<Props & InterfaceIconProps> = ({type, name, ...props}) => {
  switch (type) {
    case 'AntDesign':
      return <Icon name={name} as={AntDesign} {...props} />;
    case 'Feather':
      return <Icon name={name} as={Feather} {...props} />;
    case 'MaterialCommunityIcons':
      return <Icon name={name} as={MaterialCommunityIcons} {...props} />;
    case 'EvilIcons':
      return <Icon name={name} as={EvilIcons} {...props} />;
    case 'MaterialIcons':
      return <Icon name={name} as={MaterialIcons} {...props} />;

    default:
      return <Icon name={name} as={Ionicons} {...props} />;
  }
};

export default React.memo(IIcon);
