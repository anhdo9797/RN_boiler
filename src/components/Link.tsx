import {blueColor} from '@share/layout';
import {ILinkProps, Link} from 'native-base';
import React from 'react';

export const ILink = (props: ILinkProps) => (
  <Link
    _text={{
      color: blueColor,
    }}
    {...props}
  />
);
